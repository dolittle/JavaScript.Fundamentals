---
title: Greater than or equal rule
description: How to work with the greater than or equal rule
keywords: fundamentals, javascript, building blocks
aliases:
    - /fundamentals/javascript-fundamentals/validation/greater_than_or_equal/
---
The greater than or equal rule looks for a value to be greater than or equal to a given value.

## Usage

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder();
ruleSetContainerBuilder.ruleFor(_ => _.someNumber).greaterThanOrEqual(42);
```

With TypeScript, you would typically introduce a type that holds the property:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

class MyType {
    someNumber: Number = 0;
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<Person>();
ruleSetContainerBuilder.ruleFor(_ => _.someNumber).greaterThanOrEqual(42);
```

## Reasons for failing

| Reason | Id | Description | Arguments |
| ------ | --- | ----------- | --------- |
| ValueIsLessThan | 8CFB5B51-55E6-41A6-A01A-33F83E141CF2 | The value is less than expected value | leftHand |
