// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { Guid, isGuid } from '../../Guid';

describeThis(__filename, () => {
    const guid = Guid.parse('a910de39-2c67-4976-8b91-32e71674c731');

    it('should be a guid', () => isGuid(guid).should.be.true);
});
