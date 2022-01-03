// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule } from './IRule';
import { BrokenRule } from './BrokenRule';
import { Cause } from './Cause';

/**
 * Defines the context in which a rule is evaluated in.
 */
export interface IRuleContext {

    /**
     * Gets the owner for the context.
     * @returns {any}
     */
    readonly owner: any;

    /**
     * Gets any broken rules.
     * @returns {Array<BrokenRule>}
     */
    readonly brokenRules: BrokenRule[];

    /**
     * Fail for a specific rule, subject and a cause of failure.
     * @param {IRule} rule - Rule to fail.
     * @param {any} subject - Subject that failed.
     * @param {Cause} cause - Cause of failure.
     */
    fail(rule: IRule, subject: any, cause: Cause): void;
}
