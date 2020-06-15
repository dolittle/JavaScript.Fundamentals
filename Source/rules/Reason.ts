// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents the reason for why a rule is broken.
 */
export class Reason {


    private constructor(private readonly _id: string, private readonly _title: string, private readonly _description: string) {
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
}
