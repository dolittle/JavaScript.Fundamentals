// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleBuilder, RuleSetBuilder } from '../index';
import sinon from 'sinon';

describe('when building with two rule builders added', () => {
    const builder = new RuleSetBuilder();
    const firstRuleWithSubjectProvider = {};
    const secondRuleWithSubjectProvider = {};

    const firstRuleBuilder = {
        build: sinon.stub().returns(firstRuleWithSubjectProvider)
    };

    const secondRuleBuilder = {
        build: sinon.stub().returns(secondRuleWithSubjectProvider)
    };

    builder.addRuleBuilder(firstRuleBuilder as unknown as RuleSetBuilder);
    builder.addRuleBuilder(secondRuleBuilder as unknown as RuleSetBuilder);

    const ruleSet = builder.build();

    it('should call build on first rule builder', () => firstRuleBuilder.build.calledOnce);
    it('should call build on first rule builder', () => secondRuleBuilder.build.calledOnce);
    it('should pass first rule with subject provider to rule set', () => ruleSet.rules[0].should.equal(firstRuleWithSubjectProvider));
    it('should pass second rule with subject provider to rule set', () => ruleSet.rules[1].should.equal(secondRuleWithSubjectProvider));
});
