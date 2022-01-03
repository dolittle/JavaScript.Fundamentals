// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { some_concept, some_base } from '../given/some_concept';
import { conceptFrom, isConcept } from '../../ConceptAs';

describe('when creating some concept with conceptFrom', () => {
    const value = new some_base('some_x', 42);
    const concept = conceptFrom(some_concept, value);

    it('should be a concept', () => isConcept(concept).should.be.true);
    it('should have the correct value', () => concept.value.should.equal(value));
    it('should equal the value', () => concept.equals(value).should.be.true);
    it('should equal itself', () => concept.equals(concept).should.be.true);
    it('should equal the same concept with the same value', () => concept.equals(new some_concept(value)).should.be.true);
    it('should not equal the same concept with another value', () => concept.equals(new some_concept(new some_base('some other value', 1))).should.be.false);
});
