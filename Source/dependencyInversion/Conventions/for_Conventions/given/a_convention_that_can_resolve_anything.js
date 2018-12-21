/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Convention} from "../../Convention";
import {Conventions} from "../../Conventions";

class MyConvention extends Convention {
    
    constructor() {
        super();
        this.resolve = sinon.stub();
    }    

    canResolve(container, service) {
        return true;
    }
}

export default class {
    constructor() {
        this.convention = new MyConvention();
        this.conventions = new Conventions([this.convention]);
    }
}