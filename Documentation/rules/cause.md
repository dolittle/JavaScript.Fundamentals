---
title: Cause
description: What is a cause
keywords: fundamentals, javascript, building blocks
---
A cause is an instance of a [reason]({{< relref reason >}}). It holds the properties that describe the
reason for failing with the context of the actual cause.

| Property | type | Description |
| -------- | ---- | ----------- |
| reason   | Reason | The [reason]({{< relref reason >}}) that represents the unique reason for failure |
| title    | string | The title that could be used as a string to present to users, this is string interpolated with any arguments |
| description | string | The description that could be used as a string to present to users, this is string interpolated with any arguments |
| arguments | object | A key / value of any arguments for the cause, typically accessible in string interpolation |

## Arguments and string interpolation

The `title` and `description` strings are interpolated with any values coming in as arguments.
During initialization of a cause, strings are interpolated - the values are represented using
curly braces and the name of the value e.g. {myValue}. A string could be for instance:

`Value '{value}' should be 42`.

The key value object passed in as arguments would then hold a `value` key with the actual value:

`{ 'value': 43 }`.
