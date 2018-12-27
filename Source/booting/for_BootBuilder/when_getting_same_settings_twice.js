/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootBuilder } from '../BootBuilder';
import { BootStageSettings } from '../BootStageSettings';

class MySettings extends BootStageSettings {}

describe('when getting same settings twice', () => {
    let builder = null;
    let first_settings = null;
    let second_settings = null;

    beforeEach(() => {
        builder = new BootBuilder();

        (becauseOf => {
            first_settings = builder.getBootStageSettings(MySettings);
            second_settings = builder.getBootStageSettings(MySettings);
        })();
    });

    it('should return same instance', () => first_settings.should.equal(second_settings));
});