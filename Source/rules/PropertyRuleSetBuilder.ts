// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyDescriptor } from '@dolittle/rudiments';
import { RuleSetBuilder } from './index';


/**
 * Represents a specific {RuleSetBuilder} for building rules for properties.
 */
export class PropertyRuleSetBuilder extends RuleSetBuilder {

    /**
     * Initializes a new instance of the {PropertyRuleSetBuilder} class.
     * @param {PropertyDescriptor} _propertyDescriptor - The descriptor for the property.
     */
    constructor(private readonly _propertyDescriptor: PropertyDescriptor) {
        super();
    }

    /**
     * Gets the property descriptor
     */
    get propertyDescriptor(): PropertyDescriptor {
        return this._propertyDescriptor;
    }
}
