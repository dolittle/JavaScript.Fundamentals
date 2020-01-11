// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reason } from '@dolittle/rules';

export class Reasons {
    /**
     * When a value is null, this is the reason given.
     */
    static ValueIsNull: Reason = Reason.create('712D26C6-A40F-4A3D-8C69-1475E761A1CF', 'Value is null');

    /**
     * When a value is equal and it is not not allowed to be equal, this is the reason given.
     */
    static ValueIsEqual: Reason = Reason.create('CEFA9147-5F13-4C82-B609-C64582EC33AB', 'Value {leftHand} is equal {rightHand}');

    /**
     * When a value is less than the specified greater than value, this is the reason given.
     */
    static ValueIsLessThan: Reason = Reason.create('8CFB5B51-55E6-41A6-A01A-33F83E141CF2', 'Value {leftHand} is less than {rightHand}');

    /**
     * When a value was greater than the specified less than value, this is the reason given.
     */
    static ValueIsGreaterThan: Reason = Reason.create('6C489DB3-DE0A-45BA-A547-5A6E3AD3F303', 'Value {leftHand} is greater than {rightHand}');

    /**
     * When something is longer than it should, this is the reason given.
     */
    static LengthIsTooLong: Reason = Reason.create('D9675214-A6A4-439F-8D8E-AF0A48BD1BF0', 'Length {length} is too long');

    /**
     * When something is longer than it should, this is the reason given.
     */
    static LengthIsTooShort: Reason = Reason.create('E0F8D478-A353-4926-893E-DD367E2F2ACF', 'Length {length} is too short');
}
