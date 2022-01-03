// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyAccessorDescriptor } from '@dolittle/types';
import { RuleSetBuilder } from './RuleSetBuilder';

/**
 * Represents a specific {@link RuleSetBuilder} for building rules for properties.
 */
export class PropertyRuleSetBuilder extends RuleSetBuilder {

    /**
     * Initializes a new instance of the {@link PropertyRuleSetBuilder} class.
     * @param {PropertyAccessorDescriptor} _propertyDescriptor - The descriptor for the property.
     */
    constructor(private readonly _propertyDescriptor: PropertyAccessorDescriptor) {
        super();
    }

    /**
     * Gets the property descriptor.
     */
    get propertyDescriptor(): PropertyAccessorDescriptor {
        return this._propertyDescriptor;
    }
}
