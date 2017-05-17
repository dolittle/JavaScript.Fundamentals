import gulp from "gulp";
import path from "path";
import util from "gulp-util";
import config from "../config";
import server from "gulp-express";

import {javaScriptPipeline} from "./javascript";

import chokidar from "chokidar";

import multimatch from "multimatch";

function handleFile(file, globs, pipeline, cb) {
    var result = multimatch(file, globs);
    if (result.length == 0) return;

    util.log(
        util.colors.green('File ' + file + ': ') +
        util.colors.magenta(path.basename(file))
    );

    try {
        var stream = gulp.src(file, {base:config.paths.sourceDir});
        pipeline(stream, cb);
    } catch (ex) {
        util.log(ex);
    }
}

let watchTask = (cb) => {
    console.log(`Start Watching folder ´${config.paths.sourceDir}´`);

    let watcher = chokidar.watch(`${config.paths.sourceDir}/.`, {
        persistent: true,
        ignored: `${config.paths.outputDir}/**/*`,
        ignoreInitial: true,
        awaitWriteFinish: {
            stabilityThreshold: 200,
            pollInterval: 100
        }
    });

    let fileHandling = (file) => {
        handleFile(file, config.paths.javascript, javaScriptPipeline, cb);
    };

    watcher
        .on("change", fileHandling)
        .on("add", fileHandling)
        .on("unlink", (file) => {
            // delete
        });
};

gulp.task("watch-noserve", cb => {
    serve = false;
    watchTask(cb);
});

gulp.task("watch", watchTask);