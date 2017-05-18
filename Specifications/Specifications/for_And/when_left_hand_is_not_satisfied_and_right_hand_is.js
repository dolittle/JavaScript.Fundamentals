/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Specification} from "/Source/Specifications/Specification";
import {And} from "/Source/Specifications/And";

describe("when left hand is not satisfied and right hand is", () => {
    
    let leftHandSideEvaluator = sinon.stub().returns(false);
    let leftHandSide = new Specification(leftHandSideEvaluator);

    let rightHandSideEvaluator = sinon.stub().returns(true);
    let rightHandSide = new Specification(rightHandSideEvaluator);

    let instance = { something: 42 };
    let rule = new And(leftHandSide, rightHandSide);
    
    rule.evaluate(instance);

    let satisfied = rule.isSatisfied();

    it("should not be considered satisfied", () => satisfied.should.be.false);
});