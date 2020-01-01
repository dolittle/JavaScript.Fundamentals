// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import { Email } from '../index';
import '@dolittle/rules.testing';

describe('when checking value that is missing at sign', () => {
    let rule = new Email();
    let context = new RuleContext(null);
    let value = 'somethingsomeplace.com';

    rule.evaluate(context, value);

    it('should fail', () => context.should.failWith(rule, value, Email.InvalidEmail));
});