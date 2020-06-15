// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyDescriptor } from '@dolittle/rudiments';
import { IRuleContext, ISubjectProvider } from './index';

/**
 * Represents an implementation of {ISubjectProvider} for providing values from an owning object from the {IRuleContext}.
 */
export class PropertyValueSubjectProvider implements ISubjectProvider {

    /**
     * Creates an instance of object value subject provider.
     * @param {PropertyDescriptor} _propertyDescriptor - The actual property descriptor.
     */
    constructor(private readonly _propertyDescriptor: PropertyDescriptor) {
    }

    /** @inheritdoc */
    provide(ruleContext: IRuleContext) {
        return this._propertyDescriptor.accessor(ruleContext.owner);
    }
}
