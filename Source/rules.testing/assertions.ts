// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

declare module Chai {
    export interface Assertion {
        failWith(rule: any, source: any, reason: any): void;
        notFail(): void;
    }
}
