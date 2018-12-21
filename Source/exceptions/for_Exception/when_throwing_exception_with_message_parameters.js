/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Exception} from '../Exception';

class MyException extends Exception
{
    constructor(first, second) {
        super(`${first} - ${second}`);
        this.first = first;
        this.second = second;
    }
}

describe('when throwing exception with message parameters', () => {
    let result = null;

    try { MyException.throw('something','wrong'); } catch(e) { result = e }

    it('should be of the specific exception type', () => result.should.be.instanceof(MyException));
    it('should have the expected message', () => result.message.should.equal('something - wrong'));
});