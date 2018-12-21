/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function parseFunction(func) {
    var result = [];

    var match = func.toString().match(/function\s*\w*\s*\((.*?)\)/);
    if (match !== null) {
        var functionArguments = match[1].split(/\s*,\s*/);
        functionArguments.forEach(function (item) {
            if (item.trim().length > 0) {
                result.push(item);
            }
        });
    }

    return result;
}

/**
 * Represents a system able to extract dependencies from types
 */
export class Dependencies 
{
    /**
     * Get dependencies from a type / constructor
     * @param {constructor} The type or constructor to get from
     * @returns {String[]} The names of the dependencies
     */
    getFrom(constructor) {
        var result = parseFunction(constructor);
        return result;
    }
}