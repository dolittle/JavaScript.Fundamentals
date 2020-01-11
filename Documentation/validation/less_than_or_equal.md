---
title: Less than or equal rule
description: How to work with the less than or equal rule
keywords: fundamentals, javascript, building blocks
---
The less than or equal rule looks for a value to be less than or equal to a given value.

## Usage

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder();
ruleSetContainerBuilder.ruleFor(_ => _.someNumber).lessThanOrEqual(42);
```

With TypeScript, you would typically introduce a type that holds the property:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

class MyType {
    someNumber: Number = 0;
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<Person>();
ruleSetContainerBuilder.ruleFor(_ => _.someNumber).lessThanOrEqual(42);
```

## Reasons for failing

| Reason | Id | Description | Arguments |
| ------ | -- | ----------- | --------- |
| ValueIsGreaterThan | 6C489DB3-DE0A-45BA-A547-5A6E3AD3F303 | The value is greater than expected value | leftHand |
