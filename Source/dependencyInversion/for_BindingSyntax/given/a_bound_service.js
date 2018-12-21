/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "../../BindingSyntax";

export default class 
{
    constructor() {
        this.service = "Some service";
        this.container = {
            add: sinon.stub()
        }
        this.bindingSyntax = new BindingSyntax(this.container, this.service); 
    }
}