// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, ISubjectProvider, RuleSetEvaluation, RuleWithSubjectProvider, Reason, RuleSet } from '../index';

class Rule implements IRule {
    static reason = Reason.create('b06b2dcc-5c4c-4a62-bd3d-95909b131a46', 'My Reason');
    static ruleContextPassedIn: IRuleContext;
    static subjectPassedIn: any;

    evaluate(context: IRuleContext, subject: any): void {
        Rule.ruleContextPassedIn = context;
        Rule.subjectPassedIn = subject;
    }
}

class SubjectProvider implements ISubjectProvider {
    static subject = 42;

    provide(ruleContext: IRuleContext) {
        return SubjectProvider.subject;
    }
}


describe('when evaluation does not have any broken rules', () => {
    const owner = { something: 42 };
    const ruleSet = new RuleSet(new RuleWithSubjectProvider(new Rule(), new SubjectProvider()));
    const evaluation = new RuleSetEvaluation(ruleSet);
    evaluation.evaluate(owner);

    it('should pass the owner in the rule context to the rule', () => Rule.ruleContextPassedIn.owner.should.equal(owner));
    it('should pass the subject to the rule', () => Rule.subjectPassedIn.should.equal(SubjectProvider.subject));
    it('should be considered successful', () => evaluation.isSuccess.should.be.true);
    it('should have no broken rules', () => evaluation.brokenRules.should.be.empty);
});
