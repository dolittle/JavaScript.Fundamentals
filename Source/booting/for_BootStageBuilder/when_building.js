/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStageBuilder } from '../BootStageBuilder';
import { BootStageResult } from '../BootStageResult';

describe('when building', () => {
    const key = 'some key';
    const value = 'some value';
    let result = null;

    beforeEach(() => {
        let builder = new BootStageBuilder();
        builder.associate(key, value);
        (becauseOf => {
            result = builder.build();
        })();
    });

    it('should return a boot stage result', () => result.should.be.instanceof(BootStageResult));
    it('should pass along assoications', () => result.associations[key].should.equal(value));
});