// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { typeGuard, Constructor } from '@dolittle/types';
export interface IEquatable {
    equals(other: any): boolean
}

export interface IEquatableTo<T extends IEquatable | number | string | boolean> extends IEquatable {
    equals(other: T): boolean
}

type ConceptBase = number | string | boolean | IEquatable;

export function isConcept<T extends ConceptBase>(
    concept: ConceptAs<T> | T): concept is ConceptAs<T> {
    return typeGuard(concept, ConceptAs);
}

export function isConceptAs<T extends ConceptBase>(
    concept: ConceptAs<T> | any,
    className: Constructor<ConceptAs<T>>): concept is ConceptAs<T> {
    return typeGuard(concept, className);
}

export class ConceptAs<T extends ConceptBase> implements IEquatableTo<ConceptAs<T>>{
    readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    /**
     * Determines whether two object instances are equal.
     *
     * @param {ConceptAs<T>} other The other instance.
     * @returns {boolean}
     */
    equals(other: ConceptAs<T> | T): boolean {
        if (other == null) return false;
        const comparableValue = isConcept(other) ? other.value : other as T;
        if (comparableValue == null) return false;
        if (typeof comparableValue === 'string' || typeof comparableValue === 'number') {
            return comparableValue === this.value;
        } else {
            return (other as IEquatable).equals(this.value);
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
