// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { typeGuard, PrimitiveOrConstructor, PrimitiveTypeMap} from '@dolittle/types';
export interface IEquatable {
    equals(other: any): boolean
}

export interface IEquatableTo<T extends IEquatable> extends IEquatable {
    equals(other: T): boolean
}

type ConceptBase = keyof PrimitiveTypeMap | IEquatable;

export function isConceptAs<T extends ConceptBase>(concept: ConceptAs<T> | T, className: PrimitiveOrConstructor): concept is ConceptAs<T> {
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
        const comparableValue = isConceptAs(other, ConceptAs) ? other.value : other as T;
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
