// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ValueRule, Reasons } from '../index'
import { IRuleContext } from '@dolittle/rules';

/**
 * Represents a {ValueRule} for required - any value must be a valid existing value
 */
export class NotNull extends ValueRule {

    /** @inheritdoc */
    evaluate(context: IRuleContext, source: any): void {
        if (source == null) {
            context.fail(this, source, Reasons.ValueIsNull.noArguments());
            return;
        }
    }
}