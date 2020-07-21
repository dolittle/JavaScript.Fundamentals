// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs } from '../../ConceptAs';

describe('when creating concept from string', () => {
    const value = 'string';
    const concept = ConceptAs.fromString(value, '');

    it('should be a concept', () => ConceptAs.isConcept(concept).should.be.true);
    it('should have the same value', () => concept.value.should.equal(value));
    it('should equal to itself', () => concept.should.equal(concept));
    it('should equal to the same concept from string with the same value', () => concept.equals(ConceptAs.fromString(value, '')).should.be.true);
    it('should not equal to the same concept from string with another value', () => concept.equals(ConceptAs.fromString('another value', '')).should.not.be.true);
    it('should not equal to another concept from string with the same value', () => concept.equals(ConceptAs.fromString(value, 'another')).should.not.be.true);
    it('should not equal to another concept from string with another value', () => concept.equals(ConceptAs.fromString('another value', 'another')).should.not.be.true);
});