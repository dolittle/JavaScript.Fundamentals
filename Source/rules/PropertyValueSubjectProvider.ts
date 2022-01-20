// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyAccessorDescriptor } from '@dolittle/types';
import { IRuleContext } from './IRuleContext';
import { ISubjectProvider } from './ISubjectProvider';

/**
 * Represents an implementation of {ISubjectProvider} for providing values from an owning object from the {IRuleContext}.
 */
export class PropertyValueSubjectProvider implements ISubjectProvider {

    /**
     * Creates an instance of object value subject provider.
     * @param {PropertyAccessorDescriptor} _propertyDescriptor - The actual property descriptor.
     */
    constructor(private readonly _propertyDescriptor: PropertyAccessorDescriptor) {
    }

    /** @inheritdoc */
    provide(ruleContext: IRuleContext) {
        return this._propertyDescriptor.accessor(ruleContext.owner);
    }
}
