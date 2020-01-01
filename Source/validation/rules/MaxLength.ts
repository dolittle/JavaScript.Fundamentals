// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ValueRule, Reasons } from '../index'
import { IRuleContext } from '@dolittle/rules';

/**
 * Represents a {ValueRule} for email - any value must be a valid email
 */
export class MaxLength extends ValueRule {
    private _length: Number;

    /**
     * Initializes a new instance of the {LessThanOrEqual} class.
     * @param length - Value that the input value must be greater than.
     */
    constructor(length: Number) {
        super();
        this._length = length;
    }

    /**
     * Gets the maximum length
     * @returns {TValue}
     */
    get length(): any {
        return this._length;
    }

    /** @inheritdoc */
    evaluate(context: IRuleContext, source: any): void {
        if (this.failIfValueTypeMismatch(context, source, String)) {
            let length = (<String>source).length;
            if (length > this._length) {
                context.fail(this, source, Reasons.LengthIsTooLong.withArguments({ length: length }));
            }
        }
    }
}