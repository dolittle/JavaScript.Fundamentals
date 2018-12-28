# JavaScript.Fundamentals

## Local Development

This repository leverages [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). In the `Source` folder, you'll
find a `package.json` which holds information about all the different modules, known as workspaces.
This enables quicker and more reliable local development instead of using `npm link` or `yarn link`.
All you have to do is then do a `yarn install` in the folder that uses one of the other dependencies and it will resolve it
from the local representation.

Once set up, all you need to do is run the `yarn run transpile` task to get new `dist` files for the other packages to make
use of.

## Modules

https://github.com/nodejs/node-eps/blob/4217dca299d89c8c18ac44c878b5fe9581974ef3/002-es6-modules.md#51-determining-if-source-is-an-es-module

Document main, module, jspm