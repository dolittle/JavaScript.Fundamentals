// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootStageBuilder } from '../BootStageBuilder';

describe('when associating', () => {
    let builder = null;
    const key = 'some key';
    const value = 'some value';

    beforeEach(() => {
        builder = new BootStageBuilder();
        (becauseOf => builder.associate(key, value))();
    });

    it('should return the associated value when getting it back', () => builder.getAssociation(key).should.equal(value));
});