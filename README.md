# MonoRepo

This is a [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) mono repo which comprises 2 workspaces.

- **Package1** - this is the development environment for our React components built on React [Storybook](https://storybook.js.org/)

- **Package2** which is the single page app.

## Get started

Pull down the repo and run the following command in the application root

```
yarn install
```

This will install dependencies for all workspaces, hoisting the shared ones to the root `node_modules` folder.

To run the Package1

```
cd Package1
yarn storybook
```

To run the Package1

```
cd Package1
yarn start
```
