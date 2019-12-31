// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext } from './index';

/**
 * Defines the basis of a rule
 */
export interface IRule {

    /**
     * Evaluate the rule in a given context and with a given instance
     * @param {IRuleContext} context - Context the rule will be evaluated in
     * @param {*} instance - The instance to evaluate
     */
    evaluate(context: IRuleContext, instance:any): void;
}