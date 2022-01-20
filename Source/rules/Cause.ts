// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reason } from './Reason';

/**
 * Represents the actual cause and instance of a {@link Reason}.
 */
export class Cause {
    private readonly _args: Map<string, any> = new Map<string, any>();
    private readonly _title: string;
    private readonly _description: string;

    /**
     * Initializes a new instance of the {@link Cause} class.
     * @param {Reason} _reason - The reason the cause is for.
     * @param {any} args - The arguments for the cause.
     */
    constructor(private readonly _reason: Reason, args: any) {
        args = args ?? {};
        for (const key in args) {
            this._args.set(key, args[key]);
        }

        this._title = this.interpolateString(_reason.title);
        this._description = this.interpolateString(_reason.description);
    }

    /**
     * Gets the reason the cause is for.
     */
    get reason(): Reason {
        return this._reason;
    }

    /**
     * Gets the rendered title string.
     */
    get title(): string {
        return this._title;
    }

    /**
     * Gets the rendered description string.
     */
    get description(): string {
        return this._description;
    }

    /**
     * Gets any arguments passed to the {@link Cause}.
     */
    get arguments(): ReadonlyMap<string, any> {
        return this._args;
    }

    private interpolateString(input: string): string {
        const regex = new RegExp('{(.*?)}', '\g');
        let result = input;
        input.match(regex)?.forEach(match => {
            const toReplace = match;
            const key = toReplace.substr(1, toReplace.length - 2);

            if (this._args.has(key)) {
                const value = this._args.get(key);
                result = result.split(toReplace).join(value);
            }
        });

        return result;
    }
}
