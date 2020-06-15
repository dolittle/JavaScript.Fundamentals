/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Exception } from './index';

/**
 * Exception that gets thrown if a code path is not implemented
 */
export class NotImplemented extends Exception
{
    /**
     * Initializes a new instance {NotImplemented}
     */
    constructor() {
        super('Not implemented');
    }
}
