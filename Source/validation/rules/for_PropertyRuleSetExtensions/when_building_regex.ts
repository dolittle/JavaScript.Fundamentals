// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder, ValueRule } from '@dolittle/rules';
import '../index';
import { Regex } from '../index';

describe('when building regex', () => {
    const expectedValue: string = '42';
    class MyObject {
        get stuff(): string {
            return expectedValue;
        }
    }

    const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<MyObject>();
    const ruleSetBuilder = ruleSetContainerBuilder.rulesFor(_ => _.stuff);
    const ruleWithSourceProvider = ruleSetBuilder.regex(expectedValue).build();
    const ruleSetContainer = ruleSetContainerBuilder.build();

    it('should have a property value rule in the rule set', () => ruleSetContainer.ruleSets[0].rules[0].rule.should.be.instanceof(ValueRule));
    it('should be a regex rule instance', () => ruleWithSourceProvider.rule.should.be.instanceof(Regex));
    it('should pass the value', () => (ruleWithSourceProvider.rule as Regex).expression.should.equal(expectedValue));
 });
