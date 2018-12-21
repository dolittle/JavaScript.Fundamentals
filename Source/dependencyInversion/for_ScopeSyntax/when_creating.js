/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ScopeSyntax} from "../ScopeSyntax";

describe("when creating", () => {
    const bindingSyntax = "Binding Syntax";
    let scopeSyntax = null;

    beforeEach(() => {
        (becauseOf => scopeSyntax = new ScopeSyntax(bindingSyntax))()
    });

    it("should have the binding syntax on it", () => scopeSyntax.bindingSyntax.should.equal(bindingSyntax));
});