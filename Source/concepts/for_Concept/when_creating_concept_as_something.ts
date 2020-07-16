// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { some_concept, some_base } from './given/some_concept';
import { Concept } from '../index';

describe('when creating concept as something', () => {
    const value = new some_base('x', 42);
    const concept: some_concept = Concept.from(value);

    it('should have the correct value', () => concept.value.should.equal(value));
    it('should equal the value', () => concept.equals(value).should.be.true);
    it('should equal itself', () => concept.equals(concept).should.be.true);
    it('should not equal to another concept with the same something', () => concept.equals(Concept.from(value)).should.be.false);
    it('should not equal to another concept with another something', () => concept.equals(Concept.from(new some_base('some other value', 1))).should.be.false);
    it('should not equal to another concept as a string', () => concept.equals(Concept.fromString('string') as any).should.be.false);
    it('should not equal to another concept as number', () => concept.equals(Concept.fromNumber(2) as any).should.be.false);
    it('should be a concept', () => Concept.isConcept(concept).should.be.true);
});
