// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import { GreaterThan } from '../index';
import '@dolittle/rules.testing';

describe('when checking value that is greater than', () => {
    const rule = new GreaterThan(42);
    const context = new RuleContext(null);
    const value = 43;

    rule.evaluate(context, value);

    it('should fail', () => context.should.notFail());
});
