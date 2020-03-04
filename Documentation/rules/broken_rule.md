---
title: Broken Rule
description: What are broken rules
keywords: fundamentals, javascript, building blocks
aliases:
    - /fundamentals/javascript-fundamentals/rules/broken_rule/
---

A broken rule is the consequence of a `fail` happening on a [rule context]({{< relref rule_context >}}).
It encapsulates all the information related to what was violated.

Properties you'll find on the `BrokenRule` type:

| Property | Type | Description |
| -------- | ---- | ----------- |
| rule     | IRule | The [rule]({{< relref rule >}}) the failure was reported from |
| context  | IRuleContext | In what [rule context]({{< relref rule_context >}}) the evaluation happened |
| causes   | Cause[] | Array of [causes]({{< relref cause >}}) |
