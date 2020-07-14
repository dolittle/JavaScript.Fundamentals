// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { expect } from 'chai';
import { Exception } from '../Exception';

describe('when throwing an exception', () => {
    const message = 'message';
    let exception: Exception;

    try {
        throw new Exception(message);
    } catch (error) {
        exception = error;
    }
    it('should throw an exception', () => expect(exception).to.not.be.null);
    it('should throw an error that is an instance of Exception', () => exception.should.be.instanceof(Exception));
    it('should have the correct name', () => exception.name.should.equal(Exception.name));
    it('should have the correct message', () => exception.message.should.equal(message));
});
