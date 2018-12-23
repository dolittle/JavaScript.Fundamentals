if (false) {
    const wallaby = require('@dolittle/build/wallaby')
    module.exports = wallaby('.', null, (config) => {
        config.files.push({ pattern: `**/node_modules/**/*.js`, ignore: true });
    });
}

const babelConfig = {
    'plugins': [
        "@babel/plugin-transform-modules-systemjs",
        "@babel/plugin-proposal-class-properties",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        
          ["@babel/plugin-transform-runtime",
            {
                "corejs": false,
                "helpers": false,
                "regenerator": true,
                "useESModules": false
            }
        ]
    ],
    'presets': ['@babel/preset-env']
};

module.exports = function (wallaby) {

    let wallabyConfig = {
        //debug: true,
        //reportConsoleErrorAsError: true,
        files: [
            { pattern: 'wallaby.js', ignore: true },
            { pattern: 'karma.conf.js', ignore: true },

            { pattern: 'node_modules/chai/chai.js', instrument: false },
            { pattern: 'node_modules/chai-as-promised/lib/chai-as-promised.js', instrument: false },
            { pattern: "node_modules/sinon/pkg/sinon.js", instrument: false },
            { pattern: "node_modules/systemjs/dist/system.js", instrument: false },
            
            { pattern: "defaultExtensions.js", instrument: false },
            { pattern: "json.js", instrument: false },
            { pattern: "package.json", instrument: false, load: false },
            { pattern: 'Source/**/dist/**/*.js', ignore: true },
            { pattern: 'Source/**/dist/**/for_*/*.js', ignore: true },
            { pattern: 'Source/**/for_*/*.js', ignore: true },
            { pattern: 'Source/**/*.js', load: false },
        ],
        tests: [
            { pattern: '!Source/**/dist/**/for_*/*.js', load: false },
            { pattern: 'Source/**/for_*/*.js', load: false }
        ],
        env: {
            kind: 'electron'
        },

        
        compilers: {
            '**/*.js': wallaby.compilers.babel(babelConfig)
        },

        middleware: (app, express) => {
            app.use('/node_modules', express.static(require('path').join(__dirname, 'node_modules')));
        },

        setup: () => {
            //wallaby.delayStart();

            window.expect = chai.expect;
            var should = chai.should();
            
            System.import('./package.json').then(function(packages) {
                console.log(packages);

            });
            
            var promises = [];

            wallaby.tests.forEach(test => {
                promises.push(System.import(`./${test}`));
            });

            Promise.all(promises).then(function () {
                wallaby.start();
            }).catch(function (e) {
                setTimeout(function () {
                    throw e;
                }, 0);
            });
        }
    };
    
    return wallabyConfig;
};