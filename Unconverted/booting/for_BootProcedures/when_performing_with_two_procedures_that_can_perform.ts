// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { BootProcedures } from '../BootProcedures';
import { BootProcedure } from '../BootProcedure';

describe('when performing with two procedures that can perform', () => {
    let procedures = null;
    let first_procedure = null;
    let second_procedure = null;


    beforeEach(() => {
        procedures = new BootProcedures();

        first_procedure = new BootProcedure();
        first_procedure.canPerform = () => true;
        first_procedure.perform = sinon.stub();
        procedures.add(first_procedure);

        second_procedure = new BootProcedure();
        second_procedure.canPerform = () => true;
        second_procedure.perform = sinon.stub();
        procedures.add(second_procedure);

        (becauseOf => {
            procedures.perform();
        })();
    })

    it('should call perform on first procedure', () => first_procedure.perform.called.should.be.true);
    it('should call perform on second procedure', () => first_procedure.perform.called.should.be.true);
});