// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { an_object_with_nested_properties } from './given/an_object_with_nested_properties';
import { PropertyRuleSetBuilder } from '../index';

describe('when building with one property added', () => {
    const given: an_object_with_nested_properties = new an_object_with_nested_properties();

    given.builder.rulesFor(_ => _.secondLevel);
    const ruleSetContainer = given.builder.build();

    it('should have a single rule set', () => ruleSetContainer.ruleSets.should.be.lengthOf(1));
});
