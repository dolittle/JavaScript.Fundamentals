// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import '@dolittle/rules.testing';
import { LessThan } from '../LessThan';

describe('when checking value that is less than', () => {
    const rule = new LessThan(42);
    const context = new RuleContext(null);
    const value = 41;

    rule.evaluate(context, value);

    it('should fail', () => context.should.notFail());
});
