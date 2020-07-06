// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Reason } from '../index';
import { Guid } from '@dolittle/rudiments';

describe('when creating', () => {
    const id = Guid.parse('f1bbfeb4-de16-4a4a-8733-0b1402b1476a');
    const title = 'Some title';
    const description = 'Some description';

    const reason = Reason.create(id, title, description);

    it('should have the id set', () => reason.id.should.equal(id));
    it('should have the title set', () => reason.title.should.equal(title));
    it('should have the description set', () => reason.description.should.equal(description));
});
