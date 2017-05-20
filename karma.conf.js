"use strict";
module.exports = function (config) {
    config.set({
        basePath: "",
        autoWatch: false,
        singleRun: true,
        frameworks: ["jspm", "mocha", "chai", "chai-as-promised"],
        files: [
            //"node_modules/promise/polyfill.js",
            //"node_modules/babel-polyfill/dist/polyfill.js"
        ],
        jspm: {
            config: "jspm.config.js",
            packages: "jspm_packages/",
            stripExtension: false,
            beforeFiles: [
                "node_modules/requirejs/require.js",
                "node_modules/asap/browser-raw.js",
                "node_modules/promise/polyfill.js",
                "node_modules/babel-polyfill/dist/polyfill.js",
                "node_modules/chai/chai.js",
                "node_modules/chai-as-promised/lib/chai-as-promised.js",
                "node_modules/sinon/pkg/sinon.js"
            ],
            loadFiles: [
                //"Specifications/**/*.js"
                "Specifications/Exceptions/for_Exception/when_throwing_exception_with_message_parameters.js"
            ],
            serveFiles: [
                //"Specifications/**/!*.js"
            ]
        },

        preprocessors: {
            "Specifications/**/*.js": ["babel"],
            "Source/**/*.js": ["babel"]
        },

        proxies: {
            "/Source": "/base/Source"

        },

        port: 9876,

        browsers: ["PhantomJS"],
        reporters: ["progress"]
    });
};