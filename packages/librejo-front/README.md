[![Netlify Status](https://api.netlify.com/api/v1/badges/33ac0f83-c2a7-497e-a7aa-b29d02600999/deploy-status)](https://app.netlify.com/sites/upbeat-bhabha-131a24/deploys)
![Neoark Front CI](https://github.com/romainbellande/neoark/workflows/Neoark%20Front%20CI/badge.svg)[![codecov](https://codecov.io/gh/romainbellande/neoark/branch/master/graph/badge.svg?flag=neoark_front)](https://codecov.io/gh/romainbellande/neoark)

# Neoark Front

Ogame like game.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tooling

This project is made in Typescript

## Testing

- [jest](https://jestjs.io/)
- [storyshots](https://www.npmjs.com/package/@storybook/addon-storyshots)
- [testing-library](https://testing-library.com/docs/react-testing-library/intro)

### CI / CD

- [github actions](https://github.com/features/actions) ([wip](https://github.com/marketplace/wip) & nodejs build)
- [coveralls](https://coveralls.io)
- [netlify](https://www.netlify.com)

## Quality

- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
- [husky](https://github.com/typicode/husky)

## Misc

- [create react app](https://create-react-app.dev/)
- [storybook](https://storybook.js.org/)

## Suggested settings for Vscode

In your .vscode/settings.json file:

```json
{
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
  "path-intellisense.mappings": {
    "src": "${workspaceRoot}/src"
  }
}
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
