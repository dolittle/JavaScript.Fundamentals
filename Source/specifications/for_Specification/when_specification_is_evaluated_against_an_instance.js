/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Specification} from '../Specification';

describe('when specification is evaluated against an instance', () => {

    let evaluator = sinon.stub().returns(true);
    let rule = new Specification(evaluator)
    let instance = { something: 42 };
    rule.evaluate(instance);

    it('should call the evaluator with the instance', () => evaluator.calledWith(instance).should.be.true);
    it('should be satisfied', () => rule.isSatisfied.should.be.true);
});