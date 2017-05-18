/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from "./given/no_conventions";
import {Conventions} from "/Source/DependencyInversion/Conventions/Conventions";

describe("when asking if service can be resolved without any conventions", () => {
    let context = null;
    let result = null;

    beforeEach(() => {
        context = new Context.default();
        result = context.conventions.canResolve({}, "something");
    });

    it("should not be able to resolve", () => result.should.be.false);
});