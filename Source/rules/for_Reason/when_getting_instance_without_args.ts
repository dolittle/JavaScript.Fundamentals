// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reason } from '../index';

describe('when getting instance without args', () => {
    const id = 'f1bbfeb4-de16-4a4a-8733-0b1402b1476a';
    const title = 'Some title';
    const description = 'Some description';
    const first_argument = "Forty two";
    const second_argument = 42;

    let reason = Reason.create(id, title, description);

    let cause = reason.noArguments();

    it('should return a cause', () => cause.should.not.be.undefined);
    it('should hove no arguments', () => cause.arguments.values.length.should.equal(0));
    it('should hold the title in the cause', () => cause.title.should.equal(title));
    it('should hold the description in the cause', () => cause.description.should.equal(description));
});