// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, RuleSet } from './index';

/**
 * Defines a builder of rules of a given type
 * @template T - Type of {IRule} the builder represents
 */
export interface IRuleSetBuilder<T extends IRule> {
    /**
     * Add a rule to the builder
     * @param {T} rule - A rule to add.
     */
    addRule(rule: T): void;

    /**
     * Build a {RuleSet}
     * @returns build 
     */
    build(): RuleSet;
}