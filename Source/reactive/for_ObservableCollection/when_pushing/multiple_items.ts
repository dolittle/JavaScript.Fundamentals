// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObservableCollection } from '../../ObservableCollection';

describe('multiple items', () => {
    const collection = new ObservableCollection<number>();
    let result: Array<number>;
    let all: Array<number>;
    collection.added.subscribe((items: Array<number>) => result = items);
    collection.subscribe((items: Array<number>) => all = items);
    const numberOfItems = collection.push(42,43,44);

    it('should have length of three', () => collection.length.should.equal(3));
    it('should have the expected first item', () => collection.item(0).should.equal(42));
    it('should have the expected second item', () => collection.item(1).should.equal(43));
    it('should have the expected third item', () => collection.item(2).should.equal(44));
    it('should forward item to added subscriber', () => result.should.have.members([42,43,44]));
    it('should return correct number of items', () => numberOfItems.should.equal(3));
    it('should forward to all subscriber', () => all.should.have.members([42,43,44]));
});
