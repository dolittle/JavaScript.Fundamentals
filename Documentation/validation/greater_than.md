---
title: Greater than rule
description: How to work with the greater than rule
keywords: fundamentals, javascript, building blocks
aliases:
    - /fundamentals/javascript-fundamentals/validation/greater_than/
---
The greater than rule looks for a value to be greater than a given value.

## Usage

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder();
ruleSetContainerBuilder.ruleFor(_ => _.someNumber).greaterThan(42);
```

With TypeScript, you would typically introduce a type that holds the property:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

class MyType {
    someNumber: Number = 0;
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<Person>();
ruleSetContainerBuilder.ruleFor(_ => _.someNumber).greaterThan(42);
```

## Reasons for failing

| Reason | Id | Description | Arguments |
| ------ | --- | ----------- | --------- |
| ValueIsEqual | CEFA9147-5F13-4C82-B609-C64582EC33AB | The value is equal to expected value | leftHand, rightHand |
| ValueIsLessThan | 8CFB5B51-55E6-41A6-A01A-33F83E141CF2 | The value is less than expected value | leftHand |
