/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const _evaluator = new WeakMap();
const _currentInstance = new WeakMap();

/**
 * Represents a rule based on the specification pattern
 * 
 * @property {boolean} isSatisfied - Returns true if satisfied, false if not* 
 */
export class Specification {

    /**
     * Initializes new instance of {Specification}
     */
    constructor(evaluator) {
        _evaluator.set(this, evaluator);
    }

    /**
     * Gets the evaluator for the {Specification}
     * 
     * @property {function} evaluator - Instance of the function that performs evaluation
     */
    get evaluator() {
        return _evaluator.get(this);
    }

    /**
     * Gets whether or not the rule is satisfied
     * 
     * @property {boolean} isSatisfied - Returns true if satisfied, false if not
     */
    get isSatisfied() {
        let instance = _currentInstance.get(this);
        let evaluator = _evaluator.get(this);
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
        _currentInstance.set(this, instance);
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
