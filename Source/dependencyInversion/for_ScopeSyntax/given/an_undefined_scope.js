/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ScopeSyntax} from "../../ScopeSyntax";
import {Scope} from "../../Scopes/Scope";

export default class 
{
    constructor() {
        let scope = new Scope();
        this.scope = scope;


        this.bindingSyntax = {
            container: {
                add: sinon.stub()
            },
            binding: {
                scope: scope
            },
            service: { "some": "service"},
            strategy: { "some": "strategy" },
        };
        this.scopeSyntax = new ScopeSyntax(this.bindingSyntax); 
    }
}