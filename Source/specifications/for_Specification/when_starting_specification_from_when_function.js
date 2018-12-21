/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Specification} from "/Source/Specifications/Specification";

describe("when starting specification from when function", () => {
    let evaluator = sinon.stub();

    let specification = Specification.when(evaluator);

    it("should return a specifiction", () => (specification instanceof Specification).should.be.true);
    it("should hold the evaluator", () => specification.evaluator.should.equal(evaluator));
});