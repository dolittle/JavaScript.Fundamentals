// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule, IRule, IRuleContext, RuleContext } from '../index';

class Rule implements IRule {
    evaluate(context: IRuleContext, source: any): void {
    }
}

describe('when creating', () => {

    let owner = { something: 42 };
    let source = owner.something;
    let rule = new Rule();
    let ruleContext = new RuleContext(owner);
    let brokenRule = new BrokenRule(rule, source, ruleContext);

    it('should hold the rule', () => brokenRule.rule.should.equal(rule));
    it('should hold the source', () => brokenRule.source.should.equal(source));
    it('should hold the rule context', () => brokenRule.context.should.equal(ruleContext));
    it('should have no causes', () => brokenRule.causes.should.be.empty);
});