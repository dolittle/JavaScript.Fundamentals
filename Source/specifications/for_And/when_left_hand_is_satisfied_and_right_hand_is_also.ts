// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { And, Specification } from '../Specification';

describe('when left hand is satisfied and right hand is also', () => {
    const leftHandSideEvaluator = sinon.stub().returns(true);
    const leftHandSide = new Specification(leftHandSideEvaluator);

    const rightHandSideEvaluator = sinon.stub().returns(true);
    const rightHandSide = new Specification(rightHandSideEvaluator);

    const instance = { something: 42 };
    const rule = new And(leftHandSide, rightHandSide);
    const result = rule.isSatisfiedBy(instance);

    it('should be considered satisfied', () => result.should.be.true);
});
