// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Extension } from '../Extension';
import { AClassWithANumber } from './given/AClassWithANumber';


class AClassExtensions {
    @Extension(AClassWithANumber)
    static add1(thisArg: AClassWithANumber) {
        return thisArg.aNumber + 1;
    }
}

declare module './given/AClassWithANumber' {
    // tslint:disable-next-line: interface-name
    interface AClassWithANumber {
        add1(): number;
    }
}

describe('when accessing property three levels down', () => {
    const aClass = new AClassWithANumber(1);

    it('should call extension method', () => aClass.add1().should.equal(2));
});
