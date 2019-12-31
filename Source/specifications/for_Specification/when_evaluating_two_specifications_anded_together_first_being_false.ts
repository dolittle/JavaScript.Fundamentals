// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { Specification, Or } from '../Specification';

describe('when evaluating two specifications anded together first being false', () => {
    let instance = 'something';
    let left_predicate = sinon.stub().returns(false);
    let right_predicate = sinon.stub().returns(true);
    let specification = Specification.when(left_predicate).and(new Specification<any>(right_predicate));

    let result = specification.isSatisfiedBy(instance);

    it('should ask the left predicate', () => left_predicate.calledWith(instance).should.be.true);
    it('should not ask the right predicate', () => right_predicate.calledWith(instance).should.be.false);
    it('should result in not being satisfied', () => result.should.be.false);
});