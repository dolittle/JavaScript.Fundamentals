// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { Guid } from '../Guid';

describeThis(__filename, () => {
    const originalAsString = '02f7990b-0b05-af48-aa1a-df78be031808';
    const parsed = Guid.parse(originalAsString);
    const parsedAsString = parsed.toString();

    it('should be the same', () => parsedAsString.should.equal(originalAsString));
});
