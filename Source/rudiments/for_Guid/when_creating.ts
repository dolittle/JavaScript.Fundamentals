// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { Guid } from '../Guid';

describeThis(__filename, () => {
    const guid = Guid.create();

    it('should hold a 16 byte array', () => guid.bytes.should.be.lengthOf(16));
});
