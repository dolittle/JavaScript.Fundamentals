import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '../index';

describe('when', () => {

    class MyObject {
        get stuff(): number {
            return 42;
        }
    }
    
    new ObjectRuleSetContainerBuilder<MyObject>().rulesFor(_ => _.stuff).greaterThan(42).withMessage('Stop that');
});