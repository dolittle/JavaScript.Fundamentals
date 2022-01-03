// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyAccessorDescriptor } from '@dolittle/types';
import { IRule } from './IRule';
import { PropertyValueSubjectProvider } from './PropertyValueSubjectProvider';
import { RuleBuilder } from './RuleBuilder';
import { RuleWithSubjectProvider } from './RuleWithSubjectProvider';

type RuleCreator<TRule extends IRule> = () => IRule;

export class PropertyValueRuleBuilder<TRule extends IRule = any> extends RuleBuilder<TRule> {

    constructor(private readonly _propertyDescriptor: PropertyAccessorDescriptor, private _createRuleInstance: RuleCreator<TRule>) {
        super();
    }


    build(): RuleWithSubjectProvider {
        const rule = this._createRuleInstance();
        return new RuleWithSubjectProvider(rule, new PropertyValueSubjectProvider(this._propertyDescriptor));
    }
}
