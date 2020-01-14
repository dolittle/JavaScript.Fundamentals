// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Guid } from '../index';

describe('when creating', () => {
    const guid = Guid.create();

    it('should hold a 16 byte array', () => guid.bytes.should.be.lengthOf(16));
});
