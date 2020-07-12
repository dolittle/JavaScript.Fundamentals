// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObservableCollection } from '../../ObservableCollection';

describe('single item', () => {
    const collection = new ObservableCollection<number>();
    let result: Array<number>;
    let all: Array<number>;
    collection.added.subscribe((items: Array<number>) => result = items);
    collection.subscribe((items: Array<number>) => all = items);
    const numberOfItems = collection.push(42);

    it('should have length of one', () => collection.length.should.equal(1));
    it('should have the item as the first item', () => collection.item(0).should.equal(42));
    it('should forward item to added subscriber', () => result.should.have.members([42]));
    it('should return correct number of items', () => numberOfItems.should.equal(1));
    it('should forward to all subscriber', () => all.should.have.members([42]));
});
