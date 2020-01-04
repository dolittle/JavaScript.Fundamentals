// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder } from '../../index';

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

export class an_object_with_nested_properties {
    builder: ObjectRuleSetContainerBuilder<TopLevelType> = new ObjectRuleSetContainerBuilder<TopLevelType>();
}
