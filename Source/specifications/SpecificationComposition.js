import * as OriginalSpecification from './Specification';
import {And} from './And';
import {Or} from './Or';

let Spec = OriginalSpecification.Specification;

/**
 * Takes this rule and appends another rule with a logical AND operand
 * 
 * @param {function} rule - The other rule to AND together with this
 */
Spec.prototype.and = function(rule) { 
    let specification = new Spec(rule);
    let andOperand = new And(this, specification);
    return andOperand;
};

/**
 * Takes this rule and appends another rule with a logical OR operand
 * 
 * @param {function} rule - The other rule to AND together with this
 */
Spec.prototype.or = function(rule) {
    let specification = new Spec(rule);
    let andOperand = new Or(this, specification);
    return andOperand;
};

export var Specification = Spec;
