// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, PropertyValueSubjectProvider, RuleBuilder, RuleWithSubjectProvider } from './index';
import { PropertyDescriptor } from '@dolittle/rudiments';

type RuleCreator<TRule extends IRule> = () => IRule;

export class PropertyValueRuleBuilder<TRule extends IRule = any> extends RuleBuilder<TRule> {

    constructor(private _propertyDescriptor: PropertyDescriptor, private _createRuleInstance: RuleCreator<TRule>) {
        super();
    }


    build(): RuleWithSubjectProvider {
        const rule = this._createRuleInstance();
        return new RuleWithSubjectProvider(rule, new PropertyValueSubjectProvider(this._propertyDescriptor));
    }
}
