// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleBuilder, RuleWithSubjectProvider } from './index';

/**
 * Represents the base class for a {IRuleBuilder}
 * @template T 
 */
export abstract class RuleBuilder<T extends IRule = any> implements IRuleBuilder<T> {

    /**
     * Rule should have specific message
     * @param message 
     */
    withMessage(message: string): void {
    }

    /**
     * Builds a rule with a specific subject provider
     * @returns {RuleWithSubjectProvider}
     */
    abstract build(): RuleWithSubjectProvider;
}