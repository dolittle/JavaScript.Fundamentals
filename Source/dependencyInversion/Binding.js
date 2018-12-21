/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ActivationStrategy} from "./Strategies/ActivationStrategy";
import {Scope} from "./Scopes/Scope";

const _service = new WeakMap();
const _strategy = new WeakMap();
const _scope = new WeakMap();

/**
 * Represents a binding for a specific service
 */
export class Binding
{
    /**
     * Initializes a new instance of {Binding}
     * 
     * @constructor
     * @param {function} service The service to bind
     * @param {strategy} strategy The strategy to use for binding
     * @param {scope} scope The scope in which the binding lives - controls the lifecycle
     */
    constructor(service, strategy, scope) {
        _service.set(this, service);
        _strategy.set(this, strategy);
        _scope.set(this, scope);
    }
    
    /**
     * Get the service
     * 
     * @property
     * @return {function}
     */
    get service() {
        return _service.get(this);
    }
    
    /**
     * Get the strategy used
     * 
     * @property
     * @return {ActivationStrategy}
     */
    get strategy() {
        return _strategy.get(this);        
    }
    
    /**
     * Get the scope for the {Binding}
     * 
     * @property
     * @return {Scope}
     */
    get scope() {
        return _scope.get(this);
    }

    /**
     * Set the scope for the {Binding}
     * 
     * @property {Scope}
     */
    set scope(scope) {
        _scope.set(this, scope);
    }
}