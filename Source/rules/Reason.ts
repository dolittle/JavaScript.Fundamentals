// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Guid } from '@dolittle/rudiments';

import { Cause } from './Cause';
import { ReasonId } from './ReasonId';

/**
 * Represents the reason for why a rule is broken.
 */
export class Reason {
    private constructor(
        private readonly _id: ReasonId,
        private readonly _title: string,
        private readonly _description: string) {
    }

    /**
     * Creates a new instance of {@link Reason} with a unique identifier.
     * @param {Guid | string} id - Unique identifier of the {@link Reason} - in the Guid format: 00000000-0000-0000-0000-000000000000.
     * @param {string} title - Title of the {@link Reason}.
     * @param {string} [description] - Optional description of the {@link Reason}.
     * @returns {Reason} The created reason.
     */
    static create(id: Guid | string, title: string, description = ''): Reason {
        return new Reason(ReasonId.from(id), title, description);
    }

    /**
     * Gets the unique identifier for the {@link Reason}.
     */
    get id(): ReasonId {
        return this._id;
    }

    /**
     * Gets the title for the {@link Reason}.
     */
    get title(): string {
        return this._title;
    }

    /**
     * Gets the description for the {@link Reason}.
     */
    get description(): string {
        return this._description;
    }

    /**
     * Creates a {@link Cause} instance without any arguments.
     * @returns {Cause} The cause instance.
     */
    justBecause(): Cause {
        return this.becauseOf({});
    }

    /**
     * Creates the {@link Cause} instance for this reason given the provided arguments.
     * @param {any} args - The arguments to use to create the actual cause.
     * @returns {Cause} The cause instance.
     */
    becauseOf(args: any): Cause {
        return new Cause(this, args);
    }
}
