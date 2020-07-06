// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import '@dolittle/rules.testing';
import { NotNull } from '../NotNull';
import { Reasons } from '../Reasons';

describe('when checking undefined', () => {
    const rule = new NotNull();
    const context = new RuleContext(null);
    const value: any = undefined;

    rule.evaluate(context, value);

    it('should fail', () => context.should.failWith(rule, value, Reasons.ValueIsNull));
});
