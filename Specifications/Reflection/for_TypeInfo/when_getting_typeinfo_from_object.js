/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {TypeInfo} from "/Source/Reflection/TypeInfo";

describe("when getting typeinfo from object", () => {
    let obj = {};
    let typeInfo = null;

    beforeEach(() => {
        (becauseOf => {
            typeInfo = obj.typeInfo;
        })();
    });

    it("should return a typeinfo", () => typeInfo.should.not.be.undefined);
    it("should have object as name", () => typeInfo.name.should.equal("Object"));
})