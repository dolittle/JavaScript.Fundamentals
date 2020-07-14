// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { number_concept } from './given/number_concept';
import { string_concept } from './given/string_concept';
import { some_concept, some_base } from './given/some_concept';
import { isConcept, isConceptAs, ConceptAs } from '../index';

class some_class {}
describe('when creating concept as number', () => {
    const value = 2;
    const concept = new number_concept(value);

    it('should have the correct value', () => concept.value.should.equal(value));
    it('should equal the value', () => concept.equals(value).should.be.true);
    it('should equal to another concept with the same number', () => concept.equals(new number_concept(value)).should.be.true);
    it('should not equal to another concept with another number', () => concept.equals(new number_concept(42)).should.be.false);
    it('should not equal to another concept as a string', () => concept.equals(new string_concept('string') as any).should.be.false);
    it('should not equal to another concept as something else', () => concept.equals(new some_concept(new some_base('s', 2)) as any).should.be.false);
    it('should be a concept', () => isConcept(concept).should.be.true);
    it('should be a number concept', () => isConceptAs(concept, number_concept).should.be.true);
    it('should not be a string concept', () => isConceptAs(concept, string_concept).should.be.false);
    it('should not be some concept', () => isConceptAs(concept, some_concept).should.be.false);
});