// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ISerializer } from './ISerializer';

/**.
 * Represents an implementation of ISerializer
 *
 * @export
 * @class Serializer
 * @implements {ISerializer}
 */
export class Serializer implements ISerializer {

    /**
     * @inheritdoc
     */
    toJSON(input: any, spaces?: number): string {
        return JSON.stringify(input, undefined, spaces);
    }

    /**
     * @inheritdoc
     */
    fromJSON(jsonString: string) {
        return JSON.parse(jsonString);
    }
}
