// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { GreaterThan } from './index';
import { RuleBuilder, PropertyValueRuleBuilder, RuleSetBuilder, ObjectRuleSetContainerBuilder, PropertyRuleSetBuilder, PropertyDescriptor } from '@dolittle/rules';


declare module '@dolittle/rules'
{
    class RuleSetBuilder {
        greaterThan(value: any): RuleBuilder<GreaterThan>;
    }
}

RuleSetBuilder.prototype.greaterThan = function(value: any) {
    let p = new PropertyDescriptor((_: MyObject) => _.stuff, ['']);
    return new PropertyValueRuleBuilder(p, () => new GreaterThan(value));
}

class MyObject {
    get stuff(): number {
        return 42;
    }
}
