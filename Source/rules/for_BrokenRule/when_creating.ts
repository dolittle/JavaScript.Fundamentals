// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule, IRule, IRuleContext, RuleContext } from '../index';

class Rule implements IRule {
    async evaluate(context: IRuleContext, subject: any) {
        const blah = 42;
    }
}

describe('when creating', () => {

    const owner = { something: 42 };
    const subject = owner.something;
    const rule = new Rule();
    const ruleContext = new RuleContext(owner);
    const brokenRule = new BrokenRule(rule, subject, ruleContext);

    it('should hold the rule', () => brokenRule.rule.should.equal(rule));
    it('should hold the subject', () => brokenRule.subject.should.equal(subject));
    it('should hold the rule context', () => brokenRule.context.should.equal(ruleContext));
    it('should have no causes', () => brokenRule.causes.should.be.empty);
});
