// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSet } from '../RuleSet';
import { RuleSetContainer } from '../RuleSetContainer';
import { RuleSetContainerEvaluation } from '../RuleSetContainerEvaluation';

describe('when evaluation does not have any rules', async () => {
    const owner = { something: 42 };
    const ruleSet = new RuleSet();
    const ruleSetContainer = new RuleSetContainer(ruleSet);
    const evaluation = new RuleSetContainerEvaluation(ruleSetContainer);

    before(async () => {
        await evaluation.evaluate(owner);
    });

    it('should be considered successful', () => evaluation.isSuccess.should.be.true);
    it('should have no broken rules', () => evaluation.brokenRules.should.be.empty);
});
