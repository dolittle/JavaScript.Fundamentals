// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import { Regex } from '../index';
import '@dolittle/rules.testing';

describe('when checking value that is missing at sign', () => {
    let rule = new Regex('\\w');
    let context = new RuleContext(null);
    let value = '';

    rule.evaluate(context, value);

    it('should not fail', () => context.should.failWith(rule, value, Regex.NotConformingToExpression));
});