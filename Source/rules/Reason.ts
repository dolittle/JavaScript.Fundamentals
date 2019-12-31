// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Cause } from './index';

/**
 * Defines the reason a rule is broken.
 */
export class Reason {
    private _id: string;
    private _title: string;
    private _description: string;

    /**
     * Gets the unique identifier for the {Reason}.
     * @returns {string}
     */
    get id(): string {
        return this._id;
    }

    /**
     * Gets the title for the {Reason}.
     * @returns {string}
     */
    get title(): string {
        return this._title;
    }

    /**
     * Gets the description for the {Reason}.
     * @returns {string}
     */
    get description(): string {
        return this._description;
    }

    private constructor(id: string, title: string, description: string) {
        this._id = id;
        this._title = title;
        this._description = description;
    }

    /**
     * Creates a new instance of {Reason} with a unique identifier.
     * @param id - Unique identifier of the {Reason} - in the Guid format: 00000000-0000-0000-0000-000000000000.
     * @param title - Title of the {Reason}.
     * @param [description] - Optional description of the {Reason}.
     * @returns {Reason} 
     */
    static create(id: string, title: string, description: string = ''): Reason {
        return new Reason(id, title, description);
    }

    /**
     * Create a {Cause} with no arguments.
     * @returns {Cause} 
     */
    noArguments(): Cause {
        return this.withArguments({});
    }

    /**
     * Create a {Cause} with given arguments that will be typically used in titles and descriptions.
     * @param {*} args - Arguments to use.
     * @returns {Cause} 
     */
    withArguments(args: any): Cause {
        return new Cause(this, args);
    }
}