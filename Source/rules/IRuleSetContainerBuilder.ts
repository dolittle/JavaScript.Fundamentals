// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleSetBuilder, RuleSetContainer } from './index';

/**
 * Defines a builder of {RuleSetContainer} instances.
 */
export interface IRuleSetContainerBuilder {

    /**
     * Add a {RuleSet} to the container
     * @param {IRuleSetBuilder} ruleSetBuilder - RuleSet to add
     */
    addRuleSetBuilder(ruleSetBuilder: IRuleSetBuilder): void;

    /**
     * Build the instance
     * @returns {RuleSetContainer} 
     */
    build(): RuleSetContainer;
}