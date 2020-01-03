// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { Specification, Or } from '../Specification';

describe('when chaining specification with and', () => {
    const first_predicate = sinon.stub();
    const second_predicate = sinon.stub();
    const first_specification = Specification.when(first_predicate);

    const result = first_specification.or(new Specification<any>(second_predicate));

    it('should return an and operator', () => result instanceof Or);
});
