// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { string_concept } from '../given/string_concept';
import { ConceptAs, conceptFrom } from '../../index';

class another_string extends ConceptAs<string, 'another_string'> {
    constructor(num: string) {
        super(num, 'another_string');
    }
}
describe('when creating concept as string', () => {
    const value = 'value';
    const concept = new string_concept(value);

    it('should be a concept', () => ConceptAs.isConcept(concept).should.be.true);
    it('should have the correct value', () => concept.value.should.equal(value));
    it('should equal value', () => concept.equals(value).should.be.true);
    it('should equal itself', () => concept.equals(concept).should.be.true);
    it('should equal the same concept with the same value', () => concept.equals(conceptFrom(string_concept, value)).should.be.true);
    it('should not equal the same concept with another value', () => concept.equals(conceptFrom(string_concept, 'some other value')).should.be.false);
    it('should not equal to another concept with the same number', () => concept.equals(conceptFrom(another_string, value)).should.be.false);
    it('should not equal to another concept with another string', () => concept.equals(conceptFrom(another_string,'some other value')).should.be.false);
});