// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetBuilder, RuleSet, RuleSetContainer } from './index';

/**
 * Represents an builder for building {RuleSetContainer}
 */
export class RuleSetContainerBuilder {
    private readonly _ruleSetBuilders: Array<RuleSetBuilder> = [];

    /**
     * Add a {RuleSet} to the container
     * @param {RuleSetBuilder} ruleSetBuilder - RuleSet to add
     */
    addRuleSetBuilder(ruleSetBuilder: RuleSetBuilder): void {
        this._ruleSetBuilders.push(ruleSetBuilder);
    }

    /**
     * Build the instance
     * @returns {RuleSetContainer}
     */
    build(): RuleSetContainer {
        const ruleSets: Array<RuleSet> = [];
        this._ruleSetBuilders.forEach(_ => {
            const ruleSet = _.build();
            ruleSets.push(ruleSet);
        });
        return new RuleSetContainer(...ruleSets);
    }
}
