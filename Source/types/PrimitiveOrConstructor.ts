// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Constructor } from './Constructor';
import { PrimitiveTypeMap } from './PrimitiveTypeMap';

/**
 * A primitive or a {@link Constructor}.
 */
export type PrimitiveOrConstructor = Constructor | keyof PrimitiveTypeMap;
