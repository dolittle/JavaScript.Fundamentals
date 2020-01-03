// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

declare module Chai {
    export interface Assertion {
        /**
         * Extension to assertions to verify that `IRuleContext` failed for a rule with a subject and reason.
         * @param {*} rule - IRule instance that should have failed.
         * @param {*} subject - Subject that was evaluated and should have failed.
         * @param {*} reason - Reason instance that it should have failed with.
         */
        failWith(rule: any, subject: any, reason: any): void;

        /**
         * Extension to assertions to verify that a `IRuleContext` did not have any failures.
         */
        notFail(): void;
    }
}
