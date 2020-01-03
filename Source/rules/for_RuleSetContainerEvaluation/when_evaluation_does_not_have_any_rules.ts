// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetContainer, RuleSetContainerEvaluation, RuleSet } from '../index';

describe('when evaluation does not have any rules', () => {
    let owner = { something: 42 };
    let ruleSet = new RuleSet();
    let ruleSetContainer = new RuleSetContainer(ruleSet);
    let evaluation = new RuleSetContainerEvaluation(ruleSetContainer);
    evaluation.evaluate(owner);

    it('should be considered successful', () => evaluation.isSuccess.should.be.true);
    it('should have no broken rules', () => evaluation.brokenRules.should.be.empty);
});