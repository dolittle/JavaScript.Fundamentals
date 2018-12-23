/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
        return '';
    }

    /**
     * Throw an instance of the exception
     */
    static throw() {
        let bindArguments = [null];
        for( var argumentIndex=0; argumentIndex<arguments.length; argumentIndex++) bindArguments.push(arguments[argumentIndex]);
        var boundException = this.bind.apply(this, bindArguments);
        throw new boundException();
    }
}