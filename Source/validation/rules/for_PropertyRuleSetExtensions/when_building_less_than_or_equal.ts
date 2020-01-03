// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '../index';
import { LessThanOrEqual } from '../index';

describe('when building less than or equal', () => {
    const expectedValue: number = 42;
    class MyObject {
        get stuff(): number {
            return expectedValue;
        }
    }
    
    let ruleWithSourceProvider = new ObjectRuleSetContainerBuilder<MyObject>().rulesFor(_ => _.stuff).lessThanOrEqual(expectedValue).build();   
    
    it('should be a less than or equal rule instance', () => ruleWithSourceProvider.rule.should.be.instanceof(LessThanOrEqual));
    it('should pass the value', () => (<LessThanOrEqual>ruleWithSourceProvider.rule).value.should.equal(expectedValue));
 });