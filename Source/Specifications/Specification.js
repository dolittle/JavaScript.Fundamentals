/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {And} from "./And";
import {Or} from "./Or";

const _evaluator = new WeakMap();
const _currentInstance = new WeakMap();

/**
 * Represents a rule based on the specification pattern
 */
export class Specification {

    /**
     * Initializes new instance of {Specification}
     */
    constructor(evaluator) {
        _evaluator.set(this, evaluator);
    }

    /**
     * Gets whether or not the rule is satisfied
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
     */
    evaluate(instance) {
        _currentInstance.set(this, instance);
        return this.isSatisfied;
    }

    /**
     * Takes this rule and appends another rule with a logical AND operand
     * 
     * @param {rule} The other rule to AND together with this
     */
    and(rule) {
        let specification = new Specification();
        _evaluator.set(specification, rule);
        let andOperand = new And(this, specification);
        return andOperand;
    }

    /**
     * Takes this rule and appends another rule with a logical OR operand
     * 
     * @param {rule} The other rule to OR together with this
     */
    or(rule) {
        let specification = new Specification();
        _evaluator.set(specification, rule);
        let orOperand = new Or(this, specification);
        return orOperand;
    }
}

/**
 * Starts a specification
 * 
 * @param {evaluator} The function that gets called to evaluate
 */
Specification.when = (evaluator) => {
    let specification = new Specification(evaluator);
    return specification;
};
