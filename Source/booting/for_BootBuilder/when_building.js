/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootBuilder } from "../BootBuilder";
import { Boot } from "../Boot";


 describe('when building', () => {
    let result = null;

     beforeEach(() => {
         let builder = new BootBuilder();
         (becauseOf => {
             result = builder.build();
         })();
     })

     it('should return a boot instance', () => result.should.be.instanceof(Boot));
 });