---
title: Value Rule
description: How to work with value rules
keywords: fundamentals, javascript, building blocks
aliases:
    - /fundamentals/javascript-fundamentals/rules/value_reason/
---
A value rule is a concrete implementation of a [rule]({{< relref rule >}}). Its use case is
linked to typically single values like **Numbers**, **Strings**, **Date** and similar.

Part of the implementation `ValueRule` you get a method to make sure it is the correct
type and fail it is not with a reason; `failIfValueTypeMismatch()`. In TypeScript one
could argue that this should just be a generic type, but for API consistency and
full compatibility with JavaScript, we've chosen this for now.

Implementation of a value rule in TypeScript:

```typescript
import { ValueRule, IRuleContext, Reason } from '@dolittle/rules';

class MyRule extends ValueRule {
    static Reason ValueIsNotFortyTwo = Reason.create('4b99af88-09c0-4342-8876-24c42a48d728', 'Value should be forty two');

    async evaluate(context: IRuleContext, subject: any) {
        if (this.failIfValueTypeMismatch(context, subject, Number)) {
            const value = subject as Number;

            if (value != 42) {
                context.fail(this, subject, MyRule.ValueIsNotFortyTwo.noArguments());
            }
        }
    }
}
```
