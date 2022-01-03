// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatable } from '@dolittle/rudiments';
import { typeGuard, Constructor } from '@dolittle/types';

import { MissingUniqueConceptName } from './MissingUniqueConceptName';

type ConceptBase = number | bigint | string | boolean | IEquatable;

/**
 * Represents a concept of a primitive value or something that is equatable.
 * @template T The type of the underlying concept value.
 * @template U The unique concept name.
 */
export class ConceptAs<T extends ConceptBase, U extends string> implements IEquatable {

    /**
     * Initializes a new instance of the {@link ConceptAs} class.
     * @param {T} value - The underlying concept value.
     * @param {U} __uniqueConceptName - The unique concept name to use for distinguishing different concepts.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    constructor(readonly value: T, readonly __uniqueConceptName: U) {
        if (__uniqueConceptName == null) throw new MissingUniqueConceptName();
    }

    /**
     * A type-guard checking whether the given argument is a Concept.
     * @param {ConceptAs<T> | T} concept - The concept to check.
     * @returns {(any) => boolean} The concept type predicate.
     */
    static isConcept<T extends ConceptBase, U extends string>(concept: ConceptAs<T, U> | T): concept is ConceptAs<T, U> {
        return typeGuard(concept, ConceptAs);
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
     * The string representation of this concept instance.
     * @returns {string} - The concept value as a string.
     */
    toString(): string {
        return this.value.toString();
    }
}

/**
 * Creates a new concept of the given type with the provided value.
 * @param {Constructor<ConceptAs<T, U>>} conceptConstructor - The type of the concept to create.
 * @param {T} concept - The underlying concept value to use.
 * @returns {C} The created concept.
 * @template C The type of the concept to create.
 * @template T The type of the underlyinc concept value.
 * @template U The unque concept name.
 */
export function conceptFrom<C extends ConceptAs<T, U>, T extends ConceptBase, U extends string>(conceptConstructor: Constructor<ConceptAs<T, U>>, concept: T): C {
    return new conceptConstructor(concept) as C;
}
