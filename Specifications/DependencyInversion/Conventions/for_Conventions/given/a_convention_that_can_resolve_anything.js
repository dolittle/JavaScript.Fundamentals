/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Convention} from "/Source/DependencyInversion/Conventions/Convention";
import {Conventions} from "/Source/DependencyInversion/Conventions/Conventions";

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