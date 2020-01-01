// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reasons } from './Reasons';
import { ValueRule } from '../index'
import { IRuleContext, Reason } from '@dolittle/rules';

/**
 * Represents a {ValueRule} for less than - any value must be less than a given value.
 */
export class LessThan extends ValueRule {
    private _value: any;

    /**
     * Initializes a new instance of the {LessThan} class.
     * @param value - Value that the input value must be greater than.
     */
    constructor(value: any) {
        super();
        this._value = value;
    }

    /**
     * Gets the value that input value must be greater than.
     * @returns {TValue}
     */
    get value(): any {
        return this._value;
    }

    /** @inheritdoc */
    evaluate(context: IRuleContext, source: any): void {
        if (this.failIfValueTypeMismatch(context, source, this._value.constructor)) {
            if( source == this._value ) context.fail(this, source, Reasons.ValueIsEqual.withArguments({leftHand:source, rightHand:this._value}) )
            if( source > this._value ) context.fail(this, source, Reasons.ValueIsGreaterThan.withArguments({leftHand:source, rightHand:this._value}) )
        }
    }
}