// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, Cause } from './index';

/**
 * Defines the context in which a rule is evaluated in.
 */
export interface IRuleContext {

    /**
     * Gets the target for the context
     * @returns {*}
     */
    readonly target: any;

    /**
     * 
     * @param {IRule} rule - Rule to fail
     * @param {*} instance - Instance that failed
     * @param {Cause} cause - Cause of failure
     */
    fail(rule: IRule, instance: any, cause: Cause): void;
}
