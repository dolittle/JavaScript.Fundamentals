// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Constructor } from '@dolittle/types';
import { ConceptBase } from './ConceptBase';
import { ConceptAs } from './ConceptAs';

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
