// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BehaviorSubject, Subject } from 'rxjs';
import { ObservableCollectionIterator } from './ObservableCollectionIterator';

/**
 * Represents a collection of items that can be observed for changes.
 */
export class ObservableCollection<T> extends BehaviorSubject<T[]> implements Iterable<T> {
    private readonly _added: Subject<T[]>;
    private readonly _removed: Subject<T[]>;

    /**
     * Initializes a new instance of the {ObservableCollection<T>} class.
     */
    constructor() {
        super([]);
        this._added = new Subject<T[]>();
        this._removed = new Subject<T[]>();
    }

    /**
     * Gets the added {Subject<T>}.
     */
    get added(): Subject<T[]> {
        return this._added;
    }

    /**
     * Gets the removed {Subject<T>}.
     */
    get removed(): Subject<T[]> {
        return this._removed;
    }

    /** @inheritdoc */
    [Symbol.iterator]() {
        return new ObservableCollectionIterator<T>(this);
    }

    /**
     * Gets the length of the collection.
     * @returns {number} Length of the collection.
     */
    get length(): number {
        return this.value.length;
    }

    /**
     * Get a specific item at a specific index.
     * @param {number} index - Index to get.
     * @returns {T} The item at the index.
     */
    item(index: number): T {
        return this.value[index];
    }

    /**
     * Push items to the collection.
     * @param {T[]} items - Rest of items.
     * @returns {number} - Number of items in the collection after push.
     */
    push(...items: T[]): number {
        const result = this.value.push(...items);
        this.added.next(items);
        return result;
    }

    remove(...items: T[]): number {
        let current = this.value;
        items.forEach(item => {
            current = current.filter(_ => _ !== item);
        });

        this.next(current);
        this.removed.next(items);

        return this.length;
    }
}
