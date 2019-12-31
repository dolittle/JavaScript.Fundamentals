// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, Cause } from './index';

export class BrokenRule {
    private _rule:IRule;
    private _instance:any;
    private _context:IRuleContext;
    private _causes:ReadonlyArray<Cause>

    constructor(rule: IRule, instance: any, context: IRuleContext, causes: Array<Cause>) {
        this._rule = rule;
        this._instance = instance;
        this._context = context;
        this._causes = causes;
    }
}