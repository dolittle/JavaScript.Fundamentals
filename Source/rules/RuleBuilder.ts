// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule } from './IRule';
import { RuleWithSubjectProvider } from './RuleWithSubjectProvider';

/**
 * Represents the base class for any {@link RuleBuilder}.
 * @template T
 */
export abstract class RuleBuilder<T extends IRule = any> {

    /**
     * Rule should have specific message.
     * @param {string} message - The message.
     */
    withMessage(message: string): void {
        const blah = 42;
    }

    /**
     * Builds a rule with a specific subject provider.
     * @returns {RuleWithSubjectProvider}
     */
    abstract build(): RuleWithSubjectProvider;
}
