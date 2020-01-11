---
title: Regex rule
description: How to work with the regex rule
keywords: fundamentals, javascript, building blocks
---
The regex rule uses regular expressions to validate the value.

## Usage

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder();
ruleSetContainerBuilder.ruleFor(_ => _.name).regex();
```

With TypeScript, you would typically introduce a type that holds the property:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '@dolittle/validation';

class Person {
    name: String = '';
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<Person>();
ruleSetContainerBuilder.ruleFor(_ => _.email).regex('\w');
```

## Reasons for failing

| Reason | Id | Description | Arguments |
| ------ | -- | ----------- | --------- |
| NotConformingToExpression | BE58A125-40DB-47EA-B260-37F7AF4455C5 | The value is not conforming to expression | value |
