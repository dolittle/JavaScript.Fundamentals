// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleSetContainerBuilder, IRuleSetBuilder, RuleSet, RuleSetContainer } from './index';

/**
 * Represents an implementation of {IRuleSetContainerBuilder}
 */
export class RuleSetContainerBuilder implements IRuleSetContainerBuilder {
    _ruleSets: Array<IRuleSetBuilder> = [];

    /** @inheritdoc */
    addRuleSetBuilder(ruleSetBuilder: IRuleSetBuilder): void {
        this._ruleSets.push(ruleSetBuilder);
    }

    /** @inheritdoc */
    build(): RuleSetContainer {
        let ruleSets: RuleSet[] = [];
        this._ruleSets.forEach(_ => ruleSets.push(_.build()));
        return new RuleSetContainer(...ruleSets);
    }
}
