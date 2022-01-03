// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BehaviorSubject, Subject } from 'rxjs';
import { ObservableCollectionIterator } from './ObservableCollectionIterator';

/**
 * Represents a collection of items that can be observed for changes.
 * @template T The type of the observable values.
 */
export class ObservableCollection<T> extends BehaviorSubject<T[]> implements Iterable<T> {
    private readonly _added: Subject<T[]>;
    private readonly _removed: Subject<T[]>;

    /**
     * Initializes a new instance of the {@link ObservableCollection} class.
     */
    constructor() {
        super([]);
        this._added = new Subject<T[]>();
        this._removed = new Subject<T[]>();
    }

    /**
     * Gets the added {@link Subject}.
     */
    get added(): Subject<T[]> {
        return this._added;
    }

    /**
     * Gets the removed {@link Subject}.
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
     * @param {T[]} items - The items to push.
     * @returns {number} Number of items in the collection after push.
     */
    push(...items: T[]): number {
        const result = this.value.push(...items);
        this.added.next(items);
        return result;
    }

    /**
     * Remove items from the collection.
     * @param {...any} items - The items to remove.
     * @returns {number} The number of items in the collection after removing.
     */
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
