// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ValueRule } from '../index';
import { IRule, IRuleContext, Cause } from '@dolittle/rules'

class MyRule extends ValueRule {
    evaluate(context: IRuleContext, source: any): void {
        this.failIfValueTypeMismatch(context, source, String);
    }
}

describe('when asking to fail if value type mismatch and it mismatches', () => {
    let source = 42;
    let causePassed: Cause;
    let rulePassed: IRule;
    let sourcePassed: any;
    let rule: IRule;

    beforeEach(() => {
        let context = <IRuleContext>{};
        context.fail = (rule: IRule, source: any, cause: Cause) => {
            rulePassed = rule;
            sourcePassed = source;
            causePassed = cause;
        };
        rule = new MyRule();
        rule.evaluate(context, source);
    });

    it('should fail with rule passed', () => rulePassed.should.equal(rule));
    it('should fail with source passed', () => sourcePassed.should.equal(source));
    it('should fail with value type mismatch as reason', () => causePassed.reason.should.equal(ValueRule.ValueTypeMismatch));
});