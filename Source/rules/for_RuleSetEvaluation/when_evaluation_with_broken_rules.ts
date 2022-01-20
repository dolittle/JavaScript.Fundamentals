// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule } from '../IRule';
import { Reason } from '../Reason';
import { IRuleContext } from '../IRuleContext';
import { ISubjectProvider } from '../ISubjectProvider';
import { RuleWithSubjectProvider } from '../RuleWithSubjectProvider';
import { RuleSet } from '../RuleSet';
import { RuleSetEvaluation } from '../RuleSetEvaluation';
import { Guid } from '@dolittle/rudiments';

class Rule implements IRule {
    static reason = Reason.create(Guid.parse('b06b2dcc-5c4c-4a62-bd3d-95909b131a46'), 'My Reason');
    static ruleContextPassedIn: IRuleContext;
    static subjectPassedIn: any;

    async evaluate(context: IRuleContext, subject: any) {
        Rule.ruleContextPassedIn = context;
        Rule.subjectPassedIn = subject;
        context.fail(this, subject, Rule.reason.justBecause());
    }
}

class SubjectProvider implements ISubjectProvider {
    static subject = 42;

    provide(ruleContext: IRuleContext) {
        return SubjectProvider.subject;
    }
}

describe('when evaluation with broken rules', async () => {
    const owner = { something: 42 };
    const ruleSet = new RuleSet(new RuleWithSubjectProvider(new Rule(), new SubjectProvider()));
    const evaluation = new RuleSetEvaluation(ruleSet);

    before(async () => {
        await evaluation.evaluate(owner);
    });

    it('should pass the owner in the rule context to the rule', () => Rule.ruleContextPassedIn.owner.should.equal(owner));
    it('should pass the subject to the rule', () => Rule.subjectPassedIn.should.equal(SubjectProvider.subject));
    it('should be considered failed', () => evaluation.isSuccess.should.be.false);
});
