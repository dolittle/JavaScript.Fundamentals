// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, RuleWithSubjectProvider} from './index';

/**
 * Defines the builder for a {IRule}.
 * @template T 
 */
export interface IRuleBuilder<T extends IRule = any> {
    withMessage(message: string): void;

    build(): RuleWithSubjectProvider;
}