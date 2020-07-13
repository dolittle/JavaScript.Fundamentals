// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { Exception } from '../../Exception';

export class a_custom_exception extends Exception {
    constructor(message: string) {
        super(message);
    }
}
