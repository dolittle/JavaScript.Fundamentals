---
title: Rule
description: How to create rules
keywords: fundamentals, javascript, building blocks
---
A rule is the type that gets called to evaluate a specific [subject](./subject.md) in
given [context](./rule_context.md). The subject can be anything; a complex object, a
primitive type like a number or string; you decide.

Creating a rule means implementing the interface called `IRule`, which is defined
with one method that gets called for evaluation called `evaluate`.
Its signature takes a context and the subject.

In JavaScript, without any types, this means creating a type that implements the
method as follows:

```javascript
class MyRule {
    evaluate(context, subject) {
    }
}
```

For TypeScript you get the typesafety and do it as follows:

```javascript
import { IRule, IRuleContext } from '@dolittle/rules';

class MyRule implements IRule {
    evaluate(context: IRuleContext, subject: any): void {
    }
}
```

If a rule is not violated, it does not really do anything. But if there is a condition
that gets violated, it typically would use the [context](./rule_context.md) to fail with a
specific [reason](./reason.md).

Lets take a rule that checks if a subject, assumed to be a number holds a specific value.

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

The above sample uses a [reason](./reason.md) and from it creates a concrete instance, called
a [cause](./cause.md). This is then handed into the context as part of the failure.
