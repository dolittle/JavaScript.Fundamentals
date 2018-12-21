/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Exception} from "dolittle-exceptions";

/**
 * The exception that gets thrown when no binding for a given service is missing
 */
export class MissingBindingForService extends Exception
{
    /**
     * Initializes an instance of {MissingBindingForService}
     */
    constructor(service) {
        super(`Missing binding for service ´${service}´`);
        this.service = service;
    }
}    