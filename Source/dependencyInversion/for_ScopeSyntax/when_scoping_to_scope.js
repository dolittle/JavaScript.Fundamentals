/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from "./given/an_undefined_scope";
import {Scope} from "../Scopes/Scope";

describe("when scoping to scope", () => {
    let scope = new Scope();
    let context = null;

    beforeEach(() => {
        context = new Context.default();
        (becauseOf => {
            context.scopeSyntax.as(scope);
        })();
    });

    it("should set it to be the given scope", () => context.scopeSyntax.scope.should.equal(scope));
});