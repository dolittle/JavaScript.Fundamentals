/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Exception} from "./Exception";

/**
 * Gets thrown if a codepath is not implemented
 */
export class NotImplemented extends Exception
{
    /**
     * Initializes a new instance {NotImplemented}
     */
    constructor() {
        super("Not implemented");
    }
}