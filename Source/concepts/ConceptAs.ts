// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatable } from '@dolittle/rudiments';
import { typeGuard, Constructor } from '@dolittle/types';
import { MissingUniqueConceptName } from './index';

type ConceptBase = number | bigint | string | boolean | IEquatable;

/**
 * Represents a concept of a primitive value or something that is equatable to something.
 *
 * @export
 * @class Concept
 * @implements {IEquatable}
 * @template T
 */
export class ConceptAs<T extends ConceptBase, U extends string> implements IEquatable {

    /**
     * Creates an instance of Concept.
     * @param {T} value
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    constructor(readonly value: T, readonly __uniqueConceptName: U) {
        if (__uniqueConceptName == null) throw new MissingUniqueConceptName();
    }

    /**
     * A type-guard checking whether the given argument is a Concept.
     *
     * @static
     * @template T
     * @param {(ConceptAs<T> | T)} concept
     * @returns {concept is ConceptAs<T, U>}
     */
    static isConcept<T extends ConceptBase, U extends string>(concept: ConceptAs<T, U> | T): concept is ConceptAs<T, U> {
        return typeGuard(concept, ConceptAs);
    }

    /**
     * Gets a ConceptAs for the given value.
     *
     * @static
     * @template C
     * @template T
     * @template U
     * @param {T} concept
     * @deprecated Use
     * @returns {C}
     */
    static from<C extends ConceptAs<T, U>, T extends ConceptBase, U extends string>(concept: ConceptAs<T, U> | T, uniqueConceptName?: U): C {
        if (ConceptAs.isConcept(concept)) return new ConceptAs(concept.value, concept.__uniqueConceptName) as C;
        if (uniqueConceptName == null) throw new MissingUniqueConceptName();
        return new ConceptAs(concept, uniqueConceptName) as C;
    }

    /**
     * Gets a ConceptAs a number.
     *
     * @static
     * @template C
     * @template U
     * @param {number} value
     * @returns {C}
     */
    static fromNumber<C extends ConceptAs<number, U>, U extends string>(value: number, uniqueConceptName: U): C {
        if (uniqueConceptName == null) throw new MissingUniqueConceptName();
        return new ConceptAs(value, uniqueConceptName) as C;
    }

    /**
     * Gets a ConceptAs a string.
     *
     * @static
     * @template C
     * @template U
     * @param {string} value
     * @returns {C}
     */
    static fromString<C extends ConceptAs<string, U>, U extends string>(value: string, uniqueConceptName: U): C {
        if (uniqueConceptName == null) throw new MissingUniqueConceptName();
        return new ConceptAs(value, uniqueConceptName) as C;
    }

    /**
     * Gets a ConceptAs a boolean.
     *
     * @static
     * @template T
     * @template C
     * @template U
     * @param {boolean} value
     * @deprecated
     * @returns {C}
     */
    static fromBoolean<T extends boolean, C extends ConceptAs<T, U>, U extends string>(value: boolean, uniqueConceptName: U): C {
        if (uniqueConceptName == null) throw new MissingUniqueConceptName();
        return new ConceptAs(value, uniqueConceptName) as C;
    }

    /**
     * @inheritdoc
     */
    equals(other: any): boolean {
        if (other == null) return false;
        if (ConceptAs.isConcept(other) && other.__uniqueConceptName !== this.__uniqueConceptName) return false;
        const comparableValue = ConceptAs.isConcept(other) ? other.value : other as T;
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

export function conceptFrom<C extends ConceptAs<T, U>, T extends ConceptBase, U extends string>(conceptConstructor: Constructor<C>, concept: T): C {
    return new conceptConstructor(concept) as C;
}
export function conceptFromFor<C extends ConceptAs<T, U>, T extends ConceptBase, U extends string>(conceptConstructor: Constructor<C>): (concept: T) => C {
    return (concept: T) => new conceptConstructor(concept) as C;
}