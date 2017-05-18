SystemJS.config({
  paths: {
    "dolittle-exceptions/": "./"
  },
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "dolittle-exceptions": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "dolittle-reflection": "npm:dolittle-reflection@1.0.5"
  },
  packages: {}
});
