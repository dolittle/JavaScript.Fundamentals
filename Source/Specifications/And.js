/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Specification} from "./Specification";

const _leftHandSide = new WeakMap();
const _rightHandSide = new WeakMap();

/**
 * Represents an implementation of And operator in an expression of a specification
 */
export class And extends Specification {

    /**
     * Initializes a new instance of {And}
     * @param {leftHandSide} The left hand side of the expression
     * @param {rightHandSide} The right hand side of the expression
     */
    constructor(leftHandSide, rightHandSide) {
        super(null);
        _leftHandSide.set(this, leftHandSide);
        _rightHandSide.set(this, rightHandSide);
    }

    /**
     * Get wether or not the {And} operator is satisfied
     */
    get isSatisfied() {
        return  _leftHandSide.get(this).isSatisfied && 
                _rightHandSide.get(this).isSatisfied;
    }

    /**
     * Evaluate an instance
     */
    evaluate(instance) {
        _leftHandSide.get(this).evaluate(instance);
        _rightHandSide.get(this).evaluate(instance);
    }
}