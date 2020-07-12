// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObservableCollection } from '../../ObservableCollection';

describe('multiple items', () => {
    const collection = new ObservableCollection<number>();
    let result: Array<number>;
    let all: Array<number>;
    collection.removed.subscribe((items: Array<number>) => result = items);
    collection.subscribe((items: Array<number>) => all = items);
    collection.push(42,43,44,45);
    const numberOfItems = collection.remove(43,44);

    it('should have length of two', () => collection.length.should.equal(2));
    it('should have the expected first item', () => collection.item(0).should.equal(42));
    it('should have the expected second item', () => collection.item(1).should.equal(45));
    it('should forward removed items to removed subscriber', () => result.should.have.members([43,44]));
    it('should return correct number of items', () => numberOfItems.should.equal(2));
    it('should forward resulting collection to all subscriber', () => all.should.have.members([42,45]));
});
