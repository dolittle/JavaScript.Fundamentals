// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, RuleSetEvaluation, Reason, RuleSet } from '../index';

class Rule implements IRule {
    static reason = Reason.create('b06b2dcc-5c4c-4a62-bd3d-95909b131a46', 'My Reason');

    evaluate(context: IRuleContext, instance: any): void {
        context.fail(this, instance, Rule.reason.noArguments())
    }
}

describe('when evaluation with broken rules', () => {
    let ruleSet = new RuleSet(new Rule());
    let evaluation = new RuleSetEvaluation(ruleSet);
    evaluation.evaluate({});

    it('should be considered failed', () => evaluation.isSuccess.should.be.false);
});