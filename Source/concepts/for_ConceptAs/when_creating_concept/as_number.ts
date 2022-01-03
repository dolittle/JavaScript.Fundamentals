// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { number_concept } from '../given/number_concept';
import { ConceptAs, conceptFrom, isConcept } from '../../ConceptAs';

class another_number extends ConceptAs<number, 'another_number'> {
    constructor(num: number) {
        super(num, 'another_number');
    }
}
describe('when creating concept as number', () => {
    const value = 2;
    const concept = new number_concept(value);

    it('should be a concept', () => isConcept(concept).should.be.true);
    it('should have the correct value', () => concept.value.should.equal(value));
    it('should equal the value', () => concept.equals(value).should.be.true);
    it('should equal itself', () => concept.equals(concept).should.be.true);
    it('should equal the same concept with the same value', () => concept.equals(conceptFrom(number_concept, value)).should.be.true);
    it('should not equal the same concept with another value', () => concept.equals(conceptFrom(number_concept, 42)).should.be.false);
    it('should not equal to another concept with the same number', () => concept.equals(conceptFrom(another_number, value)).should.be.false);
    it('should not equal to another concept with another number', () => concept.equals(conceptFrom(another_number, 42)).should.be.false);
});
