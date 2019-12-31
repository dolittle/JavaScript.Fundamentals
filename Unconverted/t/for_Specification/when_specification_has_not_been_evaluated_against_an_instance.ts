// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { Specification } from '../Specification';

describe('when specification has not been evaluated against an instance', () => {
    var evaluator = sinon.stub();
    let rule = new Specification(evaluator);

    it('should not call the evaluator', () => evaluator.called.should.be.false);
    it('should not be satisfied', () => rule.isSatisfied.should.be.false);
});