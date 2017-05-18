// http://ilikekillnerds.com/2016/04/webpack-typescript-aurelia-wallaby-js/
// https://github.com/wallabyjs/wallaby-jspm-sample/blob/master/wallaby.js
"use strict";
var cachebust = require('express-cachebust');

module.exports = function (wallaby) {
    return {
        files: [
            { pattern: "!**/jspm_packages", instrument: false },
            { pattern: "jspm_packages/system.js", instrument: false },
            { pattern: "node_modules/chai/chai.js", instrument: false },
            { pattern: "node_modules/chai-as-promised/chai-as-promised.js", instrument: false },
            { pattern: "node_modules/sinon/pkg/sinon.js", instrument: false },
            { pattern: "jspm.config.js", instrument: false },
            { pattern: "json.js", instrument: false, load: false },
            { pattern: "package.json", instrument: false, load: false },
            { pattern: "Specifications/**/given/*.js", load: false },
            { pattern: "!Source/**/jspm_packages/**/*.js", instrument: false },
            { pattern: "Source/**/*.js", load: false }
        ],
        tests: [
            { pattern: "!Specifications/**/given/*.js", load: false },
            { pattern: "Specifications/**/*.js", load: false }
        ],

        compilers: {
            "**/*.js": wallaby.compilers.babel({
                babelrc: true
            })
        },

        env: {
            kind: "electron"
        },

        middleware: (app, express) => {
            app.use(cachebust("/"));
            app.use("/jspm_packages", express.static(require("path").join(__dirname, "jspm_packages")));
        },

        setup: function (wallaby) {
            wallaby.delayStart();

            window.expect = chai.expect;
            var should = chai.should();

            System.import("./package.json!./json.js").then(function (pkg) {

                console.log("Package loaded");

                var systemConfig = {
                    transpiler: false,
                    packages: {
                        "/": {
                            defaultExtension: "js",
                            format: "cjs",
                            meta: {
                                "*": {
                                    
                                }
                            }
                        }
                    }
                };

                System.config(systemConfig);

                var promises = [];
                for (var i = 0, len = wallaby.tests.length; i < len; i++) {
                    console.log("Import : "+wallaby.tests[i]);
                    promises.push(System['import'](wallaby.tests[i]));
                }

                Promise.all(promises).then(function () {
                    wallaby.start();
                }).catch(function (e) {
                    setTimeout(function () {
                        throw e;
                    }, 0);
                });

            });
        },

        testFramework: "mocha",

        debug: true
    };
};