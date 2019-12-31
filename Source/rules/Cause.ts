// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reason } from './Reason';

/**
 * Represents the actual cause and instance of a {Reason}
 */
export class Cause {
    private _reason: Reason;
    private _args: Map<string, any> = new Map<string, any>();
    private _title: string;
    private _description: string;

    /**
     * Initializes a new instance of the {Cause} class.
     * @param {Reason} reason - The reason the cause is for.
     * @param {*} args - The arguments for the cause.
     */
    constructor(reason: Reason, args: any) {
        this._reason = reason;

        for( let key in args ) {
            this._args.set(key, args[key]);
        }
        
        this._title = this.interpolateString(reason.title);
        this._description = this.interpolateString(reason.description);
    }

    /**
     * Gets the reason the cause is for
     * @returns {Reason}
     */
    get reason(): Reason {
        return this._reason;
    }

    /**
     * Gets the rendered title string
     * @returns {string}
     */
    get title(): string {
        return this._title;
    }

    /**
     * Gets the rendered description string
     * @returns {string}
     */
    get description(): string {
        return this._description;
    }

    /**
     * Gets any arguments passed to the {Cause}
     * @returns {any}
     */
    get arguments(): ReadonlyMap<string, any> {
        return this._args;
    }

    private interpolateString(input: string): string {
        let result = input;
        let regex = new RegExp('{(.*?)}', '\g');
        input.match(regex)?.forEach(match => {
            let toReplace = match;
            let key = toReplace.substr(1, toReplace.length - 2);

            if (this._args.has(key)) {
                let value = this._args.get(key);
                result = result.split(toReplace).join(value);
            }
        });

        return result;
    }
}