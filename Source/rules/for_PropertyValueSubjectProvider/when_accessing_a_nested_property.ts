// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyDescriptor, PropertyValueSubjectProvider, RuleContext } from '../index';

class ThirdLevelType {
    get value(): number {
        return 42;
    }
}

class SecondLevelType {
    get thirdLevel()  {
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
    let accessor = (_:TopLevelType) => _.secondLevel.thirdLevel.value;
    let propertyDescriptor = new PropertyDescriptor(accessor,['secondLevel', 'thirdLevel', 'value']);
    let instance = new TopLevelType();

    let provider = new PropertyValueSubjectProvider(propertyDescriptor);

    let ruleContext = new RuleContext(instance);

    let result = provider.provide(ruleContext);

    it('should get the value from the inner property', () => result.should.equal(42));
});