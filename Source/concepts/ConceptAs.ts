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
    concept: Concept<T> | T): concept is Concept<T> {
    return typeGuard(concept, Concept);
}

export type ConceptAs<T extends ConceptBase> = Concept<T>;

export function createConcept<C extends ConceptAs<T>, T extends ConceptBase>(prototype: C, value: T): C {
    return new Concept(value) as C;
}

export function conceptFactoryFor<C extends ConceptAs<T>, T extends ConceptBase>(prototype: C = {} as C): (value: T) => C {
    return (value: T) => createConcept<C, T>(prototype, value);
}

export function conceptsAreEqual<C extends ConceptAs<T>, T extends ConceptBase>(left: C, right: C): boolean {
    if (left == null || right == null) return false;
    return left.equals(right);

}

export class Concept<T extends ConceptBase> implements IEquatableTo<Concept<T>>{

    constructor(readonly value: T) { }

    /**
     * Determines whether two object instances are equal.
     *
     * @param {Concept<T>} other The other instance.
     * @returns {boolean}
     */
    equals(other: Concept<T> | T): boolean {
        console.log(other);
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
