// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext, RuleSet, RuleSetEvaluation } from './index'

/**
 * Defines the evaluator for evaluating {RuleSet}.
 */
export interface IRuleSetEvaluator {

    /**
     * Evaluate a {RuleSet}.
     * @param {RuleSet} ruleSet - RuleSet to evaluate.
     * @returns {RuleSetEvaluation} 
     */
    evaluate(ruleSet: RuleSet, ruleContext: IRuleContext, instance: any): RuleSetEvaluation;
}