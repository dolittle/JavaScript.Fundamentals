// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleBuilder, RuleSet } from './index';

/**
 * Defines a builder of rules of a given type.
 * @template T - Type of {IRule} the builder represents.
 */
export interface IRuleSetBuilder {
    /**
     * Add a rule to the builder.
     * @param {IRuleBuilder} ruleBuilder - A builder for a rule to include in the rule set.
     */
    addRuleBuilder(ruleBuilder: IRuleBuilder): void;

    /**
     * Build a {RuleSet}.
     * @returns build 
     */
    build(): RuleSet;
}