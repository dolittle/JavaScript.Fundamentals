/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import rimraf from 'rimraf';
import config from '../config';

const clean = (done) => {
    rimraf(config.distFolder, () => {
        done();
    });
};
clean.displayName = 'clean';

export default clean;