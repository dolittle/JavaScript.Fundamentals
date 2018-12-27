/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStageBuilder } from '../BootStageBuilder';
import { MissingAssociation } from '../MissingAssociation';

describe('when getting missing association', () => {
    let builder = null;
    const key = 'some key';
    const value = 'some value';
    const missing_key = 'some missing key'
    let result = null;

    beforeEach(() => {
        builder = new BootStageBuilder();
        builder.associate(key, value);
        (becauseOf => {
            try {
                builder.getAssociation(missing_key);
            } catch(e) {
                result = e;
            }
        })();
    });

    it('should throw missing association', () => result.should.be.instanceof(MissingAssociation));
});