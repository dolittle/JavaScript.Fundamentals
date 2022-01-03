// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatable, isEquatable } from '@dolittle/rudiments';
import { Constructor } from '@dolittle/types';

import { MissingUniqueConceptName } from './MissingUniqueConceptName';

/* eslint-disable @typescript-eslint/naming-convention */

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
    constructor(readonly value: T, readonly __uniqueConceptName: U) {
        if (__uniqueConceptName == null) throw new MissingUniqueConceptName();
    }

    /** @inheritdoc */
    equals(other: any): boolean {
        if (other === null || other === undefined) return false;

        let comparableValue = other;
        if (isConcept(other)) {
            if (other.__uniqueConceptName !== this.__uniqueConceptName) return false;
            comparableValue = other.value;
        }

        switch (typeof this.value) {
            case 'string':
            case 'number':
            case 'boolean':
            case 'bigint':
                return comparableValue === this.value;
        }

        if (isEquatable(this.value)) {
            return this.value.equals(comparableValue);
        }

        return false;
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
 * Checks whether or not an object is an instance of {@link ConceptAs}.
 * @param {any} object - The object to check.
 * @returns {boolean} True if the object is an {@link ConceptAs}, false if not.
 */
export const isConcept = (object: any): object is ConceptAs<ConceptBase, string> => {
    if (typeof object !== 'object') return false;

    const { __uniqueConceptName, value } = object;
    if (typeof __uniqueConceptName !== 'string') return false;
    switch (typeof value) {
        case 'function':
        case 'undefined':
        case 'symbol':
            return false;
        case 'object':
            if (!isEquatable(value)) return false;
    }

    if (!isEquatable(object)) return false;

    return true;
};

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
