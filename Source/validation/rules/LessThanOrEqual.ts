// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reasons } from './Reasons';
import { ValueRule } from '../index'
import { IRuleContext, Reason } from '@dolittle/rules';

/**
 * Represents a {ValueRule} for less than - any value must be less than a given value.
 */
export class LessThanOrEqual extends ValueRule {
    /**
     * Initializes a new instance of the {LessThanOrEqual} class.
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
    evaluate(context: IRuleContext, subject: any): void {
        if (this.failIfValueTypeMismatch(context, subject, this._value.constructor)) {
            if( subject > this._value ) context.fail(this, subject, Reasons.ValueIsGreaterThan.withArguments({leftHand:subject, rightHand:this._value}) )
        }
    }
}