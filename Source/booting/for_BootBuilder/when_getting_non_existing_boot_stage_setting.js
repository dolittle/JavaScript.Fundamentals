/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootBuilder } from '../BootBuilder';
import { BootStageSettings } from '../BootStageSettings';

class MySettings extends BootStageSettings {}

describe('when getting none existing boot stage setting', () => {
    let builder = null;
    let settings = null;

    beforeEach(() => {
        builder = new BootBuilder();

        (becauseOf => {
            settings = builder.getBootStageSettings(MySettings);
        })();
    });

    it('should return an instance of the settings', () => settings.should.be.instanceof(MySettings));
});