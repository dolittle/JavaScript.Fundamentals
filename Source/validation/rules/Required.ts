// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reasons } from './Reasons';
import { IRuleContext, Reason, ValueRule, Cause } from '@dolittle/rules';
import { Guid } from '@dolittle/rudiments';

/**
 * Represents a {ValueRule} for required - any value must be a valid existing value.
 */
export class Required extends ValueRule {

    /**
     * When a value is not specified, this is the reason given.
     */
    static StringIsEmpty: Reason = Reason.create('6DE903D6-014C-4B07-B5D3-C3F28677C1A6', 'String is empty');

    /**
     * When a value is not specified, this is the reason given.
     */
    static ValueNotSpecified: Reason = Reason.create('5F790FC3-5C7D-4F3A-B1E9-8F85FAF7176D', 'Value not specified');

    /** @inheritdoc */
    async evaluate(context: IRuleContext, subject: any) {
        if (subject == null) {
            context.fail(this, subject, Reasons.ValueIsNull.justBecause());
            return;
        }
        if (subject.constructor === Number && (subject as Number) === 0) {
            context.fail(this, subject, Required.ValueNotSpecified.justBecause());
            return;
        }
        if (subject.constructor === String && (subject as String).length === 0) {
            context.fail(this, subject, Required.StringIsEmpty.justBecause());
            return;
        }
    }
}
