// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reason } from '../index';

describe('when getting cause with args', () => {
    const id = '30613772-136c-4f8a-af31-920816933795';
    const title = 'Some title';
    const description = 'Some description';
    const first_argument = 'Forty two';
    const second_argument = 42;

    const reason = Reason.create(id, title, description);

    const args = { FirstArgument: first_argument, SecondArgument: second_argument};

    const cause = reason.withArguments(args);

    it('should return a cause', () => cause.should.not.be.undefined);
    it('should hold the first argument in the cause', () => cause.arguments.get('FirstArgument').should.equal(first_argument));
    it('should hold the second argument in the cause', () => cause.arguments.get('SecondArgument').should.equal(second_argument));
    it('should hold the title in the cause', () => cause.title.should.equal(title));
    it('should hold the description in the cause', () => cause.description.should.equal(description));
});
