// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext, ValueRule, Cause } from '@dolittle/rules';
import { Reasons } from './index';

/**
 * Represents a {ValueRule} for required - any value must be a valid existing value
 */
export class NotNull extends ValueRule {

    /** @inheritdoc */
    async evaluate(context: IRuleContext, subject: any) {
        if (subject === null) {
            context.fail(this, subject, Reasons.ValueIsNull.justBecause());
            return;
        }
    }
}
