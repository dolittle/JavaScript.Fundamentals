// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { Guid } from '../Guid';

describeThis(__filename, () => {
    const firstGuid = Guid.create();
    const bytes = new Uint8Array(firstGuid.bytes);
    const guid = new Guid(bytes);

    it('should be a guid with the expected bytes', () => guid.bytes.should.contain(firstGuid.bytes));
});
