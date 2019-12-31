// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSet, BrokenRule } from './index';

/**
 * Represents the result of an evaluation of {RuleSet}
 */
export class RuleSetEvaluation {
    private _ruleSet: RuleSet;
    private _brokenRules: ReadonlyArray<BrokenRule>;

    /**
     * Initializes a new instance of the {RuleSet} class.
     * @param {RuleSet} ruleSet - RuleSet the evaluation is for.
     * @param {Array<BrokenRule> brokenRules - Any broken rules.
     */
    constructor(ruleSet: RuleSet, brokenRules: Array<BrokenRule>) {
        this._ruleSet = ruleSet;
        this._brokenRules = brokenRules;
    }

    /**
     * Gets a value indicating whether or not the evaluation is successful.
     * @returns {boolean}
     */
    get isSuccess(): boolean {
        return this._brokenRules.length == 0;
    }

    /**
     * Gets any broken rules
     * @returns {ReadonlyArray<BrokenRule>}
     */
    get brokenRules(): ReadonlyArray<BrokenRule> {
        return this._brokenRules;
    }
}