/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from './given/an_empty_container';
import {BindingForServiceAlreadyExists} from '../BindingForServiceAlreadyExists';

describe('when adding binding for same service twice', () => {
    var binding = {
        service: 'Some service',
        strategy: 'Some strategy',
        scope: 'some scope'
    };

    let exception = null;
    let context = new Context.default();
    context.container.add(binding);

    try {
        context.container.add(binding);
    } catch(e) {
        exception = e;
    }

    it('should throw binding for service already exists exception', () => exception.should.be.instanceof(BindingForServiceAlreadyExists));
    it('should pass the service as parameter to the exception', () => exception.service.should.equal(binding.service));
});
