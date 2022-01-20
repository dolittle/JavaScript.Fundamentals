// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule } from './IRule';
import { ISubjectProvider } from './ISubjectProvider';

/**
 * Represents a {@link IRule} with a {@link ISubjectProvider}.
 */
export class RuleWithSubjectProvider {

    /**
     * Initializes a new instance of the {@link RuleWithSubjectProvider} class.
     * @param {IRule} _rule - The rule.
     * @param {ISubjectProvider} _subjectProvider - The subject provider.
     */
    constructor(private readonly _rule: IRule, private readonly _subjectProvider: ISubjectProvider) {
    }

    /**
     * Gets the rule.
     */
    get rule(): IRule {
        return this._rule;
    }

    /**
     * Gets the subject provider.
     */
    get subjectProvider(): ISubjectProvider {
        return this._subjectProvider;
    }
}
