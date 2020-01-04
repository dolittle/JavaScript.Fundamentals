// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '../index';
import { MaxLength } from '../index';

describe('when building max length', () => {
    const expectedValue: number = 42;
    class MyObject {
        get stuff(): number {
            return expectedValue;
        }
    }

    const ruleWithSourceProvider = new ObjectRuleSetContainerBuilder<MyObject>().rulesFor(_ => _.stuff).maxLength(expectedValue).build();

    it('should be a max length rule instance', () => ruleWithSourceProvider.rule.should.be.instanceof(MaxLength));
    it('should pass the value', () => (ruleWithSourceProvider.rule as MaxLength).length.should.equal(expectedValue));
 });
