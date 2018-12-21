/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ScopeSyntax} from './ScopeSyntax';
import {ConstantActivationStrategy} from './Strategies/ConstantActivationStrategy';
import {TypeActivationStrategy} from './Strategies/TypeActivationStrategy';
import {CallbackActivationStrategy} from './Strategies/CallbackActivationStrategy';
import {TransientScope} from './Scopes/TransientScope';
import {Binding} from './Binding';
import {BindingTargetIsNotBasedOnFunction} from './BindingTargetIsNotBasedOnFunction';

const _container = new WeakMap();
const _service = new WeakMap();
const _strategy = new WeakMap();
const _scopeSyntax = new WeakMap();

const _transientScope = new TransientScope();

const handleStrategyAndScope = function (strategy) {
    var binding = new Binding(this.service, strategy, _transientScope);
    this.container.add(binding);

    _strategy.set(this, strategy);

    var scopeSyntax = new ScopeSyntax();
    _scopeSyntax.set(this, scopeSyntax);
    return scopeSyntax;
}

function throwIfNotFunction(type) {
    if( typeof type !== 'function') BindingTargetIsNotBasedOnFunction.throw(type); 
}

/**
 * Represents the syntax for defining a {Binding} in the container 
 */
export class BindingSyntax {
    
    /**
     * Initializes a new instance of {BindingSyntax}
     * @constructor
     * @param {Object} service Representation of the service - often the name of service in string form 
     */
    constructor(container, service) {
        _container.set(this, container);
        _service.set(this, service);
    }

    /**
     * Get the container in which the {BindingSyntax} is for
     * @property {Container}
     */
    get container() {
        return _container.get(this);
    }

    /**
     * Get the service for the binding
     * @property {Object}
     */
    get service() {
        return _service.get(this);
    }

    /**
     * Get the {ActivationStrategy} for the binding
     * @property {ActivationStrategy}
     */
    get strategy() {
        return _strategy.get(this);
    }

    /**
     * Get the {ScopeSyntax} for the binding for defining the scope
     * @property {ScopeSyntax}
     */
    get scopeSyntax() {
        return _scopeSyntax.get(this);
    }

    /**
     * Bind to a constant
     * @param {Object} constant A constant the service is bound to
     */
    toConstant(constant) {
        let strategy = new ConstantActivationStrategy()
        let scopeSyntax = handleStrategyAndScope.call(this, strategy);
        return scopeSyntax;
    }

    /**
     * Bind to a type
     * @param {function} type A type the service is bound to
     */
    to(type) {
        throwIfNotFunction(type);
        var strategy = new TypeActivationStrategy()
        let scopeSyntax = handleStrategyAndScope.call(this, strategy);
        return scopeSyntax;
    }

    /**
     * Bind to a callback that will resolve the binding
     * @param {function} fn Function that will be called
     */
    toCallback(fn) {
        throwIfNotFunction(fn);
        var strategy = new CallbackActivationStrategy()
        let scopeSyntax = handleStrategyAndScope.call(this, strategy);
        return scopeSyntax;
    }
}