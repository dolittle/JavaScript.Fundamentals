/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Bootloader } from '../Bootloader';
import { BootBuilder } from '../BootBuilder';

describe('when configuring', () => {
    let callback = null;
    let result = null;

    beforeEach(() => {
        (becauseOf => {
            callback = sinon.stub();
           result = Bootloader.configure(callback);
        })();
    });

    it('should call the callback', () => callback.called.should.be.true);
    it('should call the callback with a boot builder', () => callback.lastCall.args[0].should.be.instanceof(BootBuilder));
    it('should return a boot loader', () => result.should.be.instanceof(Bootloader));
});