// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import '@dolittle/rules.testing';
import { Email } from '../Email';

describe('when checking value that is missing domain suffix', () => {
    const rule = new Email();
    const context = new RuleContext(null);
    const value = 'something@someplace';

    rule.evaluate(context, value);

    it('should fail', () => context.should.failWith(rule, value, Email.InvalidEmail));
});
