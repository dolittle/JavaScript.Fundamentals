// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { an_object_with_nested_properties } from './given/an_object_with_nested_properties';
import { PropertyRuleSetBuilder } from '../index';

describe('when adding rules for a nested property', () => {
    const given: an_object_with_nested_properties = new an_object_with_nested_properties();

    const builder = given.builder.rulesFor(_ => _.secondLevel.thirdLevel.value);
    const propertyDescriptor = (builder as PropertyRuleSetBuilder).propertyDescriptor;

    it('should return a property descriptor with full path', () => propertyDescriptor.path.should.equal('secondLevel.thirdLevel.value'));
    it('should return a property descriptor with with only 3 segments', () => propertyDescriptor.segments.should.be.lengthOf(3));
    it('should return a property descriptor with that holds the second level segment first', () => propertyDescriptor.segments[0].should.equal('secondLevel'));
    it('should return a property descriptor with that holds the third level segment second', () => propertyDescriptor.segments[1].should.equal('thirdLevel'));
    it('should return a property descriptor with that holds the value segment third', () => propertyDescriptor.segments[2].should.equal('value'));
});
