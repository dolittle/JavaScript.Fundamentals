// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule, IRule, IRuleContext, RuleContext } from '../index';

class Rule implements IRule {
    evaluate(context: IRuleContext, instance: any): void {
    }
}

describe('when creating', () => {

    let instance = { something: 42 };
    let rule = new Rule();
    let ruleContext = new RuleContext({});
    let brokenRule = new BrokenRule(rule, instance, ruleContext);

    it('should hold the rule', () => brokenRule.rule.should.equal(rule));
    it('should hold the instance', () => brokenRule.instance.should.equal(instance));
    it('should hold the rule context', () => brokenRule.context.should.equal(ruleContext));
    it('should have no causes', () => brokenRule.causes.should.be.empty);
});