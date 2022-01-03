// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyPathResolverProxyHandler, PropertyAccessor, PropertyAccessorDescriptor } from '@dolittle/types';

import { PropertyRuleSetBuilder } from './PropertyRuleSetBuilder';
import { RuleSetContainerBuilder } from './RuleSetContainerBuilder';

/**
 * Represents a specific {@link RuleSetContainerBuilder} for building rules for objects.
 * @template TObject - Type of object to build for.
 */
export class ObjectRuleSetContainerBuilder<TObject extends object = any> extends RuleSetContainerBuilder {

    /**
     * Rules for a specific property within the object.
     * @param {PropertyAccessor<TObject>} accessor - For describing the property to start building a rule for.
     * @returns {PropertyRuleSetBuilder} The rule set builder.
     */
    rulesFor(accessor: PropertyAccessor<TObject>): PropertyRuleSetBuilder {
        const handler = new PropertyPathResolverProxyHandler();
        const proxy = new Proxy<TObject>({} as TObject, handler);
        accessor(proxy);
        const propertyDescriptor = new PropertyAccessorDescriptor(accessor, handler.segments.filter(_ => true));
        const ruleSetBuilder = new PropertyRuleSetBuilder(propertyDescriptor);
        this.addRuleSetBuilder(ruleSetBuilder);
        return ruleSetBuilder;
    }
}
