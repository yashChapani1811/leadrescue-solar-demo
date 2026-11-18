# Put LeadRescue on GitHub Pages

This is a **public concept demo**, not a production app. It has fictional data and browser-local storage only. **Never import real customers.**

## A. Create an empty GitHub repository

1. Sign into the GitHub account that should own the project.
2. Open https://github.com/new and choose the name `leadrescue-solar-demo`.
3. Choose **Public** to use standard free GitHub Pages hosting.
4. Do **not** initialize it with a README, `.gitignore` or license. Create the repository.
5. Copy its URL and share it so the current project can be pushed using the connected GitHub app. **Do not share an access token or password.**

## B. If you prefer to push from your PC

```bash
cd leadrescue-demo
git init
git add .
git commit -m "Refine LeadRescue demo typography and copy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/leadrescue-solar-demo.git
git push -u origin main
```

## C. Publish the site

1. In your repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions**.
3. The included workflow at `.github/workflows/deploy-pages.yml` will deploy the static site on pushes to `main` once Pages has been enabled and GitHub Actions are allowed.
4. Open the **Actions** tab and wait until the `Deploy LeadRescue demo` run is successful.
5. Use the link in the workflow's `github-pages` environment or in **Settings → Pages**.

You may alternatively deploy from **Settings → Pages → Deploy from a branch → main → /(root)**, without using Actions.

## Important

GitHub Pages serves static files; it does not provide secure authentication, billing, protected customer records or backend automation. The project's `index.html`, `styles.css`, `app.js` and `assets` directory must be pushed together for the demo to work.
