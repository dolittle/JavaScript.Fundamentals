// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootBuilder } from '../BootBuilder';
import { Boot } from '../Boot';
import { BootProcedure } from '../BootProcedure';


describe('when building', () => {
    let builder = null;
    let result = null;

    beforeEach(() => {
        builder = new BootBuilder();
        builder.procedures.add(new BootProcedure());
        (becauseOf => {
            result = builder.build();
        })();
    })

    it('should return a boot instance', () => result.should.be.instanceof(Boot));
    it('should pass along the boot procedures', () => result.procedures.should.equal(builder.procedures));
});