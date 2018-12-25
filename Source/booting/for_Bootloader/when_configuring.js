/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Bootloader } from '../Bootloader';

describe('when configuring', () => {
    let callback = sinon.stub();
    beforeEach(() => {
        (becauseOf => {            
            Bootloader.configure(callback);
        })();
    });

    it("should call the callback", () => callback.called.should.be.true);
});