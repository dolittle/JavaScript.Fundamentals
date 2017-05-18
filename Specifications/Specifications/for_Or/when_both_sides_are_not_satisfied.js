/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Specification } from "/Source/Specifications/Specification";
import { Or } from "/Source/Specifications/Or";

describe("when both sides are not satisfied", () => {

    let leftHandSideEvaluator = sinon.stub().returns(false);
    let leftHandSide = new Specification(leftHandSideEvaluator);

    let rightHandSideEvaluator = sinon.stub().returns(false);
    let rightHandSide = new Specification(rightHandSideEvaluator);

    let instance = { something: 42 };
    let rule = new Or(leftHandSide, rightHandSide);
    rule.evaluate(instance);

    it("should not be considered satisfied", () => rule.isSatisfied.should.be.false);
});