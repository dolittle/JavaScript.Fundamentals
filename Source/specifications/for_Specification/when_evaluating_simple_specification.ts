// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { Specification, Or } from '../Specification';

describe('when evaluating simple specification', () => {
    const instance = 'something';
    const predicate = sinon.stub();

    const specification = Specification.when(predicate);

    specification.isSatisfiedBy(instance);

    it('should return an and operator', () => predicate.calledWith(instance).should.be.true);
});
