/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Bootloader } from '../Bootloader';

describe('when starting', () => {
    let bootloader = null;
    let boot = null;
    let bootStages = null;

    beforeEach(() => {
        boot = {
            bootStages: {
                perform: sinon.stub()
            }
        };

        bootloader = new Bootloader(boot, bootStages);

        (becauseOf => {
            bootloader.start();
        })();
    })

    it('should perform boot stages passing along the boot setup', () => boot.bootStages.perform.should.have.been.calledWith(boot));
});