/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Specification} from './Specification';

/**
 * Represents an implementation of And operator in an expression of a specification
 */
export class Or extends Specification {
    #leftHandSide;
    #rightHandSide;

    /**
     * Initializes a new instance of {And}
     * 
     * @param {leftHandSide} The left hand side of the expression
     * @param {rightHandSide} The right hand side of the expression
     */
    constructor(leftHandSide, rightHandSide) {
        super(null);
        this.#leftHandSide = leftHandSide;
        this.#rightHandSide = rightHandSide;
    }

    /**
     * Get the left of the expression
     * 
     * @return {Specification} instance for the left rule
     */
    get left() {
        return this.#leftHandSide;
    }

    /**
     * Get the right of the expression
     * 
     * @return {Specification} instance for the right rule
     */
    get right() {
        return this.#rightHandSide;
    }

    /**
     * Get wether or not the {And} operator is satisfied
     */
    get isSatisfied() {
        return  this.#leftHandSide.isSatisfied || 
                this.#rightHandSide.isSatisfied;
    }

    /**
     * Evaluate an instance
     */
    evaluate(instance) {
        this.#leftHandSide.evaluate(instance);
        this.#rightHandSide.evaluate(instance);
    }
}
