// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reason, Cause } from '../index';

describe('when creating with two arguments and title and description_using them', () => {
    const answer = 'forty two';
    const question = 'what is the meaning of life';
    const title = 'The answer is {Answer}, the question is {Question}. Does that {Answer}?';
    const description = 'The long answer is {Answer} with the longer question is {Question}. Does that {Answer}?';
    const expected_title = `The answer is ${answer}, the question is ${question}. Does that ${answer}?`;
    const expected_description = `The long answer is ${answer} with the longer question is ${question}. Does that ${answer}?`;

    const reason = Reason.create('b384c649-efa3-40fd-826c-edd44f666ff4', title, description);

    let cause = reason.withArguments({ Answer: answer, Question: question});

    it('should have the correct interpolated title', () => cause.title.should.equal(expected_title));
    it('should have the correct interpolated description', () => cause.description.should.equal(expected_description));
    it('should the answer key and value', () => cause.arguments['Answer'].should.equal(answer));
    it('should the question key and value', () => cause.arguments['Question'].should.equal(question));
});