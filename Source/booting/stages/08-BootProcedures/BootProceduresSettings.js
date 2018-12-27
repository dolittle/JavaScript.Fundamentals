/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { InvalidBootProcedureType } from '../../InvalidBootProcedureType';

 /**
  * Represents the settings for boot procedures
  */
export class BootProceduresSettings {
  #procedures = [];

  /**
   * Get all {BootProcedure}
   */
  get procedures() {
    return this.#procedures;
  }

  /**
   * Add {BootProcedure}
   */
  addProcedure(procedure) {
    if( !(procedure instanceof BootProcedure)) InvalidBootProcedureType.throw(procedure);
    this.#procedures.push(procedure);
  }
}