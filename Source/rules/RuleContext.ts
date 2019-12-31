// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule, Cause, IRule, IRuleContext } from './index';

/**
 * Represents the implementation of {IRuleContext}
 */
export class RuleContext implements IRuleContext {
    private _target: any;
    private _brokenRules: Map<IRule, BrokenRule> = new Map<IRule, BrokenRule>();

    /**
     * Initializes a new instance of the {RuleContext} class.
     * @param target 
     */
    constructor(target: any) {
        this._target = target;
    }

    /** @inheritdoc */
    get target(): any {
        return this._target;
    }

    /** @inheritdoc */
    get brokenRules(): Array<BrokenRule> {
        let array = new Array<BrokenRule>();
        this._brokenRules.forEach(brokenRule => array.push(brokenRule));
        return array;
    }

    /** @inheritdoc */
    fail(rule: IRule, instance: any, cause: Cause): void {
        let brokenRule: BrokenRule;
        brokenRule = this._brokenRules.get(rule) ?? new BrokenRule(rule, instance, this);
        if( !this._brokenRules.has(rule)) this._brokenRules.set(rule, brokenRule);
        brokenRule.addCause(cause);
    }
}