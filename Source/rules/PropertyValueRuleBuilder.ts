// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyAccessorDescriptor } from '@dolittle/types';

import { IRule } from './IRule';
import { PropertyValueSubjectProvider } from './PropertyValueSubjectProvider';
import { RuleBuilder } from './RuleBuilder';
import { RuleWithSubjectProvider } from './RuleWithSubjectProvider';

type RuleCreator<TRule extends IRule> = () => IRule;

/**
 * Represents an implementation {@link RuleBuilder} for building rules for properties.
 * @template TRule The type of the rule.
 */
export class PropertyValueRuleBuilder<TRule extends IRule = any> extends RuleBuilder<TRule> {

    /**
     * Initializes a new instasnce of the {@link PropertyValueRuleBuilder} class.
     * @param {PropertyAccessorDescriptor} _propertyDescriptor - The property descriptor.
     * @param {RuleCreator<TRule>} _createRuleInstance - The rule creator.
     */
    constructor(private readonly _propertyDescriptor: PropertyAccessorDescriptor, private _createRuleInstance: RuleCreator<TRule>) {
        super();
    }

    /**
     * Builds the rule.
     * @returns {RuleWithSubjectProvider} The built rule provider.
     */
    build(): RuleWithSubjectProvider {
        const rule = this._createRuleInstance();
        return new RuleWithSubjectProvider(rule, new PropertyValueSubjectProvider(this._propertyDescriptor));
    }
}
