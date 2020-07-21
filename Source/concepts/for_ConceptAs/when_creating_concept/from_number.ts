// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs } from '../../ConceptAs';

describe('when creating concept from number', () => {
    const value = 2;
    const concept = ConceptAs.fromNumber(value, '');

    it('should be a concept', () => ConceptAs.isConcept(concept).should.be.true);
    it('should have the same value', () => concept.value.should.equal(value));
    it('should equal to itself', () => concept.should.equal(concept));
    it('should equal to the same concept from number with the same value', () => concept.equals(ConceptAs.fromNumber(value, '')).should.be.true);
    it('should not equal to the same concept from number with another value', () => concept.equals(ConceptAs.fromNumber(5, '')).should.not.be.true);
    it('should not equal to another concept from number with the same value', () => concept.equals(ConceptAs.fromNumber(value, 'another')).should.not.be.true);
    it('should not equal to another concept from number with another value', () => concept.equals(ConceptAs.fromNumber(5, 'another')).should.not.be.true);
});