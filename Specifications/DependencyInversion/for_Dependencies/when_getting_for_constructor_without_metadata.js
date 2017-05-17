/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from "./given/a_dependencies_instance";

class SomeClass
{
    constructor(first,second) {

    }
}

describe("when getting for constructor without metadata", () => {
    let context = null;
    let constructorDependencies = null;

    beforeEach(() => {
        context = new Context.default();

        (becauseOf => {
            constructorDependencies = context.dependencies.getFrom(SomeClass);
        })();
    });

    it("should have the first dependency as the first element", () => constructorDependencies[0].should.equal("first"));
    it("should have the second dependency as the second element", () => constructorDependencies[1].should.equal("second"));
});