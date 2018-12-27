/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStage } from './BootStage';
import { MissingAssociation } from './MissingAssociation';
import { BootStageResult } from './BootStageResult';

/**
 * Represents a builder for a {BootStage}
 */
export class BootStageBuilder {
    #associations = {};

    /**
     * Associate a key with a value
     * @param {*} key 
     * @param {*} value 
     */
    associate(key, value) {
        this.#associations[key] = value;
    }

    /**
     * Get an associated value
     * @param {*} key 
     */
    getAssociation(key) {
        this.#throwIfMissingAssociation(key);
        return this.#associations[key];
    }

    /**
     * Build the {BootStage}
     * @returns {BootStageResult}
     */
    build() {
        let result = new BootStageResult(this.#associations);
        return result;
    }

    #throwIfMissingAssociation(key) {
        if (!this.#associations.hasOwnProperty(key)) MissingAssociation.throw(key);
    }
}