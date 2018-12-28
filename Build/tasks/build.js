/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import babel from 'gulp-babel';
import config from '../config';
import clean from './clean';

import sourcemaps from 'gulp-sourcemaps'

import { babelConfig } from '../babelConfig';

let moduleTypes = [
    'commonjs',
    'amd',
    'umd',
    'systemjs'
];

let getBuildTasks = () => {
    let buildTasks = [];

    let sourceForTranspilation = () => {
        let stream = gulp.src([
            `${config.rootFolder}/**/*.js`,
            `!${config.rootFolder}/**/for_*/*.js`,
            `!${config.rootFolder}/dist/**/*.js`,
            `!${config.rootFolder}/**/node_modules/**/*.js`
        ], {
                base: config.rootFolder
            });
        return stream;
    }

    moduleTypes.forEach(module => {
        let destination = `${config.distFolder}/${module}`;
        let task = (icb) => {

            sourceForTranspilation()
                .pipe(sourcemaps.init())
                .pipe(babel(babelConfig.getConfigForModuleFormat(module)))
                .pipe(sourcemaps.mapSources((sourcePath, file) => {
                    return `../esmodules/${sourcePath}`
                }))
                .pipe(sourcemaps.write('.', {
                    includeContent: true,
                    overwrite: true
                }))
                .pipe(gulp.dest(destination, {
                    overwrite: true,
                }));
            icb();
        };

        task.displayName = `build:${module}`;
        buildTasks.push(task);
    });

    let task = (cb) => {
        let destination = `${config.rootFolder}/dist/esmodule`;
        sourceForTranspilation()
            .pipe(gulp.dest(destination), {
                overwrite: true
            });
        cb();
    };
    task.displayName = 'build:esmodules';
    buildTasks.push(task);

    return buildTasks;
}

gulp.task('build', gulp.series(clean,gulp.parallel(getBuildTasks())));