// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetContainer, RuleSetContainerEvaluation, RuleSet } from '../index';

describe('when evaluation does not have any rules', () => {
    const owner = { something: 42 };
    const ruleSet = new RuleSet();
    const ruleSetContainer = new RuleSetContainer(ruleSet);
    const evaluation = new RuleSetContainerEvaluation(ruleSetContainer);
    evaluation.evaluate(owner);

    it('should be considered successful', () => evaluation.isSuccess.should.be.true);
    it('should have no broken rules', () => evaluation.brokenRules.should.be.empty);
});
