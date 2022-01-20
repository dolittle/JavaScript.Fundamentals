// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { isGuid } from '../../Guid';

describeThis(__filename, () => {
    const guid = '69982a65-d1e1-49c3-89d2-408b042488ff';

    it('should not be a guid', () => isGuid(guid).should.be.false);
});
