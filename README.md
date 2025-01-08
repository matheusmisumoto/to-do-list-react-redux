# To Do List

This project uses Next.js and Redux to create a To Do list. It also uses Bootstrap for CSS formatting.

You can add a new task, or remove each one from the list. If the list is empty, the script shows a message on screen to the user.

It also uses ``localStorage`` to keep the list of tasks saved on user's browser.

See it in action: [https://projects.matheusmisumoto.dev/react-redux-to-do-list/](https://projects.matheusmisumoto.dev/react-redux-to-do-list/)

## Available Scripts

In the project directory, you can run:

### Run the app in development mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### Build the app for production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Builds the app for production to the `out` folder.
It correctly bundles Next.js in production mode, as a client application, and optimizes the build for the best performance.

It uses the root path of the domain as default, but you can set a path prefix for the application defining `APP_BASE_PATH` inside a `.env` file.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Check for problems

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```
Runs ESLint analysis tool that helps you find and fix problems with your JavaScript code.

---
Developed with ☕ by [Matheus Misumoto](https://matheusmisumoto.dev) in Santos, Brazil