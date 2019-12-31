// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSet, BrokenRule, RuleContext } from './index';

/**
 * Represents the result of an evaluation of {RuleSet}
 */
export class RuleSetEvaluation {
    private _ruleSet: RuleSet;
    private _brokenRules: Array<BrokenRule> = new Array<BrokenRule>();

    /**
     * Initializes a new instance of the {RuleSet} class.
     * @param {RuleSet} ruleSet - RuleSet the evaluation is for.
     */
    constructor(ruleSet: RuleSet) {
        this._ruleSet = ruleSet;
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

    /**
     * Evaluates all rules in the rule set
     * @param {*} instance 
     */
    evaluate(instance: any) {
        let context = new RuleContext(instance);
        this._ruleSet.rules.forEach(_ => _.evaluate(context, instance));
        this._brokenRules = context.brokenRules;
    }
}