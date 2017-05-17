/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Conventions} from "/Source/DependencyInversion/Conventions/Conventions";
import * as Context from "./given/a_convention_that_can_resolve_anything";

describe("when resolving and a convention can resolve", () => {
    let context = null;

    beforeEach(() => {
        context = new Context.default();

        (becauseOf => {
            context.conventions.resolve({}, "something");
        })();
    });

    it("should call resolve on convention", () => context.convention.resolve.called.should.be.true);
});