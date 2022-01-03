// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleWithSubjectProvider } from './RuleWithSubjectProvider';

/**
 * Represents a set of {@link IRule} - rules. This type is immutable.
 */
export class RuleSet {
    private readonly _rules: readonly RuleWithSubjectProvider[];

    /**
     * Initializes a new instance of the {@link RuleSet} class.
     * @param {...RuleWithSubjectProvider[]} rules - Rules for the RuleSet.
     */
    constructor(...rules: RuleWithSubjectProvider[]) {
        this._rules = rules;
    }

    /**
     * Gets the rules in the {@link RuleSet}.
     */
    get rules(): readonly RuleWithSubjectProvider[] {
        return this._rules;
    }
}
