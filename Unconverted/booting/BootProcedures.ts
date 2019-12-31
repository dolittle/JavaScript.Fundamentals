// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootProcedure } from './BootProcedure';

/**
 * Represents a system that can run through all registered {BootProcedure}
 */
export class BootProcedures {
    private _procedures: BootProcedure[] = [];

    /**
     * Perform all the {BootProcedure} 
     */
    perform() {
        let procedures: BootProcedure[] = [];

        this._procedures.forEach(procedure => procedures.push(procedure));
        do {
            let procedure = procedures.shift();
            if (procedure) {
                if (procedure.canPerform()) {
                    procedure.perform();
                } else {
                    procedures.push(procedure);
                }
            }
        } while (procedures.length > 0);
    }

    /**
     * Get all the procedures
     * @returns {BootProcedure[]}
     */
    get all(): BootProcedure[] {
        return this._procedures;
    }


    /**
     * Add a {BootProcedure} to the boot
     * @param {BootProcedure} bootProcedure 
     */
    add(bootProcedure: BootProcedure) {
        this._procedures.push(bootProcedure);
    }
}