// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents something that should be called during booting
 */
export class BootProcedure {

    /**
      * Method that gets called to check if boot procedure can be performed
      * If it can't be performed it's usually because of something not being
      * ready and the system should then queue it for later.
      */
    canPerform() {
        return false;
    }

    /**
     * Method that gets called during booting of an application
     */
    perform() {

    }
}