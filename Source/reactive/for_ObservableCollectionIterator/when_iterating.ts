// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObservableCollection } from '../ObservableCollection';
import { ObservableCollectionIterator } from '../ObservableCollectionIterator';

describe('when iterating', () => {
    const collection = new ObservableCollection<number>();
    const items: Array<number> = [];
    collection.push(42, 43);
    const iterator = new ObservableCollectionIterator<number>(collection);

    let result = iterator.next();
    while (!result.done) {
        items.push(result.value);
        result = iterator.next();
    }

    it('should iterate all items', () => items.should.have.members([42, 43]));
});
