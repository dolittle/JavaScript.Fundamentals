// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, RuleContext, RuleSetEvaluation, BrokenRule, RuleSet } from '../index';

class Rule implements IRule {
    evaluate(context: IRuleContext, instance: any): void {
    }
}

describe('when evaluation with broken rules', () => {
    let ruleSet = new RuleSet();
    let brokenRules = [];
    brokenRules.push(new BrokenRule(new Rule(), null, new RuleContext(), []));
    let evaluation = new RuleSetEvaluation(ruleSet, brokenRules);

    it('should be considered failed', () => evaluation.isSuccess.should.be.false);
});