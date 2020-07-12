// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { And, Specification } from '../Specification';

describe('when left hand is not satisfied and right hand is', () => {

    const leftHandSideEvaluator = sinon.stub().returns(false);
    const leftHandSide = new Specification(leftHandSideEvaluator);

    const rightHandSideEvaluator = sinon.stub().returns(true);
    const rightHandSide = new Specification(rightHandSideEvaluator);

    const instance = { something: 42 };
    const rule = new And(leftHandSide, rightHandSide);

    const result = rule.isSatisfiedBy(instance);

    it('should not be considered satisfied', () => result.should.be.false);
});
