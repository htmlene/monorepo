# MonoRepo

This is a [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) mono repo which comprises 2 workspaces.

- **Package1** - this is the development environment for our React components built on React [Storybook](https://storybook.js.org/)

- **Package2** which is the single page app.

## Get started

Pull down the repo and run the following command in the application root

```
yarn install
lerna link
```

This will install dependencies for all workspaces, hoisting the shared ones to the root `node_modules` folder.

To run the Package2

```
cd Package1
yarn start
```

Observe the compilation error: Can't resolve '@babel/runtime/helpers/esm/extends' in '/Users/Helene/Documents/GitHub/monorepo/node_modules/history/esm'.
The same error would appear if @babel/runtime/helpers/esm/extends is imported from package2/index.js
