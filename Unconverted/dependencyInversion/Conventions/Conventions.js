/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {NoConventionCanResolve} from './NoConventionCanResolve';

/**
 * Represents the manager that knows about conventions
 */
export class Conventions
{
    /**
     * Initializes a new instance of {Conventions}
     */
    constructor(allConventions) {
        this.conventions = allConventions;
    }

    /**
     * Determines wether or not any conventions can resolve a service
     * @param {container} Container the convention will resolve relative to
     * @param {service} Service that needs to be resolved
     */
    canResolve(container, service) {
        if( this.conventions.some(convention => convention.canResolve(container,service)) ) return true;
        return false;
    }

    /**
     * Resolves the service into the container by setting up the proper binding for it 
     * @param {container} Container the convention will resolve relative to
     * @param {service} Service that needs to be resolved
     */
    resolve(container, service) {
        let convention = this.conventions.find(c => c.canResolve(container,service));
        if( convention ) convention.resolve(container,service);
        else NoConventionCanResolve.throw();       
    }
}
