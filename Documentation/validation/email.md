---
title: Email rule
description: How to work with the email rule
keywords: fundamentals, javascript, building blocks
---
The email rule looks for a value to be a valid email.

## Usage

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder();
ruleSetContainerBuilder.ruleFor(_ => _.email).emailAddress();
```

With TypeScript, you would typically introduce a type that holds the property:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

class Person {
    email: String = '';
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<Person>();
ruleSetContainerBuilder.ruleFor(_ => _.email).emailAddress();
```

## Reasons for failing

| Reason | Id | Description | Arguments |
| ------ | -- | ----------- | --------- |
| InvalidEmail | A62F369F-9C92-4A06-96C3-654AB0E15119 | The email is not in a valid state | value |
