// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

 /**
  * Defines the different stages of booting
  */
 export enum BootStage {

    /**
     * Unknown stage - is not allowed
     */
    Unknown = 0,

    /**
     * Basics stage - fixed
     * This stage is defined by the system and can't be swapped out.
     */
    Basics,

    /**
     * Logging stage - fixed
     * This stage is defined by the system and can't be swapped out.
     */
    Logging,

    /**
     * Initial system stage - fixed
     * This stage is defined by the system and can't be swapped out.
     */
    InitalSystem,

    /**
     * Discovery stage - fixed
     * This stage is defined by the system and can't be swapped out.
     */
    Discovery,

    /**
     * Prepare for regular booting
     */
    PrepareBoot,

    /**
     * Configuration is hooked up
     */
    Configuration,

    /**
     * The IoC container gets hooked up
     */
    Container,

    /**
     * Running of boot procedures
     */
    BootProcedures
}