---
title: Rule Context
description: What is a rule context
keywords: fundamentals, javascript, building blocks
---
The context in which a [rule](./rule.md) or [rule set](./rule_set.md) gets
evaluated is called a **rule context**. This object holds information about
the owning instance in which the context is for - typically an object that
might have a value there are rules for. This is flexible and represents what
you consider the owner of the context.

More importantly, the **rule context** holds any [broken rules](./broken_rule.md)
as a consequence of the `fail()` method being called on the context.

The fail method has the following signature:

```typescript
fail(rule: IRule, subject: any, cause: Cause): void;
```

Used in a rule with a concrete [reason](./reason.md) to get a [cause](./cause.md)
from:

```typescript
import { IRule, IRuleContext, Reason } from '@dolittle/rules';

class MyRule implements IRule {
    static Reason ValueIsNotFortyTwo = Reason.create('4b99af88-09c0-4342-8876-24c42a48d728', 'Value should be forty two');

    evaluate(context: IRuleContext, subject: any): void {
        const value = subject as Number;

        if (value != 42) {
            context.fail(this, subject, MyRule.ValueIsNotFortyTwo.noArguments());
        }
    }
}
```
