// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSet } from './RuleSet';
import { BrokenRule } from './BrokenRule';
import { RuleContext } from './RuleContext';

/**
 * Represents evaluation of a {RuleSet}.
 */
export class RuleSetEvaluation {
    private _brokenRules: BrokenRule[] = new Array<BrokenRule>();

    /**
     * Initializes a new instance of the {RuleSet} class.
     * @param {RuleSet} _ruleSet - RuleSet the evaluation is for.
     */
    constructor(private readonly _ruleSet: RuleSet) {
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
     * Evaluates all rules in the rule set.
     * @param {*} owner - Owning container.
     * @returns {Promise<void>}
     */
    async evaluate(owner: any): Promise<any> {
        const context = new RuleContext(owner);
        for (const ruleWithSubjectProvider of this._ruleSet.rules) {
            const subject = ruleWithSubjectProvider.subjectProvider.provide(context);
            await ruleWithSubjectProvider.rule.evaluate(context, subject);
        }
        this._brokenRules = context.brokenRules;
    }
}
