// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleBuilder, IRuleSetBuilder, RuleSet, RuleWithSubjectProvider } from './index';

export class RuleSetBuilder implements IRuleSetBuilder {
    _ruleBuilders:IRuleBuilder[] = [];

    /** @inheritdoc */
    addRuleBuilder(ruleBuilder: IRuleBuilder): void {
        this._ruleBuilders.push(ruleBuilder);
    }
    
    /** @inheritdoc */
    build(): RuleSet {
        let rulesWithSubjectProviders:RuleWithSubjectProvider[] = [];       
        this._ruleBuilders.forEach(_ => rulesWithSubjectProviders.push(_.build()));
        return new RuleSet(...rulesWithSubjectProviders);
    }
}