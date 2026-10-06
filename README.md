# Thaki's Portfolio

A responsive personal portfolio built with React and Vite. It includes an about section, skills, the Coin Toss project, a certificate, and an email contact link.

## Publish with GitHub Pages

The included GitHub Actions workflow builds and deploys the site whenever code is pushed to `main`.

1. Create a public GitHub repository named `thaki-portfolio`.
2. Push this project to the repository's `main` branch.
3. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
4. When the **Deploy portfolio to GitHub Pages** workflow succeeds, find the shareable website link under **Settings → Pages**.

The certificate and profile/project photos are part of the public website and repository.

## Run locally

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open this folder in VS Code.
3. Open the VS Code terminal and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build, run `npm run build`. The generated site will be in the `dist` folder.
To check the production build locally, run `npm run preview` and open the URL Vite prints.

## Quick edits for a live modification

- **Text and project details:** edit `src/App.jsx`.
- **Colors, spacing, and responsive layout:** edit `src/styles.css`.
- **Profile photo and project image:** replace the matching files in `public/images`.
- **Certificate:** replace `public/images/web-development-certificate.jpeg`.

The email contact link opens the visitor's email app; the site does not collect or store messages.
