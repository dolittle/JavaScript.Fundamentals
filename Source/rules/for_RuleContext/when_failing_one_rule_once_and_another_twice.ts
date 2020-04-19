// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, RuleContext, Reason } from '../index';

class Rule implements IRule {
    async evaluate(context: IRuleContext, subject: any) {
        const i = 42;
    }
}

describe('when failing one rule once and another twice', () => {
    const target = {};
    const first_rule = new Rule();
    const second_rule = new Rule();

    const first_reason = Reason.create('ff8f27cf-5ce5-43bc-881d-964fb0e2dc85', 'First reason');
    const second_reason = Reason.create('46f6323d-a0ad-4083-82d5-da3a3960a662', 'Second reason');

    const context = new RuleContext(target);

    context.fail(first_rule, {}, first_reason.noArguments());
    context.fail(second_rule, {}, first_reason.noArguments());
    context.fail(second_rule, {}, second_reason.noArguments());

    const brokenRules = context.brokenRules;

    it('should have two broken rules', () => brokenRules.length.should.equal(2));
    it('should have first reason on the cause of first broken rule', () => brokenRules[0].causes[0].reason.should.equal(first_reason));
    it('should have first reason as the first cause of second broken rule', () => brokenRules[1].causes[0].reason.should.equal(first_reason));
    it('should have second reason as the second cause of second broken rule', () => brokenRules[1].causes[1].reason.should.equal(second_reason));
});
