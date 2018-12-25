/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents a rule based on the specification pattern
 * 
 * @property {boolean} isSatisfied - Returns true if satisfied, false if not* 
 */
export class Specification {
    #evaluator;
    #currentInstance;

    /**
     * Initializes new instance of {Specification}
     */
    constructor(evaluator) {
        this.#evaluator = evaluator;
    }

    /**
     * Gets the evaluator for the {Specification}
     * 
     * @property {function} evaluator - Instance of the function that performs evaluation
     */
    get evaluator() {
        return this.#evaluator;
    }

    /**
     * Gets whether or not the rule is satisfied
     * 
     * @property {boolean} isSatisfied - Returns true if satisfied, false if not
     */
    get isSatisfied() {
        let instance = this.#currentInstance;
        let evaluator = this.#evaluator;
        if( instance && evaluator ) {
            return evaluator(instance);
        }
        return false;
    }

    /**
     * Evaluates the rule against an instance. This instance becomes the current instance for the rule.
     * 
     * @param {object} instance - The instance to evaluate against
     */
    evaluate(instance) {
        this.#currentInstance = instance;
        return this.isSatisfied;
    }
}

/**
 * Starts a specification
 * 
 * @param {function} evaluator - The function that gets called to evaluate
 */
Specification.when = (evaluator) => {
    let specification = new Specification(evaluator);
    return specification;
};
