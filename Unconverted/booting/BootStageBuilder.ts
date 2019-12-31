// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootStage } from './BootStage';
import { MissingAssociation } from './MissingAssociation';
import { BootStageResult } from './BootStageResult';

/**
 * Represents a builder for a {BootStage}
 */
export class BootStageBuilder {
    private _associations = {};

    /**
     * Associate a key with a value
     * @param {string} key 
     * @param {any} value 
     */
    associate(key: string, value: any) {
        this._associations[key] = value;
    }

    /**
     * Get an associated value
     * @param {string} key 
     */
    getAssociation(key: string) {
        this.throwIfMissingAssociation(key);
        return this._associations[key];
    }

    /**
     * Build the {BootStage}
     * @returns {BootStageResult}
     */
    build() {
        let result = new BootStageResult(this._associations);
        return result;
    }

    private throwIfMissingAssociation(key: string) {
        if (!this._associations.hasOwnProperty(key)) throw new MissingAssociation(key);
    }
}