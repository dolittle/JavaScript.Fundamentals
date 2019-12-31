// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { Specification } from '../Specification';

describe('when starting specification from when function', () => {
    let evaluator = sinon.stub();

    let specification = Specification.when(evaluator);

    it('should return a specification', () => (specification instanceof Specification).should.be.true);
    it('should hold the evaluator', () => specification.evaluator.should.equal(evaluator));
});