// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetEvaluation, RuleSet } from '../index';

describe('when evaluation does not have any rules', () => {
    let owner = { something: 42 };
    let ruleSet = new RuleSet();
    let evaluation = new RuleSetEvaluation(owner, ruleSet);

    it('should be considered successful', () => evaluation.isSuccess.should.be.true);
    it('should have no broken rules', () => evaluation.brokenRules.should.be.empty);
});