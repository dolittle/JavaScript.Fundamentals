// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootBuilder } from '../../BootBuilder';
import { BootProceduresSettings } from './BootProceduresSettings';
import { BootProcedures } from '../../BootProcedures';

/**
 * Configure {BootProcedures}
 */
BootBuilder.prototype.bootProcedures = (callback) => {
    let settings = this.getBootStageSettings(BootProceduresSettings);
    callback(settings);
};