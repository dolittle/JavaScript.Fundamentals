/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootProcedures } from '../BootProcedures';
import { BootProcedure } from '../BootProcedure';

describe('when performing with two procedures that can not perform before the second', () => {
    let procedures = null;
    let first_procedure = null;
    let second_procedure = null;
    let call_count = 0;
    let performers = [];
    

    beforeEach(() => {
        call_count = 0;

        procedures = new BootProcedures();

        first_procedure = new BootProcedure();
        first_procedure.canPerform = () => {
            let canPerform = call_count > 0;
            call_count++;
            return canPerform;
        };
        first_procedure.perform = () => {
            performers.push(0);
        };
        procedures.add(first_procedure);

        second_procedure = new BootProcedure();
        second_procedure.canPerform = () => true;
        second_procedure.perform = () => {
            performers.push(1);
        };
        procedures.add(second_procedure);

        (becauseOf => {
            procedures.perform();
        })();
    })

    it('should perform in correct order', () => performers.should.have.same.members([1,0]));
});