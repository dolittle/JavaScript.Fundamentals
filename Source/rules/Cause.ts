// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reason } from './Reason';

/**
 * Represents the actual cause and instance of a {Reason}
 */
export class Cause {
    private _args: Map<string, any> = new Map<string, any>();
    private _title: string;
    private _description: string;

    /**
     * Initializes a new instance of the {Cause} class.
     * @param {Reason} _reason - The reason the cause is for.
     * @param {*} args - The arguments for the cause.
     */
    constructor(private _reason: Reason, args: any) {
        for (let key in args) {
            this._args.set(key, args[key]);
        }

        this._title = this.interpolateString(_reason.title);
        this._description = this.interpolateString(_reason.description);
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
        const regex = new RegExp('{(.*?)}', '\g');
        let result = input;
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