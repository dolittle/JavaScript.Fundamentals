// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext } from './index';

/**
 * Defines a provider of subject used during evaluation of rules.
 */
export interface ISubjectProvider {

    /**
     * Provide a the subject in a given context.
     * @param {IRuleContext} ruleContext - The context in which to provide the subject for.
     * @returns {*}
     */
    provide(ruleContext: IRuleContext): any;
}
