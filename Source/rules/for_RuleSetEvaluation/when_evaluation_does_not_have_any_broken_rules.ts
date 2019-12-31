// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetEvaluation, BrokenRule, RuleSet } from '../index';

describe('when evaluation does not have any broken rules', () => {
    let ruleSet = new RuleSet();
    let evaluation = new RuleSetEvaluation(ruleSet, []);

    it('should be considered successful', () => evaluation.isSuccess.should.be.true);
    it('should have no broken rules', () => evaluation.brokenRules.should.be.empty);
});