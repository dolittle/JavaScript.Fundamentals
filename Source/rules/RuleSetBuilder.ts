// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleBuilder } from './RuleBuilder';
import { RuleSet } from './RuleSet';
import { RuleWithSubjectProvider } from './RuleWithSubjectProvider';

/**
 * Represents a builder of rule sets
 */
export class RuleSetBuilder {
    private readonly _ruleBuilders: RuleBuilder[] = [];

    /**
     * Add a rule to the builder.
     * @param {IRuleBuilder} ruleBuilder - A builder for a rule to include in the rule set.
     */
    addRuleBuilder(ruleBuilder: RuleBuilder): void {
        this._ruleBuilders.push(ruleBuilder);
    }

    /**
     * Build a {RuleSet}.
     * @returns build
     */
    build(): RuleSet {
        const rulesWithSubjectProviders: RuleWithSubjectProvider[] = [];
        this._ruleBuilders.forEach(_ => rulesWithSubjectProviders.push(_.build()));
        return new RuleSet(...rulesWithSubjectProviders);
    }
}
