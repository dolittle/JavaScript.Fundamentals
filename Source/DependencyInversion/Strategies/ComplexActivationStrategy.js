/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ActivationStrategy} from "./ActivationStrategy";
import {Dependencies} from "../Dependencies";

const _dependencies = new Dependencies();

/**
 * Represents an activation strategy that is capable of resolving dependencies for a type
 * and then inject this into the types constructor during creation
 */
export class ComplexActivationStrategy extends ActivationStrategy 
{
    constructor(container) {
        super();
        this.container = container;
    }

    activate(activationContext, binding) {
        let dependencies = _dependencies.getFrom(binding.target);
        let dependencyInstances = [];
        let container = this.container;
        let dependencyCount = 0;
        
        var promise = new Promise((resolve, reject) => {
            dependencies.forEach((dependency, dependencyIndex) => {
                container.get(dependency).then(instance => {
                    dependencyInstances[dependencyIndex] = instance;
                    dependencyCount++;

                    if( dependencyCount == dependencies.length ) {
                        let args = [null].concat(dependencyInstances);
                        var type = binding.target.bind.apply(binding.target, args);
                        var typeInstance = new type();
                        resolve(typeInstance);
                    }
                });
            });
        });
        return promise;
    }
}