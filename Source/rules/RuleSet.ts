// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule } from './index';

/**
 * Represents a set of {IRule} - rules. This type is immutable.
 */
export class RuleSet {
    private _rules: ReadonlyArray<IRule>

    /**
     * Initializes a new instance of the {RuleSet} class.
     * @param {...Array<IRule>} rules - Rules for the RuleSet.
     */
    constructor(...rules:Array<IRule>) {
        this._rules = rules;
    }

    /**
     * Gets the rules in the {RuleSet}.
     * @returns {ReadonlyArray<IRule>}
     */
    get rules(): ReadonlyArray<IRule> {
        return this._rules;
    }
}