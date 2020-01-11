---
title: Required rule
description: How to work with the required rule
keywords: fundamentals, javascript, building blocks
---
The required rule looks for a value and with different conditions requires it
to be something. The following conditions are looked at:

* Value can't be null
* If value is a number, it has to be something else than 0
* If value is a string, it has to be not empty

## Usage

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder();
ruleSetContainerBuilder.ruleFor(_ => _.email).required();
```

With TypeScript, you would typically introduce a type that holds the property:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

class Person {
    email: String = '';
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<Person>();
ruleSetContainerBuilder.ruleFor(_ => _.email).required();
```

## Reasons for failing

| Reason | Id | Description | Arguments |
| -------| ---| ----------- | --------- |
| ValueIsNull | 712D26C6-A40F-4A3D-8C69-1475E761A1CF | The value is null | |
| ValueNotSpecified | 5F790FC3-5C7D-4F3A-B1E9-8F85FAF7176D | The number value is 0 | |
| StringIsEmpty | 6DE903D6-014C-4B07-B5D3-C3F28677C1A6 | The string value is empty | |
