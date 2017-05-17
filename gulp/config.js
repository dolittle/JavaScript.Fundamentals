let rootDir = process.cwd();
let outputDir = `${rootDir}/wwwroot`;
let sourceDir = `${rootDir}`;

const _rootDir = new WeakMap();
const _outputDir = new WeakMap();
const _sourceDir = new WeakMap();
const _dotnetProcessString = new WeakMap();

class config {
    constructor() {
        this.paths = new paths(this);
    }
}

class paths {
    constructor(config) {
        this.config = config;
    }

    get javascript() {
        return [
            `${this.sourceDir}/**/*.js`,
            `!${this.rootDir}/bower_components/**/*`,
            `!${this.rootDir}/bin/**/*`,
            `!${this.rootDir}/jspm_packages/**/*`,
            `!${this.rootDir}/node_modules/**/*`,
            `!${this.outputDir}/**/*`,
            `!${this.rootDir}/jspm.config.js`,
            `!${this.rootDir}/wallaby.js`,
            `!${this.rootDir}/config.js`,
            `!${this.rootDir}/gulpfile.js`,
            `!${this.rootDir}/gulp/**/*`
        ]
    }

    get rootDir() {
        if (_rootDir.has(this)) {
            return _rootDir.get(this);
        }
        return _rootDir;
    }

    set rootDir(value) { _rootDir.set(this, value); }

    get outputDir() {
        if (_outputDir.has(this)) {
            return _outputDir.get(this);
        }
        return outputDir;
    }

    set outputDir(value) { _outputDir.set(this, value); }

    get sourceDir() {
        if (_sourceDir.has(this)) {
            return _sourceDir.get(this);
        }
        return sourceDir;
    }

    set sourceDir(value) { _sourceDir.set(this, value); }
}

export default new config();