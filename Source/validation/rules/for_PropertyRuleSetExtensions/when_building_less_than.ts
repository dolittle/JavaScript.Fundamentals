// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '../index';
import { LessThan } from '../index';

describe('when building less than', () => {
    const expectedValue: number = 42;
    class MyObject {
        get stuff(): number {
            return expectedValue;
        }
    }
    
    let ruleWithSourceProvider = new ObjectRuleSetContainerBuilder<MyObject>().rulesFor(_ => _.stuff).lessThan(expectedValue).build();   
    
    it('should be a less than rule instance', () => ruleWithSourceProvider.rule.should.be.instanceof(LessThan));
    it('should pass the value', () => (<LessThan>ruleWithSourceProvider.rule).value.should.equal(expectedValue));
 });