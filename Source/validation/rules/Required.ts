// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ValueRule, Reasons } from '../index'
import { IRuleContext, Reason } from '@dolittle/rules';

/**
 * Represents a {ValueRule} for required - any value must be a valid existing value
 */
export class Required extends ValueRule {

    /**
     * When a value is not specified, this is the reason given.
     */
    static StringIsEmpty: Reason = Reason.create("6DE903D6-014C-4B07-B5D3-C3F28677C1A6", "String is empty");

    /**
     * When a value is not specified, this is the reason given.
     */
    static ValueNotSpecified: Reason = Reason.create("5F790FC3-5C7D-4F3A-B1E9-8F85FAF7176D", "Value not specified");

    /** @inheritdoc */
    evaluate(context: IRuleContext, source: any): void {
        if (source == null) {
            context.fail(this, source, Reasons.ValueIsNull.noArguments());
            return;
        }
        if (source.constructor == Number && (<Number>source) == 0) {
            context.fail(this, source, Required.ValueNotSpecified.noArguments());
            return;
        }
        if (source.constructor == String && (<String>source).length == 0) {
            context.fail(this, source, Required.StringIsEmpty.noArguments());
            return;
        }
    }
}