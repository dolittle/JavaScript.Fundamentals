import gulp from "gulp";
import config from "../config";
import runSequence from "run-sequence";
import "./javascript";
import "./watch";

gulp.task("initialize", ["javascript"]);

gulp.task("printConfig", () => {
    console.log("**** Configuration ****")
    console.log(`Root folder : ${config.paths.rootDir}`)
    console.log(`Source folder : ${config.paths.sourceDir}`)
    console.log(`Outputting all files to : ${config.paths.outputDir}`)
    console.log("**** Configuration ****\n")
});

gulp.task("default", () => {
    runSequence("printConfig", "initialize", ["watch"]);
});

export default {
    get config() {
        return config;
    }
}
