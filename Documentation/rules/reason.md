---
title: Reason
description: What is a reason
keywords: fundamentals, javascript, building blocks
aliases:
    - /fundamentals/javascript-fundamentals/rules/reason/
---
A reason represents the actual reason for failing in a rule. The reason should be
uniquely identifiable, for instance through a GUID as the identifier.

The reason can then be used to create a specific instance called a [cause]({{< relref cause >}}),
which holds more information about the actual cause of a failure.

```typescript
import { Reason } from '@dolittle/rules';

static Reason ValueIsNotFortyTwo = Reason.create('4b99af88-09c0-4342-8876-24c42a48d728', 'Value should be forty two');
```

On the reason there are two ways to create a cause instance, one without any arguments and
one with arguments.

Without arguments you simply do:

```typescript
const cause = ValueIsNotFortyTwo.noArguments();
```

If you want to leverage arguments, which also gets interpolated in any strings in the reason:

```typescript
import { Reason } from '@dolittle/rules';

static Reason ValueIsNotFortyTwo = Reason.create('4b99af88-09c0-4342-8876-24c42a48d728', 'Value '{value}' should be forty two');

const cause = ValueIsNotFortyTwo.withArguments({ value: 43 });
```
