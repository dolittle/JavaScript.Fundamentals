// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Guid } from '../index';

describe('when parsing', () => {
    const original = Guid.create();
    const originalAsString = original.toString();
    const parsed = Guid.parse(originalAsString);
    const parsedAsString = parsed.toString();

    it('should be the same', () => parsedAsString.should.equal(originalAsString));
});