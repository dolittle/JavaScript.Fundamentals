// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule } from './BrokenRule';
import { RuleSetContainer } from './RuleSetContainer';
import { RuleSetEvaluation } from './RuleSetEvaluation';

/**
 * Represents the evaluation of {RuleSetContainer}
 */
export class RuleSetContainerEvaluation {
    private _brokenRules: BrokenRule[] = new Array<BrokenRule>();
    private readonly _ruleSetEvaluations: RuleSetEvaluation[] = new Array<RuleSetEvaluation>();

    /**
     * Initializes a new instance of the {RuleSetContainerEvaluation} class.
     * @param ruleSetContainer
     */
    constructor(ruleSetContainer: RuleSetContainer) {
        this._ruleSetEvaluations = ruleSetContainer.ruleSets.map(_ => new RuleSetEvaluation(_));
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
    get brokenRules(): readonly BrokenRule[] {
        return this._brokenRules;
    }

    /**
     * Evaluates all rules in all rule sets.
     * @param {*} owner - Owning container.
     * @returns {Promise<void>}
     */
    async evaluate(owner: any): Promise<void> {
        this._brokenRules = new Array<BrokenRule>();

        for (const ruleSetEvaluation of this._ruleSetEvaluations) {
            await ruleSetEvaluation.evaluate(owner);
            ruleSetEvaluation.brokenRules.forEach(_ => this._brokenRules.push(_));
        }
    }
}
