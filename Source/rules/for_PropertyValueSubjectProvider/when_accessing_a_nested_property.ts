// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyAccessorDescriptor } from '@dolittle/types';
import { PropertyValueSubjectProvider } from '../PropertyValueSubjectProvider';
import { RuleContext } from '../RuleContext';


class ThirdLevelType {
    get value(): number {
        return 42;
    }
}

class SecondLevelType {
    get thirdLevel() {
        return new ThirdLevelType();
    }
}

class TopLevelType {
    secondLevel: SecondLevelType;

    constructor() {
        this.secondLevel = new SecondLevelType();
    }
}


describe('when accessing a nested property', () => {
    const accessor = (_: TopLevelType) => _.secondLevel.thirdLevel.value;
    const propertyDescriptor = new PropertyAccessorDescriptor(accessor, ['secondLevel', 'thirdLevel', 'value']);
    const instance = new TopLevelType();

    const provider = new PropertyValueSubjectProvider(propertyDescriptor);

    const ruleContext = new RuleContext(instance);

    const result = provider.provide(ruleContext);

    it('should get the value from the inner property', () => result.should.equal(42));
});
