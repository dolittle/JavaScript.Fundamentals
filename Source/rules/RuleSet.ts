// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleWithSubjectProvider } from './index';

/**
 * Represents a set of {IRule} - rules. This type is immutable.
 */
export class RuleSet {
    private readonly _rules: ReadonlyArray<RuleWithSubjectProvider>;

    /**
     * Initializes a new instance of the {RuleSet} class.
     * @param {...RuleWithSubjectProvider[]} rules - Rules for the RuleSet.
     */
    constructor(...rules: RuleWithSubjectProvider[]) {
        this._rules = rules;
    }

    /**
     * Gets the rules in the {RuleSet}.
     * @returns {ReadonlyArray<RuleWithSubjectProvider>}
     */
    get rules(): ReadonlyArray<RuleWithSubjectProvider> {
        return this._rules;
    }
}
