// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule, IRuleContext, IRuleSetEvaluator, RuleSet, RuleSetEvaluation } from './index';

/**
 * Represents an implementation of {IRuleSetEvaluator}
 */
export class RuleSetEvaluator implements IRuleSetEvaluator {

    /** @inheritdoc */
    evaluate(ruleSet: RuleSet, ruleContext: IRuleContext, instance: any): RuleSetEvaluation {
        ruleSet.rules.forEach(_ => _.evaluate(ruleContext, instance));
        return new RuleSetEvaluation(ruleSet, ruleContext.brokenRules);
    }
}