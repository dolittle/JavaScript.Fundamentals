// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Serializer } from '../index';

describe('when deserializing from json', () => {
    const serializer = new Serializer();
    const someNumber = 2;
    const someString = 'string';
    const someObject = { property: 2 };
    const json = `
    {
        "someNumber": 2,
        "someString": "string",
        "someObject": { "property": 2 }
    }`;
    const result = serializer.fromJSON(json);
    it('should have someNumber', () => result.someNumber.should.equal(someNumber));
    it('should have someString', () => result.someString.should.equal(someString));
    it('should have someObject', () => result.someObject.property.should.equal(someObject.property));
});
