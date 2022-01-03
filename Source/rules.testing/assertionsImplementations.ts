// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Assertion } from 'chai';

import { RuleContext, Reason, IRule } from '@dolittle/rules';

Assertion.addMethod('failWith', function (rule: IRule, subject: any, reason: Reason) {
    new Assertion(this._obj).to.be.instanceOf(RuleContext);
    const ruleContext = this._obj as RuleContext;

    const brokenRule = ruleContext.brokenRules.filter(_ =>
        _.rule === rule &&
        _.subject === subject &&
        _.causes.some(c => c.reason === reason));

    this.assert(
        brokenRule.length === 1,
        `Expected to fail with reason '${reason.id}'`,
        '',
        rule);
});

Assertion.addMethod('notFail', function () {
    new Assertion(this._obj).to.be.instanceOf(RuleContext);
    const ruleContext = this._obj as RuleContext;

    this.assert(
        ruleContext.brokenRules.length === 0,
        '',
        '',
        ruleContext);
});
