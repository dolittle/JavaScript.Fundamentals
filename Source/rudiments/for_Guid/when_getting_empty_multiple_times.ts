// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { Guid } from '../Guid';

describeThis(__filename, () => {
    const empty1 = Guid.empty;
    const empty2 = Guid.empty;

    it('should not return the same instance', () => empty1.should.not.equal(empty2));
    it('should return the same value', () => empty1.equals(empty2).should.be.true);
});
