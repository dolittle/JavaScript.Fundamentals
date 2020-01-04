// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '../index';
import { GreaterThan } from '../index';

describe('when building greater than', () => {
    const expectedValue: number = 42;
    class MyObject {
        get stuff(): number {
            return expectedValue;
        }
    }

    const ruleWithSourceProvider = new ObjectRuleSetContainerBuilder<MyObject>().rulesFor(_ => _.stuff).greaterThan(expectedValue).build();

    it('should be a greater than rule instance', () => ruleWithSourceProvider.rule.should.be.instanceof(GreaterThan));
    it('should pass the value', () => (ruleWithSourceProvider.rule as GreaterThan).value.should.equal(expectedValue));
 });
