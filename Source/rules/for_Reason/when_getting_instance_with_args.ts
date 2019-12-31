// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reason } from '../index';

describe('when getting instance with args', () => {
    const id = 'f1bbfeb4-de16-4a4a-8733-0b1402b1476a';
    const title = 'Some title';
    const description = 'Some description';
    const first_argument = "Forty two";
    const second_argument = 42;

    let reason = Reason.create(id, title, description);

    let args = { FirstArgument: first_argument, SecondArgument: second_argument};

    let cause = reason.withArguments(args);

    it('should return a cause', () => cause.should.not.be.undefined);
    it('should hold the first argument in the cause', () => cause.arguments['FirstArgument'].should.equal(first_argument));
    it('should hold the second argument in the cause', () => cause.arguments['SecondArgument'].should.equal(second_argument));
    it('should hold the title in the cause', () => cause.title.should.equal(title));
    it('should hold the description in the cause', () => cause.description.should.equal(description));
});