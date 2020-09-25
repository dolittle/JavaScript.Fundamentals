// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { string_concept } from '../given/string_concept';
import { some_base } from '../given/some_concept';
import { ConceptAs } from '../../ConceptAs';

describe('when creating concept as string', () => {
    const value = 'value';
    const concept = new string_concept(value);

    it('should be a concept', () => ConceptAs.isConcept(concept).should.be.true);
    it('should have the correct value', () => concept.value.should.equal(value));
    it('should equal value', () => concept.equals(value).should.be.true);
    it('should equal itself', () => concept.equals(concept).should.be.true);
    it('should equal the same concept with the same value', () => concept.equals(new string_concept(value)).should.be.true);
    it('should not equal the same concept with another value', () => concept.equals(new string_concept('some other value')).should.be.false);
    it('should not equal to another concept with the same number', () => concept.equals(ConceptAs.fromString(value, '')).should.be.false);
    it('should not equal to another concept with another string', () => concept.equals(ConceptAs.fromString('some other value', '')).should.be.false);
});