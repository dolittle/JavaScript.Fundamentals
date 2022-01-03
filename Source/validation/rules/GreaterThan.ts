// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext, ValueRule, Cause } from '@dolittle/rules';
import { Reasons } from './Reasons';

/**
 * Represents a {ValueRule} for greater than - any value must be greater than a given value.
 */
export class GreaterThan extends ValueRule {
    /**
     * Initializes a new instance of the {GreaterThan} class.
     * @param {*} _value - Value that the input value must be greater than.
     */
    constructor(private _value: any) {
        super();
    }

    /**
     * Gets the value that input value must be greater than.
     * @returns {TValue}
     */
    get value(): any {
        return this._value;
    }

    /** @inheritdoc */
    async evaluate(context: IRuleContext, subject: any) {
        if (this.failIfValueTypeMismatch(context, subject, this._value.constructor)) {
            if (subject === this._value) context.fail(this, subject, Reasons.ValueIsEqual.becauseOf({ leftHand:subject, rightHand:this._value }));
            if (subject < this._value) context.fail(this, subject, Reasons.ValueIsLessThan.becauseOf({ leftHand:subject, rightHand:this._value }));
        }
    }
}
