/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Bootloader } from '../Bootloader';

describe('when configuring', () => {
    let callback = sinon.stub();
    let result = null;

    beforeEach(() => {
        (becauseOf => {            
            result = Bootloader.configure(callback);
        })();
    });

    it('should call the callback', () => callback.called.should.be.true);
    it('should return a boot loader', () => result.should.be.instanceof(Bootloader));
});