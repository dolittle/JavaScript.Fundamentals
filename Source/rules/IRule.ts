// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext } from './IRuleContext';

/**
 * Defines the basis of a rule.
 */
export interface IRule<TSubject = any> {
    /**
     * Evaluate the rule in a given context and with a given instance.
     * @param {IRuleContext} context - Context the rule will be evaluated in.
     * @param {*} subject - The subject to evaluate.
     * @returns {Promise<void>}
     */
    evaluate(context: IRuleContext, subject: TSubject): Promise<void>;
}
