// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, Cause, ValueRule } from '../index';

class MyRule extends ValueRule {
    evaluate(context: IRuleContext, subject: any): void {
        this.failIfValueTypeMismatch(context, subject, String);
    }
}

describe('when asking to fail if value type mismatch and it mismatches', () => {
    let subject = 42;
    let causePassed: Cause;
    let rulePassed: IRule;
    let subjectPassed: any;
    let rule: IRule;

    beforeEach(() => {
        let context = <IRuleContext>{};
        context.fail = (rule: IRule, subject: any, cause: Cause) => {
            rulePassed = rule;
            subjectPassed = subject;
            causePassed = cause;
        };
        rule = new MyRule();
        rule.evaluate(context, subject);
    });

    it('should fail with rule passed', () => rulePassed.should.equal(rule));
    it('should fail with subject passed', () => subjectPassed.should.equal(subject));
    it('should fail with value type mismatch as reason', () => causePassed.reason.should.equal(ValueRule.ValueTypeMismatch));
});