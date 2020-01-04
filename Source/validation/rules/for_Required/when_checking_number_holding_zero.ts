// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import { Required } from '../index';
import '@dolittle/rules.testing';

describe('when checking value holding zero', () => {
    const rule = new Required();
    const context = new RuleContext(null);
    const value = 0;

    rule.evaluate(context, value);

    it('should fail', () => context.should.failWith(rule, value, Required.ValueNotSpecified));
});
