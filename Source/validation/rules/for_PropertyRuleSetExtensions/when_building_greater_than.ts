// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder, ValueRule } from '@dolittle/rules';
import '../index';
import { GreaterThan } from '../index';

describe('when building greater than', () => {
    const expectedValue: number = 42;
    class MyObject {
        get stuff(): number {
            return expectedValue;
        }
    }

    const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<MyObject>();
    const ruleSetBuilder = ruleSetContainerBuilder.rulesFor(_ => _.stuff);
    const ruleWithSourceProvider = ruleSetBuilder.greaterThan(expectedValue).build();
    const ruleSetContainer = ruleSetContainerBuilder.build();

    it('should have a property value rule in the rule set', () => ruleSetContainer.ruleSets[0].rules[0].rule.should.be.instanceof(ValueRule));
    it('should be a greater than rule instance', () => ruleWithSourceProvider.rule.should.be.instanceof(GreaterThan));
    it('should pass the value', () => (ruleWithSourceProvider.rule as GreaterThan).value.should.equal(expectedValue));
 });
