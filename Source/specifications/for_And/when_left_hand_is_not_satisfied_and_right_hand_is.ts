// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { And, Specification } from '../Specification';

describe('when left hand is not satisfied and right hand is', () => {

    let leftHandSideEvaluator = sinon.stub().returns(false);
    let leftHandSide = new Specification(leftHandSideEvaluator);

    let rightHandSideEvaluator = sinon.stub().returns(true);
    let rightHandSide = new Specification(rightHandSideEvaluator);

    let instance = { something: 42 };
    let rule = new And(leftHandSide, rightHandSide);

    let result = rule.isSatisfiedBy(instance);

    it('should not be considered satisfied', () => result.should.be.false);
});