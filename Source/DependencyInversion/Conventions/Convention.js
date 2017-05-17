/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Defines the basis for a {Convention}
 */
export class Convention
{
    /**
     * Determines wether or not the convention can resolve the service
     * @param {container} Container the convention will resolve relative to
     * @param {service} Service that needs to be resolved
     */
    canResolve(container, service) {
        return false;
    }

    /**
     * Resolves the service into the container by setting up the proper binding for it 
     * @param {container} Container the convention will resolve relative to
     * @param {service} Service that needs to be resolved
     */
    resolve(container, service) {

    }
}