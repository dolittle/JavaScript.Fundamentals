---
title: Max length rule
description: How to work with the max length rule
keywords: fundamentals, javascript, building blocks
---
The max length rule looks for a value with a length property to be of a max length.
The rule can used with any value that has a `.length` property, e.g. `String` or any
array.

## Usage

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder();
ruleSetContainerBuilder.ruleFor(_ => _.email).maxLength(42);
```

With TypeScript, you would typically introduce a type that holds the property:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

class Person {
    email: String = '';
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<Person>();
ruleSetContainerBuilder.ruleFor(_ => _.email).maxLength(42);
```

## Reasons for failing

| Reason | Id | Description | Arguments |
| ------ | --- | ----------- | --------- |
| LengthPropertyMissing | 305b86ad-53ea-4f9e-bd05-2af9a48fd378 | The value does not have a length property |  |
| LengthIsTooLong | D9675214-A6A4-439F-8D8E-AF0A48BD1BF0 | The value has a length that is too long | length |
