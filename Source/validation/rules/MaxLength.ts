// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext, Reason, ValueRule, Cause } from '@dolittle/rules';
import { Guid } from '@dolittle/rudiments';
import { Reasons } from './index';

/**
 * Represents a {ValueRule} for max length - any value can't exceed the given maximum length
 */
export class MaxLength extends ValueRule {
    static LengthPropertyMissing = Reason.create('305b86ad-53ea-4f9e-bd05-2af9a48fd378', 'Length property is missing');

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
    async evaluate(context: IRuleContext, subject: any) {
        if (!subject.hasOwnProperty('length')) {
            context.fail(this, subject, MaxLength.LengthPropertyMissing.justBecause());
            return;
        }
        const length = subject.length;
        if (length > this._length) {
            context.fail(this, subject, Reasons.LengthIsTooLong.becauseOf({ length }));
        }
    }
}
