// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { number_concept } from './given/number_concept';
import { string_concept } from './given/string_concept';
import { some_concept, some_base } from './given/some_concept';
import { isConceptAs, ConceptAs } from '../index';

describe('when creating concept as something', () => {
    const value = new some_base('x', 42);
    const concept = new some_concept(value);
    it('should have the correct value', () => concept.value.should.equal(value));
    it('should equal to another concept with the same something', () => concept.equals(new some_concept(value)).should.be.true);
    it('should not equal to another concept with another something', () => concept.equals(new some_concept(new some_base('some other value', 1))).should.be.false);
    it('should not equal to another concept as a string', () => concept.equals(new number_concept(2) as any).should.be.false);
    it('should not equal to another concept as number', () => concept.equals(new number_concept(2) as any).should.be.false);
    it('should be a concept', () => isConceptAs(concept).should.be.true);
});
