---
title: Broken Rule
description: What are broken rules
keywords: fundamentals, javascript, building blocks
---
A broken rule is the consequence of a `fail` happening on a [rule context](./rule_context.md).
It encapsulates all the information related to what was violated.

Properties you'll find on the `BrokenRule` type:

| Property | Type [ Description |
| -------- | ---- | ----------- |
| rule     | IRule | The [rule](./rule.md) the failure was reported from |
| context  | IRuleContext | In what [rule context](./rule_context.md) the evaluation happened |
| causes   | Cause[] | Array of [causes](./cause.md) |
