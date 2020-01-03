// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '../index';
import { Regex } from '../index';

describe('when building regex', () => {
    const expectedValue: string = "42";
    class MyObject {
        get stuff(): string {
            return expectedValue;
        }
    }
    
    let ruleWithSourceProvider = new ObjectRuleSetContainerBuilder<MyObject>().rulesFor(_ => _.stuff).regex(expectedValue).build();   
    
    it('should be a regex rule instance', () => ruleWithSourceProvider.rule.should.be.instanceof(Regex));
    it('should pass the value', () => (<Regex>ruleWithSourceProvider.rule).expression.should.equal(expectedValue));
 });