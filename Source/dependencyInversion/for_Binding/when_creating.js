/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Binding} from "/Source/DependencyInversion/Binding";

describe("when creating", () => {
    const service = "My Service";
    const strategy = "My Strategy";
    const scope = "My Scope";
    
    let binding = new Binding(service, strategy, scope);
    
    it("should set the service on the binding", () => binding.service.should.equal(service));
    it("should set the strategy on the binding", () => binding.strategy.should.equal(strategy));
    it("should set the scope on the binding", () => binding.scope.should.equal(scope));
});