// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Guid, IEquatable, isGuid } from '@dolittle/rudiments';
import { Constructor } from '@dolittle/types';

import { ConceptAs } from './ConceptAs';
import { ConceptBase } from './ConceptBase';
import { isConcept } from './isConcept';

/* eslint-disable @typescript-eslint/naming-convention */

const createConceptTypePredicate = <C extends ConceptAs<T, U>, T extends ConceptBase, U extends string>(
    type: Constructor<C>,
    __uniqueConceptName: C['__uniqueConceptName'],
    valueTypePredicate: (object: any) => object is C['value']
): (object: any) => object is C => {
    return (object): object is C => {
        if (!isConcept(object)) return false;
        if (object.__uniqueConceptName !== __uniqueConceptName) return false;
        if (!valueTypePredicate(object.value)) return false;
        return true;
    };
};

/**
 * Creates a type predicate for the provided {@link ConceptAs} type.
 * @param {Constructor} type - The type of the concept.
 * @param {string} __uniqueConceptName - The unique concept name.
 * @param {(any) => boolean} valueTypePredicate - A predicate to use to check the type of the concept value.
 * @returns {(any) => boolean} A type predicate that checks if an object is an instance of the {@link ConceptAs} type.
 */
export const createIsConceptAs = <C extends ConceptAs<T, U>, T extends IEquatable, U extends string>(
    type: Constructor<C>,
    __uniqueConceptName: C['__uniqueConceptName'],
    valueTypePredicate: (object: any) => object is C['value']
): (object: any) => object is C => {
    return createConceptTypePredicate(type, __uniqueConceptName, valueTypePredicate);
};

/**
 * Creates a type predicate for the provided string {@link ConceptAs} type.
 * @param {Constructor} type - The type of the concept.
 * @param {string} __uniqueConceptName - The unique concept name.
 * @returns {(any) => boolean} A type predicate that checks if an object is an instance of the {@link ConceptAs} type.
 */
export const createIsConceptAsString = <C extends ConceptAs<string, U>, U extends string>(
    type: Constructor<C>,
    __uniqueConceptName: C['__uniqueConceptName'],
): (object: any) => object is C => {
    return createConceptTypePredicate(type, __uniqueConceptName, (object): object is string => typeof object === 'string');
};

/**
 * Creates a type predicate for the provided number {@link ConceptAs} type.
 * @param {Constructor} type - The type of the concept.
 * @param {string} __uniqueConceptName - The unique concept name.
 * @returns {(any) => boolean} A type predicate that checks if an object is an instance of the {@link ConceptAs} type.
 */
export const createIsConceptAsNumber = <C extends ConceptAs<number, U>, U extends string>(
    type: Constructor<C>,
    __uniqueConceptName: C['__uniqueConceptName'],
): (object: any) => object is C => {
    return createConceptTypePredicate(type, __uniqueConceptName, (object): object is number => typeof object === 'number');
};

/**
 * Creates a type predicate for the provided boolean {@link ConceptAs} type.
 * @param {Constructor} type - The type of the concept.
 * @param {string} __uniqueConceptName - The unique concept name.
 * @returns {(any) => boolean} A type predicate that checks if an object is an instance of the {@link ConceptAs} type.
 */
export const createIsConceptAsBoolean = <C extends ConceptAs<boolean, U>, U extends string>(
    type: Constructor<C>,
    __uniqueConceptName: C['__uniqueConceptName'],
): (object: any) => object is C => {
    return createConceptTypePredicate(type, __uniqueConceptName, (object): object is boolean => typeof object === 'boolean');
};

/**
 * Creates a type predicate for the provided bigint {@link ConceptAs} type.
 * @param {Constructor} type - The type of the concept.
 * @param {string} __uniqueConceptName - The unique concept name.
 * @returns {(any) => boolean} A type predicate that checks if an object is an instance of the {@link ConceptAs} type.
 */
export const createIsConceptAsBigInt = <C extends ConceptAs<bigint, U>, U extends string>(
    type: Constructor<C>,
    __uniqueConceptName: C['__uniqueConceptName'],
): (object: any) => object is C => {
    return createConceptTypePredicate(type, __uniqueConceptName, (object): object is bigint => typeof object === 'bigint');
};

/**
 * Creates a type predicate for the provided {@link Guid} {@link ConceptAs} type.
 * @param {Constructor} type - The type of the concept.
 * @param {string} __uniqueConceptName - The unique concept name.
 * @returns {(any) => boolean} A type predicate that checks if an object is an instance of the {@link ConceptAs} type.
 */
export const createIsConceptAsGuid = <C extends ConceptAs<Guid, U>, U extends string>(
    type: Constructor<C>,
    __uniqueConceptName: C['__uniqueConceptName'],
): (object: any) => object is C => {
    return createConceptTypePredicate(type, __uniqueConceptName, isGuid);
};
