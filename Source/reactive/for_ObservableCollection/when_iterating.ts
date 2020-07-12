// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObservableCollection } from '../ObservableCollection';

describe('when iterating', () => {
    const collection = new ObservableCollection<number>();
    const items: Array<number> = [];
    collection.push(42, 43);

    for (const item of collection) {
        items.push(item);
    }

    it('should iterate all items', () => items.should.have.members([42,43]));
});
