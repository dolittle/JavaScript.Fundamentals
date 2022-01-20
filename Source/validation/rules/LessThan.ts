// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext, ValueRule } from '@dolittle/rules';

import { Reasons } from './Reasons';

/**
 * Represents a {@link ValueRule} for less than - any value must be less than a given value.
 */
export class LessThan extends ValueRule {
    /**
     * Initializes a new instance of the {@link LessThan} class.
     * @param {any} _value - Value that the input value must be greater than.
     */
    constructor(private _value: any) {
        super();
    }

    /**
     * Gets the value that input value must be greater than.
     */
    get value(): any {
        return this._value;
    }

    /** @inheritdoc */
    async evaluate(context: IRuleContext, subject: any) {
        if (this.failIfValueTypeMismatch(context, subject, this._value.constructor)) {
            if (subject === this._value) context.fail(this, subject, Reasons.ValueIsEqual.becauseOf({ leftHand:subject, rightHand:this._value }));
            if (subject > this._value) context.fail(this, subject, Reasons.ValueIsGreaterThan.becauseOf({ leftHand:subject, rightHand:this._value }));
        }
    }
}
