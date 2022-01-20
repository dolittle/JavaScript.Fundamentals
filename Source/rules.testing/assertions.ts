// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

declare namespace Chai {
    /**
     * Defines assertions for Chai to use with rules.
     */
    export interface Assertion {
        /**
         * Extension to assertions to verify that `IRuleContext` failed for a rule with a subject and reason.
         * @param {any} rule - IRule instance that should have failed.
         * @param {any} subject - Subject that was evaluated and should have failed.
         * @param {any} reason - Reason instance that it should have failed with.
         */
        failWith(rule: any, subject: any, reason: any): void;

        /**
         * Extension to assertions to verify that a `IRuleContext` did not have any failures.
         */
        notFail(): void;
    }
}
