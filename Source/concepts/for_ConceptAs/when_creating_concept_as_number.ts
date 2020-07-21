// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { number_concept } from './given/number_concept';
import { some_base } from './given/some_concept';
import { ConceptAs } from '../index';


describe('when creating concept as number', () => {
    const value = 2;
    const concept: number_concept = ConceptAs.fromNumber(value);

    it('should have the correct value', () => concept.value.should.equal(value));
    it('should equal the value', () => concept.equals(value).should.be.true);
    it('should equal itself', () => concept.equals(concept).should.be.true);
    it('should not equal to another concept with the same number', () => concept.equals(ConceptAs.fromNumber(value)).should.be.false);
    it('should not equal to another concept with another number', () => concept.equals(ConceptAs.fromNumber(42)).should.be.false);
    it('should not equal to another concept as a string', () => concept.equals(ConceptAs.fromString('string') as any).should.be.false);
    it('should not equal to another concept as something else', () => concept.equals(ConceptAs.from(new some_base('s', 2)) as any).should.be.false);
    it('should be a concept', () => ConceptAs.isConcept(concept).should.be.true);
});