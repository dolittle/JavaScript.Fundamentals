// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents an implementation of {@link ProxyHandler} that keeps track of nested property accesses.
 */
export class PropertyPathResolverProxyHandler implements ProxyHandler<any> {
    _property = '';
    _segments: string[] = [];

    /**
     * Initializes a new instance of the {@link PropertyPathResolverProxyHandler} class.
     * @param {PropertyPathResolverProxyHandler} [_root] - The optional root proxy handler.
     */
    constructor(private readonly _root?: PropertyPathResolverProxyHandler) {
    }

    /**
     * Gets the property that was accessed.
     */
    get property(): string {
        return this._property;
    }

    /**
     * Gets all the property segments that was accessed.
     */
    get segments(): readonly string[] {
        return this._segments;
    }

    /**
     * Gets the full path of the property that was accessed.
     */
    get path(): string {
        return this._segments.join('.');
    }

    private addSegment(segment: string) {
        this._segments.push(segment);
    }

    /** @inheritdoc */
    get(target: any, p: PropertyKey, receiver: any): any {
        const root = this._root || this;

        const childProperty = new Proxy({}, new PropertyPathResolverProxyHandler(root));
        this._property = p.toString();
        root.addSegment(this._property);

        return childProperty;
    }
}
