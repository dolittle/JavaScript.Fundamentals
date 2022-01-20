// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { Guid } from '../Guid';

describeThis(__filename, () => {
    const empty = Guid.empty;

    it('should return a guid with 16 bytes', () => empty.bytes.should.be.lengthOf(16));
    it('should return a guid with all zeros', () => empty.bytes.every(_ => _ === 0).should.be.true);
});
