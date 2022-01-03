// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { describeThis } from '@dolittle/typescript.testing';

import { number_concept } from '../given/number_concept';
import { some_base, some_concept } from '../given/some_concept';
import { string_concept } from '../given/string_concept';

describeThis(__filename, () => {
    const origin = new string_concept('✅');

    it('should be equal to itself', () => origin.equals(origin).should.be.true);
    it('should be equal to another string concept with the same value', () => origin.equals(new string_concept('✅')).should.be.true);
    it('should not be equal to another string concept with a different value', () => origin.equals(new string_concept('❌')).should.be.false);
    it('should be equal to a string with the same value', () => origin.equals('✅').should.be.true);
    it('should not be equal to a string with a different value', () => origin.equals('❌').should.be.false);
    it('should not be equal to a number concept', () => origin.equals(new number_concept(1729)).should.be.false);
    it('should not be equal to a number', () => origin.equals(1729).should.be.false);
    it('should not be equal to some concept', () => origin.equals(new some_concept(new some_base('a', 1))).should.be.false);
    it('should not be equal to some object', () => origin.equals({}).should.be.false);
    it('should not be equal to null', () => origin.equals(null).should.be.false);
    it('should not be equal to undefined', () => origin.equals(undefined).should.be.false);
});
