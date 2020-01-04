// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule, RuleSetContainer, RuleSetEvaluation } from './index';

/**
 * Represents the evaluation of {RuleSetContainer}
 */
export class RuleSetContainerEvaluation {
    private _brokenRules: Array<BrokenRule> = new Array<BrokenRule>();
    private _ruleSetEvaluations: Array<RuleSetEvaluation> = new Array<RuleSetEvaluation>();

    /**
     * Initializes a new instance of the {RuleSetContainerEvaluation} class.
     * @param _ruleSetContainer
     */
    constructor(private _ruleSetContainer: RuleSetContainer) {
        this._ruleSetEvaluations = _ruleSetContainer.ruleSets.map(_ => new RuleSetEvaluation(_));
    }

    /**
     * Gets a value indicating whether or not the evaluation is successful.
     * @returns {boolean}
     */
    get isSuccess(): boolean {
        return this._brokenRules.length === 0;
    }

    /**
     * Gets any broken rules.
     * @returns {ReadonlyArray<BrokenRule>}
     */
    get brokenRules(): ReadonlyArray<BrokenRule> {
        return this._brokenRules;
    }

    /**
     * Evaluates all rules in all rule sets.
     * @param {*} owner - Owning container.
     */
    evaluate(owner: any) {
        this._brokenRules = new Array<BrokenRule>();

        this._ruleSetEvaluations.forEach(ruleSetEvaluation => {
            ruleSetEvaluation.evaluate(owner);
            ruleSetEvaluation.brokenRules.forEach(_ => this._brokenRules.push(_));
        });
    }
}
