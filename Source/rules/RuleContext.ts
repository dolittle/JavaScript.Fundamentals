// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule, Cause, IRule, IRuleContext } from './index';

/**
 * Represents the implementation of {IRuleContext}
 */
export class RuleContext implements IRuleContext {
    private _brokenRules: Map<IRule, BrokenRule> = new Map<IRule, BrokenRule>();

    /**
     * Initializes a new instance of the {RuleContext} class.
     * @param {*} _owner - The owner of any subjects being evaluated in the context.
     */
    constructor(private readonly _owner: any) {
    }

    /** @inheritdoc */
    get owner(): any {
        return this._owner;
    }

    /** @inheritdoc */
    get brokenRules(): Array<BrokenRule> {
        const array = new Array<BrokenRule>();
        this._brokenRules.forEach(brokenRule => array.push(brokenRule));
        return array;
    }

    /** @inheritdoc */
    fail(rule: IRule, subject: any, cause: Cause): void {
        let brokenRule: BrokenRule;
        brokenRule = this._brokenRules.get(rule) ?? new BrokenRule(rule, subject, this);
        if (!this._brokenRules.has(rule)) this._brokenRules.set(rule, brokenRule);
        brokenRule.addCause(cause);
    }
}
