/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { a_custom_exception } from './given/a_custom_exception';
import { Exception } from '../';
import { expect } from 'chai';

describe('when throwing a custom exception', () => {
    const message = 'message';
    let exception: Exception;
    try {
        throw new a_custom_exception(message);
    } catch (error) {
        exception = error;
    }
    it('should throw an exception', () => expect(exception).to.not.be.null);
    it('should be an instance of Error', () => exception.should.be.instanceof(Error));
    it('should be an instance of Exception', () => exception.should.be.instanceof(a_custom_exception));
    it('should have the correct name', () => exception.name.should.equal(a_custom_exception.name));
    it('should have the correct message', () => exception.message.should.equal(message));
});
