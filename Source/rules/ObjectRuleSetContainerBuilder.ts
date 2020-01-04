// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetBuilder, PropertyPathResolverProxyHandler, PropertyAccessor, PropertyDescriptor, PropertyRuleSetBuilder, RuleSetContainerBuilder } from './index';

/**
 * Represents a specific {RuleSetContainerBuilder} for building rules for objects.
 * @template TObject - Type of object to build for.
 */
export class ObjectRuleSetContainerBuilder<TObject extends object> extends RuleSetContainerBuilder {

    /**
     * Rules for a specific property within the object.
     * @param {PropertyAccessor<TObject>} accessor - For describing the property to start building a rule for.
     * @returns {PropertyRuleSetBuilder}
     */
    rulesFor(accessor: PropertyAccessor<TObject>): PropertyRuleSetBuilder {
        const handler = new PropertyPathResolverProxyHandler();
        const proxy = new Proxy<TObject>({} as TObject, handler);
        accessor(proxy);
        const propertyDescriptor = new PropertyDescriptor(accessor, handler.segments.filter(_ => true));
        return new PropertyRuleSetBuilder(propertyDescriptor);
    }
}
