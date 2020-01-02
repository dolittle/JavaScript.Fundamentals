// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, RuleSetEvaluation, Reason, RuleSet } from '../index';

class Rule implements IRule {
    static reason = Reason.create('b06b2dcc-5c4c-4a62-bd3d-95909b131a46', 'My Reason');
    static ruleContextPassedIn: IRuleContext;
    static sourcePassedIn: any;

    evaluate(context: IRuleContext, source: any): void {
        Rule.ruleContextPassedIn = context;
        Rule.sourcePassedIn = source;
    }
}

describe('when evaluation does not have any broken rules', () => {
    let owner = { something: 42 };
    let ruleSet = new RuleSet(new Rule());
    let evaluation = new RuleSetEvaluation(owner, ruleSet);
    let source = 42;
    evaluation.evaluate(source);

    it('should pass the owner in the rule context to the rule', () => Rule.ruleContextPassedIn.owner.should.equal(owner));
    it('should pass the source to the rule', () => Rule.sourcePassedIn.should.equal(source));
    it('should be considered successful', () => evaluation.isSuccess.should.be.true);
    it('should have no broken rules', () => evaluation.brokenRules.should.be.empty);
});