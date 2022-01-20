// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { Guid } from '@dolittle/rudiments';

import { is_number_concept, number_concept } from '../given/number_concept';
import { some_base, some_concept } from '../given/some_concept';
import { string_concept } from '../given/string_concept';

describeThis(__filename, () => {
    it('should be true for a number concept', () => is_number_concept(new number_concept(13)).should.be.true);
    it('should be false for a number', () => is_number_concept(13).should.be.false);
    it('should be false for a string concept', () => is_number_concept(new string_concept('13')).should.be.false);
    it('should be false for a string', () => is_number_concept('13').should.be.false);
    it('should be false for some concept', () => is_number_concept(new some_concept(new some_base('13', 13))).should.be.false);
    it('should be false for some base', () => is_number_concept(new some_base('13', 13)).should.be.false);
    it('should be false for a Guid', () => is_number_concept(Guid.empty).should.be.false);
    it('should be false for a class', () => is_number_concept(some_base).should.be.false);
    it('should be false for an object', () => is_number_concept({}).should.be.false);
    it('should be false for null', () => is_number_concept(null).should.be.false);
    it('should be false for undefined', () => is_number_concept(undefined).should.be.false);
});
