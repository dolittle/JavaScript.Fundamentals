// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import { MaxLength, Reasons } from '../index';
import '@dolittle/rules.testing';

describe('when checking value that is same length', () => {
    let rule = new MaxLength(4);
    let context = new RuleContext(null);
    let value = '1234';

    rule.evaluate(context, value);

    it('should not fail', () => context.should.notFail());
});