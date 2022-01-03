// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { Guid } from '../../Guid';

describeThis(__filename, () => {
    const guid1 = Guid.parse('1a0a061b-3533-4d91-990a-524b7e6ae6a9');
    const guid2 = Guid.parse('1a0a061b-3533-4d91-990a-524b7e6ae6a9');

    it('should be the same', () => guid1.equals(guid2).should.be.true);
});
