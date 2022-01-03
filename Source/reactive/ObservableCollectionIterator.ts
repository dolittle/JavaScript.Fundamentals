// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObservableCollection } from './ObservableCollection';

/**
 * Represents an {@link Iterator} for iterating over an {@link ObservableCollection}.
 * @template T The type of the observable values.
 */
export class ObservableCollectionIterator<T> implements Iterator<T> {
    private _position = 0;

    /**
     * Initializes a new instance of the {@link ObservableCollectionIterator} class.
     * @param {ObservableCollection<T>} _collection - Collection the iterator is for.
     */
    constructor(private _collection: ObservableCollection<T>) {
    }

    /** @inheritdoc */
    next(): IteratorResult<T, T> {
        const result = {
            done: this._position === this._collection.length,
            value: this._collection.item(this._position)
        };
        this._position += 1;
        return result;
    }
}
