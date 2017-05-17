/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {TypeInfo} from "./Reflection/TypeInfo";

const _message = new WeakMap();

/**
 * Defines a base for structured exceptions 
 */
export class Exception
{
    /**
     * Initializes a new instance of {Exception}
     * @param {message} Message to include with the exception 
     */
    constructor(message) {
        _message.set(this, message);
    }

    /**
     * Get the message for the exception
     */
    get message() {
        if( _message.get(this) ) return _message.get(this);
        return "";
    }

    /**
     * Throw an instance of the exception
     */
    static throw(messageParameters) {
        throw new this();
    }
}