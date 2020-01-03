// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ValueRule, Reasons } from '../index'
import { IRuleContext } from '@dolittle/rules';

/**
 * Represents a {ValueRule} for max length - any value can't exceed the given maximum length
 */
export class MaxLength extends ValueRule {
    /**
     * Initializes a new instance of the {LessThanOrEqual} class.
     * @param {Number} _length - Value that the input value must be greater than.
     */
    constructor(private _length: Number) {
        super();
    }

    /**
     * Gets the maximum length
     * @returns {TValue}
     */
    get length(): any {
        return this._length;
    }

    /** @inheritdoc */
    evaluate(context: IRuleContext, subject: any): void {
        if (this.failIfValueTypeMismatch(context, subject, String)) {
            let length = (<String>subject).length;
            if (length > this._length) {
                context.fail(this, subject, Reasons.LengthIsTooLong.withArguments({ length: length }));
            }
        }
    }
}