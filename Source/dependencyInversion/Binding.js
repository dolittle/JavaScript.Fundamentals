/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ActivationStrategy} from './Strategies/ActivationStrategy';
import {Scope} from './Scopes/Scope';

/**
 * Represents a binding for a specific service
 */
export class Binding
{
    #service;
    #strategy;
    #scope;

    /**
     * Initializes a new instance of {Binding}
     * 
     * @constructor
     * @param {function} service The service to bind
     * @param {strategy} strategy The strategy to use for binding
     * @param {scope} scope The scope in which the binding lives - controls the lifecycle
     */
    constructor(service, strategy, scope) {
        this.#service = service;
        this.#strategy = strategy;
        this.#scope = scope;
    }
    
    /**
     * Get the service
     * 
     * @property
     * @return {function}
     */
    get service() {
        return this.#service;
    }
    
    /**
     * Get the strategy used
     * 
     * @property
     * @return {ActivationStrategy}
     */
    get strategy() {
        return this.#strategy;
    }
    
    /**
     * Get the scope for the {Binding}
     * 
     * @property
     * @return {Scope}
     */
    get scope() {
        return this.#scope;
    }

    /**
     * Set the scope for the {Binding}
     * 
     * @property {Scope}
     */
    set scope(scope) {
        this.#scope = scope;
    }
}