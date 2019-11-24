# CRA and Cypress

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Then we added Cypress to try developing using Cypress as main browser during development.
We also want to stub api calls to backend.

## Cypress setup

Cypress uses Mocha for `describe` and `it` keywords and `expect` comes from Chai assertion library.

```bash
# install
npm i -D cypress
# first init
npx cypress open

```

### Cypress configuration

At the root of the project there is `cypress.json` file. You use this file to overwrite default configuration.
If you want to have dynamic configuration you can use node module in plugins folder.
Cypress creates by default following folder structure in the cypress folder (which is in the root of the project)

- fixtures: for stubbing data request
- integration: where the test files are
- plugins: for specific plugins?!?. More information in [documentation](https://on.cypress.io/plugins-guide)
- support: for creating custom commands or overwrite defaultones

### Cypres eslint

If your project is using eslint you need to install the plugin and include it in the esling config file.

```bash
# install cypress plugin
yarn add -D eslint-plugin-cypress
```

- extend eslintrc.json file from basic react-app

```json
{
  "extends": ["react-app", "plugin:cypress/recommended"]
}
```

### Cypress fixtures

Cypress can be used to stub XHR request. Note that Fetch API does not uses XHR and therefore cannot be intercepted using `cy.route()`. To use cy.route() you need to use axios (for example or Ajax). To intercept fetch api calls you will need to stub window.fetch on your own. Example is [here](https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__window-fetch/cypress/integration/stub-fetch-spec.js)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
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

### Code Splitting

This section has moved [here:](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved [here:](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved [here:](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved [here:](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved [here:](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved [here:](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
