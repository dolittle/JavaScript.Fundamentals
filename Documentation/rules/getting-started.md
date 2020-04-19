---
title: Getting started
description: How to work with rules
keywords: fundamentals, javascript, building blocks
weight: 1
aliases:
    - /fundamentals/javascript-fundamentals/rules/getting_started/
    - /fundamentals/javascript-fundamentals/rules/getting-started/
---

## Overview

A big part of most software is about governing rules that needs to be fulfilled
before an action can be performed. The rules could be used as something that
evaluates input from a user, but could also be in general rules to validate that
the system is in the right state.

The rule engine provides a way to express these rules and encapsulate them in
reusable **rule sets** and can be put together to form a bigger whole as part of a
**rule set container**.

In many ways, the rule engine represents an alternative to having an exception
driven flow in your code and at the same time capturing the business logic in a
more explicit approach. By its encapsulations and formulations around **broken rules**,
its **reasons** for breaking and concrete instances in the form of a **cause**.
All of this then gives you an object model that enables you to reason about the
cause of invalid system state. It also represents an opportunity for a system
to present violations to a user in a user friendly way.

## Getting started

To get started you'll need a reference to the `@dolittle/rules` package.

```shell
$ npm i @dolittle/rules
```

Or with yarn:

```shell
$ yarn add @dolittle/rules
```

For an example of how it all fits together, go to the [RuleSetContainer]({{< relref rule_set_container >}})
topic.

## Concepts

Below are the concepts to get familiar with in the rule engine.

* [Subject]({{< relref subject >}})
* [Rule]({{< relref rule >}})
* [ValueRule]({{< relref value_rule >}})
* [SubjectProvider]({{< relref subject_provider >}})
* [RuleSet]({{< relref rule_sets >}})
* [BrokenRule]({{< relref broken_rule >}})
* [Reason]({{< relref reason >}})
* [Cause]({{< relref cause >}})
* [RuleContext]({{< relref rule_context >}})
