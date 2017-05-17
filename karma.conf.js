"use strict";
module.exports = function (config) {
    config.set({
        basePath: "",
        autoWatch: true,
        singleRun: false,
        frameworks: ["jspm", "jasmine", "chai", "chai-as-promised"],
        jspm: {
            config: "config.js",
            packages: "jspm_packages/",
            loadFiles: [
                "Source/**/*.js",
                "Specifications/**/*.js"
            ],
            serveFiles: [
            ]
        },
        
        //preprocessors: {
        //    'Specifications/**/*.js': ['babel'],
        //    'Source/**/*.js': ['babel']
        //},        
        
        proxies: {
            '/Source': '/base/Source'
        },
        
        port: 9876,
        
        browsers: ['PhantomJS'],
        reporters: ['progress']
    });
};