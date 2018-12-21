/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "../BindingSyntax";
import * as Context from "./given/an_empty_container";

describe("when binding service", () => {
    const service = "Some service";

    let context = null;
    let result = null;

    beforeEach(() => {
        context = new Context.default();

        (function becauseOf() {
            result = context.container.bind(service);
        })();
    });

    it("should be returning a binding syntax", () => result.should.be.instanceof(BindingSyntax));
    it("should have passed the container to the binding syntax", () => result.container.should.equal(context.container));
    it("should have passed the service to the binding syntax", () => result.service.should.equal(service));
});
