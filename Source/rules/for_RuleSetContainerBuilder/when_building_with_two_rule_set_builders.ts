// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetBuilder, RuleSetContainerBuilder } from '../index';
import sinon from 'sinon';

describe('when building with two rule set builders added', () => {
    let builder = new RuleSetContainerBuilder();
    let firstRuleSet = {};
    let secondRuleSet = {};

    let firstRuleSetBuilder = {
        build: sinon.stub().returns(firstRuleSet)
    };
    
    let secondRuleSetBuilder = {
        build: sinon.stub().returns(secondRuleSet)
    };

    builder.addRuleSetBuilder(<RuleSetBuilder><any>firstRuleSetBuilder);
    builder.addRuleSetBuilder(<RuleSetBuilder><any>secondRuleSetBuilder);

    let ruleSetContainer = builder.build();

    it('should call build on first rule builder', () => firstRuleSetBuilder.build.calledOnce);
    it('should call build on first rule builder', () => secondRuleSetBuilder.build.calledOnce);
    it('should pass first rule with subject provider to rule set', () => ruleSetContainer.ruleSets[0].should.equal(firstRuleSet));
    it('should pass second rule with subject provider to rule set', () => ruleSetContainer.ruleSets[1].should.equal(secondRuleSet));
});