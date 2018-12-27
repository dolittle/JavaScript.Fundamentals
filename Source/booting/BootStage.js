/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

 /**
  * Defines the different stages of booting
  */
 export const BootStage = {

    /**
     * Unknown stage - is not allowed
     */
    Unknown: 0,

    /**
     * Basics stage - fixed
     * This stage is defined by the system and can't be swapped out.
     */
    Basics: 1,

    /**
     * Logging stage - fixed
     * This stage is defined by the system and can't be swapped out.
     */
    Logging: 2,

    /**
     * Initial system stage - fixed
     * This stage is defined by the system and can't be swapped out.
     */
    InitalSystem: 3,

    /**
     * Discovery stage - fixed
     * This stage is defined by the system and can't be swapped out.
     */
    Discovery: 4,

    /**
     * Prepare for regular booting
     */
    PrepareBoot: 5,

    /**
     * Configuration is hooked up
     */
    Configuration: 6,

    /**
     * The IoC container gets hooked up
     */
    Container: 7,

    /**
     * Running of boot procedures
     */
    BootProcedures: 8
}