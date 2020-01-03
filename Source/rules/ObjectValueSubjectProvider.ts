// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext, ISubjectProvider } from './index';

/**
 * Represents an implementation of {ISubjectProvider} for providing values from an owning object from the {IRuleContext}.
 */
export class ObjectValueSubjectProvider implements ISubjectProvider {

    /**
     * Creates an instance of object value subject provider.
     * @param {string} _key - Key representing the value / property in the object.
     */
    constructor(private _key: string) {
    }

    /** @inheritdoc */
    provide(ruleContext: IRuleContext) {
        return {};
    }
}
