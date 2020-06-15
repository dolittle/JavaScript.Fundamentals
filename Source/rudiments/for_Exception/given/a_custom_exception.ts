/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Exception } from '../..';

export class a_custom_exception extends Exception {
    constructor(message: string) {
        super(message);
    }
}
