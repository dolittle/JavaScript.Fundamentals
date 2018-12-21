/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Scope} from "./Scopes/Scope";
import {SingletonScope} from "./Scopes/SingletonScope";

const _singletonScope = new SingletonScope();
const _bindingSyntax = new WeakMap();

/**
 * Represents the syntax configuration for a {Scope}
 */
export class ScopeSyntax {

    /**
     * Initializes a new instance of {ScopeSyntax}
     */
    constructor(bindingSyntax) {
        _bindingSyntax.set(this, bindingSyntax);
    }

    /**
     * Gets the {BindingSyntax} the {ScopeSyntax} is associated with
     * 
     * @property {BindingSyntax}
     */
    get bindingSyntax() {
        return _bindingSyntax.get(this);
    }

    /**
     * Gets the scope
     * 
     * @property {Scope}
     */
    get scope() {
        return this.bindingSyntax.binding.scope;
    }

    /**
     * Sets the scope
     * 
     * @property {Scope}
     */
    set scope(scope) {
        this.bindingSyntax.binding.scope = scope;
    }

    /**
     * Define the scope to be a singleton
     */
    asSingleton() {
        this.as(_singletonScope);
    }

    /**
     * Define a specific scope as lifecycle
     * 
     * @param {Scope} scope The scope representing the lifecycle
     */
    as(scope) {
        this.scope = scope;
    }
}