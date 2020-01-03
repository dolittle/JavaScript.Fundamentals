// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, ISubjectProvider } from './index';

/**
 * Represents a {IRule} with a {ISubjectProvider}
 */
export class RuleWithSubjectProvider {

    /**
     * Initializes a new instance of the {RuleWithSubjectProvider} class.
     * @param {IRule} rule - The rule
     * @param subjectProvider 
     */
    constructor(private _rule: IRule, private _subjectProvider: ISubjectProvider) {
    }

    /**
     * Gets the rule
     * @returns {IRule}
     */
    get rule(): IRule {
        return this._rule;
    }

    /**
     * Gets the subject provider
     * @returns {ISubjectProvider}
     */
    get subjectProvider(): ISubjectProvider {
        return this._subjectProvider;
    }
}
