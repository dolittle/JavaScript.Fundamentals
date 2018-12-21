/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Specification} from "/Source/Specifications/Specification";
import {And} from "/Source/Specifications/And";

describe("when left hand is satisfied and right hand not", () => {
    
    let leftHandSideEvaluator = sinon.stub().returns(true);
    let leftHandSide = new Specification(leftHandSideEvaluator);

    let rightHandSideEvaluator = sinon.stub().returns(false);
    let rightHandSide = new Specification(rightHandSideEvaluator);

    let instance = { something: 42 };
    let rule = new And(leftHandSide, rightHandSide);
    rule.evaluate(instance);

    it("should not be considered satisfied", () => rule.isSatisfied.should.be.false);
});