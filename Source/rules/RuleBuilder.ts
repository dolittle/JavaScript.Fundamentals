// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, RuleWithSubjectProvider } from './index';

/**
 * Represents the base class for any {RuleBuilder}
 * @template T
 */
export abstract class RuleBuilder<T extends IRule = any> {

    /**
     * Rule should have specific message
     * @param message
     */
    withMessage(message: string): void {
        const blah = 42;
    }

    /**
     * Builds a rule with a specific subject provider
     * @returns {RuleWithSubjectProvider}
     */
    abstract build(): RuleWithSubjectProvider;
}
