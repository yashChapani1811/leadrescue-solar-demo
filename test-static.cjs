// Zero-dependency smoke test. Run: node test-static.cjs
const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');
const handlers = {};
const main = { innerHTML: '' };
const windowStub = { location: { hash: '#/' }, addEventListener: (name, callback) => {handlers['window:' + name] = callback}, scrollTo() {} };
const documentStub = {
  body: { style: {} },
  getElementById(name) { return name === 'app' ? main : name === 'toast-container' ? { appendChild() {} } : null },
  addEventListener(name, callback) { handlers['document:' + name] = callback },
};
const storage = {};
const ctx = {
  document: documentStub,
  window: windowStub,
  localStorage: { getItem(k) {return storage[k] ?? null}, setItem(k,v) {storage[k] = v} },
  navigator: { clipboard: { writeText: async () => {} } },
  setTimeout: () => 0,
  Date, Math, String, Number, JSON, Object, Array, RegExp, Error, console,
};
vm.runInNewContext(fs.readFileSync(__dirname + '/app.js','utf8'),ctx, {filename:'app.js'});
assert.match(main.innerHTML, /A customer called/);
assert.match(main.innerHTML, /Where did that roof photo go/);
for (const view of ['overview','leads','followups','reports','settings']) {
 windowStub.location.hash = '#/demo/' + view;
 handlers['window:hashchange']();
 assert.match(main.innerHTML, /class="workspace"/);
 assert.match(main.innerHTML, /Demo workspace/);
 assert.match(main.innerHTML, /Sample solar team/);
}
windowStub.location.hash = '#/demo/overview';
handlers['window:hashchange']();
assert.match(main.innerHTML, /A quick look at your day/);
assert.match(main.innerHTML, /Follow-ups due/);
console.log('PASS: landing and five demo views render without errors');
