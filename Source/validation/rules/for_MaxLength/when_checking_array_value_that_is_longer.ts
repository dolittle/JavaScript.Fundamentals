// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import { MaxLength, Reasons } from '../index';
import '@dolittle/rules.testing';

describe('when checking array value that is longer', () => {
    const rule = new MaxLength(4);
    const context = new RuleContext(null);
    const value = [1,2,3,4,5];

    rule.evaluate(context, value);

    it('should fail', () => context.should.failWith(rule, value, Reasons.LengthIsTooLong));
});
