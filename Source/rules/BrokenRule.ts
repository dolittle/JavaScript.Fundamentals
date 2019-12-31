// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, Cause } from './index';

/**
 * Represents a broken rule.
 */
export class BrokenRule {
    private _rule:IRule;
    private _instance:any;
    private _context:IRuleContext;
    private _causes:Array<Cause> = [];

    /**
     * Initializes a new instance of the {BrokenRule} class.
     * @param {IRule} rule - The rule that is broken.
     * @param {*} instance - Instance as part of the evaluation.
     * @param {IRuleContext} context - Context evaluated in.
     */
    constructor(rule: IRule, instance: any, context: IRuleContext) {
        this._rule = rule;
        this._instance = instance;
        this._context = context;
    }

    /**
     * Gets the rule associated with the broken rule.
     * @returns {IRule}
     */
    get rule(): IRule {
        return this._rule;
    }

    /**
     * Gets the instance that was part of the evaluation.
     * @returns {*}
     */
    get instance(): any {
        return this._instance;
    }

    /**
     * Gets the {IRuleContext} for the evaluation.
     * @returns {IRuleContext}
     */
    get context(): IRuleContext {
        return this._context;
    }

    /**
     * Gets the causes that caused the broken rule.
     * @returns {ReadonlyArray<Cause>}
     */
    get causes(): ReadonlyArray<Cause> {
        return this._causes;
    }

    /**
     * Adds a cause of the broken rule
     * @param {Cause} cause - Cause to add
     */
    addCause(cause: Cause) {
        this._causes.push(cause);
    }
}