// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs } from '../../ConceptAs';

describe('when creating concept from boolean', () => {
    const value = false;
    const concept = ConceptAs.fromBoolean(value, '');

    it('should be a concept', () => ConceptAs.isConcept(concept).should.be.true);
    it('should have the same value', () => concept.value.should.equal(value));
    it('should equal to itself', () => concept.should.equal(concept));
    it('should equal to the same concept from boolean with the same value', () => concept.equals(ConceptAs.fromBoolean(value, '')).should.be.true);
    it('should not equal to the same concept from boolean with another value', () => concept.equals(ConceptAs.fromBoolean(true, '')).should.not.be.true);
    it('should not equal to another concept from boolean with the same value', () => concept.equals(ConceptAs.fromBoolean(value, 'another')).should.not.be.true);
    it('should not equal to another concept from boolean with another value', () => concept.equals(ConceptAs.fromBoolean(true, 'another')).should.not.be.true);
});