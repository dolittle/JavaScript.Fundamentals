// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetBuilder } from './RuleSetBuilder';
import { RuleSet } from './RuleSet';
import { RuleSetContainer } from './RuleSetContainer';

/**
 * Represents an builder for building {RuleSetContainer}
 */
export class RuleSetContainerBuilder {
    private readonly _ruleSetBuilders: RuleSetBuilder[] = [];

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
        const ruleSets: RuleSet[] = [];
        this._ruleSetBuilders.forEach(_ => {
            const ruleSet = _.build();
            ruleSets.push(ruleSet);
        });
        return new RuleSetContainer(...ruleSets);
    }
}
