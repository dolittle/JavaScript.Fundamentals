// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { isGuid } from '../../Guid';

describeThis(__filename, () => {
    const guid = {
        bytes: [ 1, 2, 3 ],
        _stringVersion: 'ad135fe8-8800-4dad-863c-fcac7db19ace',
        equals: (other: any) => true,
        toString: () => '',
    };

    it('should be a guid', () => isGuid(guid).should.be.true);
});
