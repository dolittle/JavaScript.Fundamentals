// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { isEquatable } from '../../IEquatable';

describeThis(__filename, () => {
    const equatable = {};

    it('should not be equatable', () => isEquatable(equatable).should.be.false);
});
