/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import yargs from 'yargs';
import babel from 'gulp-babel';
import debug from 'gulp-debug';
import path from 'path';

const babelConfig = {
    'sourceMap': 'true',
    'plugins': [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        ['@babel/plugin-proposal-decorators', { 'legacy': true }],

        ['@babel/plugin-transform-runtime',
            {
                'corejs': false,
                'helpers': false,
                'regenerator': true,
                'useESModules': false
            }
        ]
    ],
    'presets': ['@babel/preset-env']
};

let moduleTypes = [
    'commonjs',
    'amd',
    'umd',
    'systemjs'
];



let getBuildTasks = () => {
    let buildTasks = [];
    let root = path.resolve(yargs.argv.root);
    console.log('Root : ' + root);


    let getConfigFor = (moduleFormat) => {
        var config = JSON.parse(JSON.stringify(babelConfig));
        config.plugins.push(`@babel/plugin-transform-modules-${moduleFormat}`);
        return config;
    }

    let sourceForTranspilation = () => {
        let stream = gulp.src([
            `${root}/**/*.js`,
            `!${root}/**/for_*/*.js`,
            `!${root}/dist/**/*.js`,
            `!${root}/**/node_modules/**/*.js`
        ], {
                sourcemaps: true
            });
        return stream;
    }

    moduleTypes.forEach(module => {
        let destination = `${root}/dist/${module}`;
        //console.log(`Destination : ${destination}`);
        buildTasks.push((icb) => {

            sourceForTranspilation()
                .pipe(babel(getConfigFor(module)))
                .pipe(gulp.dest(destination, { 
                    overwrite: true,
                    sourcemaps: true 
                }));
            icb();
        });
    });

    return buildTasks;
}


let tasks = [].concat(moduleTypes.map((module) => `build-babel-${module}`));
gulp.task('build', gulp.parallel(getBuildTasks()));
