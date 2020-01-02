// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext, Reason, IRule } from '@dolittle/rules';
import { Assertion } from 'chai';

Assertion.addMethod('failWith', function (rule: IRule, source: any, reason: Reason) {
    new Assertion(this._obj).to.be.instanceOf(RuleContext);
    let ruleContext = <RuleContext>this._obj;

    let brokenRule = ruleContext.brokenRules.filter(_ =>
        _.rule == rule &&
        _.source == source &&
        _.causes.some(c => c.reason == reason));

    this.assert(
        brokenRule.length == 1,
        `Expected to fail with reason '${reason.id}'`,
        '',
        rule);
});

Assertion.addMethod('notFail', function () {
    new Assertion(this._obj).to.be.instanceOf(RuleContext);
    let ruleContext = <RuleContext>this._obj;

    this.assert(
        ruleContext.brokenRules.length == 0,
        ``,
        '',
        ruleContext);
});