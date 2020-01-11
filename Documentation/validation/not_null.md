---
title: Not null rule
description: How to work with the not null rule
keywords: fundamentals, javascript, building blocks
---
The not null rule looks for a value and requiring it to not be null.

## Usage

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder();
ruleSetContainerBuilder.ruleFor(_ => _.email).notNull();
```

With TypeScript, you would typically introduce a type that holds the property:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

class Person {
    email: String = '';
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<Person>();
ruleSetContainerBuilder.ruleFor(_ => _.email).notNull();
```

## Reasons for failing

| Reason | Id | Description | Arguments |
| -------| ---| ----------- | --------- |
| ValueIsNull | 712D26C6-A40F-4A3D-8C69-1475E761A1CF | The value is null | |
