// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule } from './IRule';
import { IRuleContext } from './IRuleContext';
import { Cause } from './Cause';

/**
 * Represents a broken rule.
 */
export class BrokenRule {
    private _causes: Cause[] = [];

    /**
     * Initializes a new instance of the {@link BrokenRule} class.
     * @param {IRule} _rule - The rule that is broken.
     * @param {any} _subject - Subject that was evaluated.
     * @param {IRuleContext} _context - Context evaluated in.
     */
    constructor(private readonly _rule: IRule, private readonly _subject: any, private readonly _context: IRuleContext) {
    }

    /**
     * Gets the rule associated with the broken rule.
     */
    get rule(): IRule {
        return this._rule;
    }

    /**
     * Gets the subject that was part of the evaluation.
     */
    get subject(): any {
        return this._subject;
    }

    /**
     * Gets the {IRuleContext} for the evaluation.
     */
    get context(): IRuleContext {
        return this._context;
    }

    /**
     * Gets the causes that caused the broken rule.
     */
    get causes(): readonly Cause[] {
        return this._causes;
    }

    /**
     * Adds a cause of the broken rule.
     * @param {Cause} cause - Cause to add.
     */
    addCause(cause: Cause) {
        this._causes.push(cause);
    }
}
