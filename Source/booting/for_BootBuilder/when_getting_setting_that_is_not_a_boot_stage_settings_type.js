/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootBuilder } from '../BootBuilder';
import { IncorrectBootStageSettingsType } from '../IncorrectBootStageSettingsType';

class MySettings {}

describe('when getting settings that is not a boot stage settings type', () => {
    let builder = null;
    let result = null;

    beforeEach(() => {
        builder = new BootBuilder();

        (becauseOf => {
            try {
                builder.getBootStageSettings(MySettings);
            } catch(e) {
                result = e;
            }
        })();
    });

    it('should throw incorrect boot stage settings type', () => result.should.be.instanceof(IncorrectBootStageSettingsType));
});