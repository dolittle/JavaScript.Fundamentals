// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { Negative, Specification } from '../Specification';

describe('when evaluating specification returning true', () => {
    const predicate = sinon.stub().returns(true);
    const negative = new Negative(new Specification(predicate));

    const result = negative.isSatisfiedBy({});

    it('should be considered false', () => result.should.be.false);
});
