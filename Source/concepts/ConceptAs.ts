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

export function conceptFrom<C extends ConceptAs<T, U>, T extends ConceptBase, U extends string>(
    conceptConstructor: Constructor<ConceptAs<T, U>>,
    concept: T): C {
    return new conceptConstructor(concept) as C;
}
