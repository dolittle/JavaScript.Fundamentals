// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '../index';
import { GreaterThanOrEqual } from '../index';

describe('when building greater than or equal', () => {
    const expectedValue: number = 42;
    class MyObject {
        get stuff(): number {
            return expectedValue;
        }
    }

    const ruleWithSourceProvider = new ObjectRuleSetContainerBuilder<MyObject>().rulesFor(_ => _.stuff).greaterThanOrEqual(expectedValue).build();

    it('should be a greater than or equal rule instance', () => ruleWithSourceProvider.rule.should.be.instanceof(GreaterThanOrEqual));
    it('should pass the value', () => (ruleWithSourceProvider.rule as GreaterThanOrEqual).value.should.equal(expectedValue));
 });
