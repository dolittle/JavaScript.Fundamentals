/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {NoConventionCanResolve} from '../NoConventionCanResolve';
import * as Context from './given/a_convention_not_able_to_resolve_anything';

describe('when resolving and a convention can not resolve', () => {
    let context = null;
    let exception = null;

    beforeEach(() => {
        context = new Context.default();

        (becauseOf => {
            try { 
                context.conventions.resolve({}, 'something'); 
            } catch(e) { 
                exception = e;
            }
        })();
    });

    it('should throw no convention can resolve exception', () => exception.should.be.an.instanceOf(NoConventionCanResolve)); 
    it('should not call resolve on convention', () => context.convention.resolve.called.should.be.false);
});