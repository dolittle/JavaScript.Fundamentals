// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { expect } from 'chai';

import { a_custom_exception } from './given/a_custom_exception';

describe('when throwing a custom exception', () => {
    const message = 'message';
    let exception: any;

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
