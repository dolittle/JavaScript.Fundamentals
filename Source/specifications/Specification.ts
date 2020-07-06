// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

type Predicate<T> = (instance: T) => boolean;

/**
 * Represents specifications for building rules.
 * @template T Type of instance the specification is evaluating.
 */
export class Specification<T>
{
    /**
     * Initializes a new instance of the {Specification<T>} class.
     * @param {Predicate<T>} _predicate The predicate that will be used for evaluation.
     */
    constructor(private readonly _predicate: Predicate<T>) {
    }

    /**
     * Gets the predicate.
     * @return {Predicate<T>}
     */
    get predicate(): Predicate<T> {
        return this._predicate;
    }

    /**
     * Determines whether or not the specification will be satisfied by a given instance.
     * @param {T} instance Instance to evaluate.
     * @returns true if satisfied by the instance, false if not.
     */
    isSatisfiedBy(instance: T): boolean {
        return this._predicate(instance);
    }

    /**
     * Ands specification with another.
     * @param {Specification<T>} specification Specification to and together with this.
     * @returns {Specification<T>}
     */
    and(specification: Specification<T>): Specification<T> {
        return new And<T>(this, specification);
    }

    /**
     * Ands specification with the negation of another.
     * @param {Specification<T>} specification Specification to and together with this.
     * @returns {Specification<T>}
     */
    andNot(specification: Specification<T>): Specification<T> {
        return new And<T>(this, new Negative<T>(specification));
    }

    /**
     * Ors specification with another.
     * @param {Specification<T>} specification Specification to or together with this.
     * @returns {Specification<T>}
     */
    or(specification: Specification<T>): Specification<T> {
        return new Or<T>(this, specification);
    }

    /**
     * Or specification with the negation of another.
     * @param {Specification<T>} specification Specification to or together with this.
     * @returns {Specification<T>}
     */
    orNot(specification: Specification<T>): Specification<T> {
        return new Or<T>(this, new Negative<T>(specification));
    }

    /**
     * Starts a specification.
     * @template T Type of instance the specification is evaluating.
     * @param {Predicate<T>} predicate to start with.
     * @returns {Specification<T>}
     */
    static when<T = any>(predicate: Predicate<T>): Specification<T> {
        return new Specification<T>(predicate);
    }
}


/**
 * Negative {Specification<T>} - represents the negative of the given specification.
 * @template T Type of instance the specification is evaluating.
 */
export class Negative<T> extends Specification<T> {
    constructor(specification: Specification<T>) {
        super(instance => !specification.isSatisfiedBy(instance));
    }
}

/**
 * And {Specification<T>} - represents the logical and of two specifications.
 * @template T Type of instance the specification is evaluating.
 */
export class And<T> extends Specification<T> {
    constructor(leftHandSide: Specification<T>, rightHandSide: Specification<T>) {
        super(instance => leftHandSide.isSatisfiedBy(instance) && rightHandSide.isSatisfiedBy(instance));
    }
}

/**
 * Or {Specification<T>} - represents the logical or of two specifications.
 * @template T Type of instance the specification is evaluating.
 */
export class Or<T> extends Specification<T> {
    constructor(leftHandSide: Specification<T>, rightHandSide: Specification<T>) {
        super(instance => leftHandSide.isSatisfiedBy(instance) || rightHandSide.isSatisfiedBy(instance));
    }
}
