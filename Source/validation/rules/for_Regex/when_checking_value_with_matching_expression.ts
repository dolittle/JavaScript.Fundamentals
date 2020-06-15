// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import '@dolittle/rules.testing';
import { Regex } from '../Regex';

describe('when checking value that is missing at sign', () => {
    const rule = new Regex('[a-z]*');
    const context = new RuleContext(null);
    const value = 'something';

    rule.evaluate(context, value);

    it('should not fail', () => context.should.notFail());
});
