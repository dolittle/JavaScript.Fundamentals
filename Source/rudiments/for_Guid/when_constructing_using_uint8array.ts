// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Guid } from '../index';

describe('when constructing using uint8array', () => {
    const firstGuid = Guid.create();
    const bytes = new Uint8Array(firstGuid.bytes);
    const guid = new Guid(bytes);

    it('should be a guid with the expected bytes', () => guid.bytes.should.contain(firstGuid.bytes));
});
