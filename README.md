# Student Feedback Web Application

A static web app where users submit their name, course, and feedback. Submissions are displayed immediately and stored in the browser using localStorage.

## Run locally

Open `index.html` in a browser.

## Test

```bash
npm test
```

## CI/CD

GitHub Actions runs automated tests on every pull request and push to `main`. A successful push to `main` deploys the static site to GitHub Pages. In repository **Settings → Pages**, choose **GitHub Actions** as the build source if GitHub asks you to configure it.

## Note

Because this is a static GitHub Pages application, feedback is stored only in the current browser and is not shared with other users.