// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatable, isEquatable } from '@dolittle/rudiments';

import { ConceptBase } from './ConceptBase';
import { isConcept } from './isConcept';
import { MissingUniqueConceptName } from './MissingUniqueConceptName';

/* eslint-disable @typescript-eslint/naming-convention */

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
