// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatableTo, IEquatable } from '@dolittle/rudiments';
import { typeGuard } from '@dolittle/types';

type ConceptBase = number | bigint | string | boolean | IEquatable;


/**
 * Represents a unique concept.
 */
export type ConceptAs<T extends ConceptBase, U> = Concept<T> & { __uniqueConceptName: U};

/**
 * Represents a concept of a primitive value or something that is equatable to something.
 *
 * @export
 * @class Concept
 * @implements {IEquatableTo<Concept<T>>}
 * @template T
 */
export class Concept<T extends ConceptBase> implements IEquatableTo<Concept<T>>, IEquatableTo<T> {

    /**
     * Creates an instance of Concept.
     * @param {T} value
     */
    constructor(readonly value: T) { }

    /**
     * A type-guard checking whether the given argument is a Concept.
     *
     * @static
     * @template T
     * @param {(Concept<T> | T)} concept
     * @returns {concept is Concept<T>}
     */
    static isConcept<T extends ConceptBase>(concept: Concept<T> | T): concept is Concept<T> {
        return typeGuard(concept, Concept);
    }

    /**
     * Gets a ConceptAs for the given value.
     *
     * @static
     * @template C
     * @template T
     * @template U
     * @param {T} value
     * @param {C} [prototype={} as C]
     * @returns {C}
     */
    static from<C extends ConceptAs<T, U>, T extends ConceptBase, U>(value: Concept<T> | T, prototype: C = {} as C): C {
        return Concept.isConcept(value) ? value as C : new Concept(value) as C;
    }

    /**
     * Gets a ConceptAs a number.
     *
     * @static
     * @template C
     * @template U
     * @param {number} value
     * @param {C} [prototype={} as C]
     * @returns {C}
     */
    static fromNumber<C extends ConceptAs<number, U>, U>(value: number, prototype: C = {} as C): C {
        return new Concept(value) as C;
    }

    /**
     * Gets a ConceptAs a string.
     *
     * @static
     * @template C
     * @template U
     * @param {string} value
     * @param {C} [prototype={} as C]
     * @returns {C}
     */
    static fromString<C extends ConceptAs<string, U>, U>(value: string, prototype: C = {} as C): C {
        return new Concept(value) as C;
    }

    /**
     * Gets a ConceptAs a boolean.
     *
     * @static
     * @template T
     * @template C
     * @template U
     * @param {boolean} value
     * @param {C} [prototype={} as C]
     * @returns {C}
     */
    static fromBoolean<T extends boolean, C extends ConceptAs<T, U>, U>(value: boolean, prototype: C = {} as C): C {
        return new Concept(value) as C;
    }

    /**
     * @inheritdoc
     */
    equals(other: Concept<T> | T): boolean {
        if (other == null) return false;
        const comparableValue = Concept.isConcept(other) ? other.value : other as T;
        if (comparableValue == null) return false;
        switch (typeof comparableValue) {
            case 'number':
            case 'bigint':
            case 'string':
            case 'boolean':
                return comparableValue === this.value;
            default:
                return (comparableValue as IEquatable).equals(this.value);
        }
    }

    /**
     * The string representation of this instance.
     *
     * @returns {string}
     */
    toString(): string {
        return this.value.toString();
    }
}
