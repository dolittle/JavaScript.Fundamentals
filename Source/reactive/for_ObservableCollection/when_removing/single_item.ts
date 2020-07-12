// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObservableCollection } from '../../ObservableCollection';

describe('single item', () => {
    const collection = new ObservableCollection<number>();
    let result: Array<number>;
    let all: Array<number>;
    collection.removed.subscribe((items: Array<number>) => result = items);
    collection.subscribe((items: Array<number>) => all = items);
    collection.push(42);
    const numberOfItems = collection.remove(42);

    it('should be empty', () => collection.length.should.equal(0));
    it('should forward item to removed subscriber', () => result.should.have.members([42]));
    it('should return correct number of items after remove', () => numberOfItems.should.equal(0));
    it('should forward to all subscriber and be empty', () => all.should.be.empty);
});
