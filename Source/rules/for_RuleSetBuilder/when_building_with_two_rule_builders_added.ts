// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleBuilder, RuleSetBuilder } from '../index';
import sinon from 'sinon';

describe('when building with two rule builders added', () => {
    let builder = new RuleSetBuilder();
    let firstRuleWithSubjectProvider = {};
    let secondRuleWithSubjectProvider = {};

    let firstRuleBuilder = {
        build: sinon.stub().returns(firstRuleWithSubjectProvider)
    };
    
    let secondRuleBuilder = {
        build: sinon.stub().returns(secondRuleWithSubjectProvider)
    };

    builder.addRuleBuilder(<RuleBuilder><any>firstRuleBuilder);
    builder.addRuleBuilder(<RuleBuilder><any>secondRuleBuilder);

    let ruleSet = builder.build();

    it('should call build on first rule builder', () => firstRuleBuilder.build.calledOnce);
    it('should call build on first rule builder', () => secondRuleBuilder.build.calledOnce);
    it('should pass first rule with subject provider to rule set', () => ruleSet.rules[0].should.equal(firstRuleWithSubjectProvider));
    it('should pass second rule with subject provider to rule set', () => ruleSet.rules[1].should.equal(secondRuleWithSubjectProvider));
});