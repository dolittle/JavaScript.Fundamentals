/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Specification} from "/Source/Specifications/Specification";

describe("when specification has not been evaluated against an instance", () => {
    var evaluator = sinon.stub();
    let rule = new Specification(evaluator);

    it("should not call the evaluator", () => evaluator.called.should.be.false);
    it("should not be satisfied", () => rule.isSatisfied.should.be.false);
});