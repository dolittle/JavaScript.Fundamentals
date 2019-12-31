// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { Specification, And } from '../Specification';

describe('when chaining specification with and', () => {
    let first_predicate = sinon.stub();
    let second_predicate = sinon.stub();
    let first_specification = Specification.when(first_predicate);

    let result = first_specification.and(new Specification<any>(second_predicate));

    it('should return an and operator', () => result instanceof And);
});