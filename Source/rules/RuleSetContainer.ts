// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSet } from './RuleSet';

/**
 * Represents a container of different {@link RuleSet} - sets of rules.
 */
export class RuleSetContainer {
    private readonly _ruleSets: readonly RuleSet[];

    /**
     * Initializes a new instance of the {@link RuleSetContainer} class.
     * @param {...RuleSet[]} ruleSets - RuleSets for the container.
     */
    constructor(...ruleSets: RuleSet[]) {
        this._ruleSets = ruleSets;
    }

    /**
     * Gets all the rule sets.
     */
    get ruleSets(): readonly RuleSet[] {
        return this._ruleSets;
    }
}
