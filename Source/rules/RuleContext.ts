// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Cause, IRule, IRuleContext } from './index';

/**
 * Represents the implementation of {IRuleContext}
 */
export class RuleContext implements IRuleContext {
    private _target: any;

    /**
     * Initializes a new instance of the {RuleContext} class.
     * @param target 
     */
    constructor(target: any) {
        this._target = target;
    }

    /** @inheritdoc */
    get target(): any {
        return this._target;
    }

    /** @inheritdoc */
    fail(rule: IRule, instance: any, cause: Cause): void {
    }
}