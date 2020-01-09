---
title: Subject Provider
description: What are subject providers
keywords: fundamentals, javascript, building blocks
---
During evaluation of rules, the [subject](./subject.md) needs to be provided
in the [context](./rule_context.md) in which it is being evaluated in.
This is an extensibility feature that allows the resolving of subjects from
anything. The typical use case is to provide a value on an object as a subject
and therefor there is a built in type called `PropertyValueSubjectProvider` that
provides this.

Implementing a provider in JavaScript:

```javascript
class MySubjectProvider {
    provide(ruleContext) {
        return 42; // We return here what constitute the subject for evalution
    }
}
```

In TypeScript we'd implement it more typesafe:

```typescript
import { ISubjectProvider } from '@dolittle/rules';

class MySubject implements ISubjectProvider {
    provide(ruleContext:IRuleContext): any {
        return 42; // We return here what constitute the subject for evalution
    }
}
```
