/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import gulp from 'gulp';
import fs from 'fs';
import path from 'path';
import { getCleanTask } from './clean';
import { transpile } from './transpile';
import { getEsmodulesTask } from './esmodules';

let moduleTypes = [
    'commonjs',
    'amd',
    'umd',
    'systemjs'
];

function getBuildTasks(root) {
    let tasks = moduleTypes.map(module => transpile.createTask(module, root));
    return tasks
}

function getAllBuildTasksFor(root) {
    return gulp.series(
        getCleanTask(root),
        gulp.parallel(
            getBuildTasks(root),
            getEsmodulesTask(root)
        )   
    );    
}

function getBuildTasksForAllWorkspaces() {
    let workspaces = [];
    let workspacePackage = `${process.cwd()}/package.json`;
    
    if( fs.existsSync(workspacePackage) ) {
        
        let json = fs.readFileSync(workspacePackage);
        let pkg = JSON.parse(json);
        
        if( pkg.workspaces ) {
            
            pkg.workspaces.forEach(workspace => {
                
                let workspaceRoot = path.join(process.cwd(),workspace);
                let tasks = getAllBuildTasksFor(workspaceRoot);
                tasks.displayName = `build:${workspace}`;
                workspaces.push(tasks);
            })
        }
    }
    return gulp.parallel(workspaces);
}

export const build = getAllBuildTasksFor(null);
export const build_all = getBuildTasksForAllWorkspaces();
build_all.displayName = "build:all";
