SystemJS.config({
    paths: {
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/",
        "dolittle-javascript-dependencyinversion/": "Source/"
    },
    browserConfig: {
        "baseURL": "/"
    },
    devConfig: {
        "map": {
            "fs": "npm:jspm-nodelibs-fs@0.2.1",
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
            "process": "npm:jspm-nodelibs-process@0.2.1",
            "babel-runtime": "npm:babel-runtime@5.8.38",
            "core-js": "npm:core-js@1.2.7",
            "path": "npm:jspm-nodelibs-path@0.2.3"
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "dolittle-javascript-dependencyinversion": {
            "main": "Distribution/index.js",
            "meta": {
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        },
        "github:dolittle/dolittle.javascript.core/Source/Execution@master": {
            "map": {
                "dolittle-javascript-reflection": "github:dolittle/dolittle.javascript.core/Source/Execution@master"
            }
        }
    },
    map: {
        "dolittle-javascript-reflection": "github:Cratis/JavaScript.Reflection@master",
        "dolittle-javascript-execution": "github:Cratis/JavaScript.Core@master"
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {},
    packages: {}
});