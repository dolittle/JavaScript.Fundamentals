---
title: Getting started
description: How to work with validation
keywords: fundamentals, javascript, building blocks
weight: 1
aliases:
    - /fundamentals/javascript-fundamentals/validation/getting_started/
---

## Overview

On top of the [rule engine](/fundamentals/javascript-fundamentals/rules/) there
is a special purposed validation system. While leveraging the rule engine, it
provides an simpler abstraction to work with and also a set of commonly used rules.

## Getting started

To get started you'll need a reference to the `@dolittle/validation` package.

```shell
$ npm i @dolittle/validation
```

Or with yarn:

```shell
$ yarn add @dolittle/validation
```

By importing `@dolittle/validation` in your file, you'll now have the `PropertyRuleSetBuilder`
found in [`@dolittle/rules`]((/fundamentals/javascript-fundamentals/rules/) with methods
for building our your rules for properties on objects. These rule types are called `ValueRules`.

## Usage

Imagine you have a type that holds a property for `email`, you can simply then add
the `emailAddress` rule adding a call to the method for the rule:

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

Evaluating this would be leveraging the same evaluation found in the rule engine.

## Built-in rules

* [Email]({{< relref email >}})
* [Greater than]({{< relref greater_than >}})
* [Greater than or equal]({{< relref greater_than_or_equal >}})
* [Less than]({{< relref less_than >}})
* [Less than or equal]({{< relref less_than_or_equal >}})
* [MaxLength]({{< relref max_length >}})
* [NotNull]({{< relref not_null >}})
* [Regex]({{< relref regex >}})
* [Required]({{< relref required >}})
