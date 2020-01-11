---
title: Less than rule
description: How to work with the less than rule
keywords: fundamentals, javascript, building blocks
---
The less than rule looks for a value to be less than a given value.

## Usage

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder();
ruleSetContainerBuilder.ruleFor(_ => _.someNumber).lessThan(42);
```

With TypeScript, you would typically introduce a type that holds the property:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

class MyType {
    someNumber: Number = 0;
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<Person>();
ruleSetContainerBuilder.ruleFor(_ => _.someNumber).lessThan(42);
```

## Reasons for failing

| Reason | Id | Description | Arguments |
| ------ | -- | ----------- | --------- |
| ValueIsEqual | CEFA9147-5F13-4C82-B609-C64582EC33AB | The value is equal to expected value | leftHand, rightHand |
| ValueIsGreaterThan | 6C489DB3-DE0A-45BA-A547-5A6E3AD3F303 | The value is greater than expected value | leftHand |
