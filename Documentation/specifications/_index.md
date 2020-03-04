---
title: Specifications
description: How to work with specifications
keywords: fundamentals, javascript, building blocks
aliases:
    - /fundamentals/javascript-fundamentals/specifications/
---
In software you typically have code paths, these paths are built from decisions in
the software and is typically a consequence of conditions or state that decides
which path to take. With imperative code that would typically manifest itself as
`if / else` constructs or `switch / case` statements or something similar.
For this to work you need some state to check against. A specification is a
declarative model that aims at capturing the conditions in a specification expression
resulting in a tree. The specification is then an encapsulation that can be evaluated
by handing it state for it to see if it can be satisfied with.

Every node in the tree represents a part of the expression with the predicate you
give that is the code that will evaluate the instance given.

## Getting started

To get started you'll need a reference to the `@dolittle/specifications` package.

```shell
$ npm i @dolittle/specifications
```

Or with yarn:

```shell
$ yarn add @dolittle/specifications
```

Then you need to import the `Specification` type, which then holds a static method
called `when` on it to add the first node in the tree.

```javascript
import { Specification } from '@dolittle/specifications';

const specification = Specification.when(_ => _.myValue == 42);
```

{{% notice information %}}
When using TypeScript, `Specification` is a of a generic type. Giving a type-safe
approach. By default, if a type is not specified, the type will be `any`.
{{% /notice %}}

Once you have this in place, you can then start using the specification towards an
instance of the type you specified above.

Evaluations are then done through the `isSatisfiedBy` method on the specification
instance.

```javascript
console.log(specification.isSatisfiedBy({myValue:0})); // false
console.log(specification.isSatisfiedBy({myValue:42})); // false
```

When using TypeScript, you'd typically introduce a type that you'd want the
specification to be for.

```typescript
class MyType {
    myValue:number = 0;
}
```

Since we now a specific type, we change the specification to be specific to that type.
The type is the type that will be used throughout the entire specification for all
predicates.

```typescript
const specification = Specification.when(_ => _.myValue == 42);
```

We'd then evaluate against an instance of this instead of an `any` instance.

```typescript
const myTypeInstance = new MyType();

myTypeInstance.myValue = 0;

console.log(specification.isSatisfiedBy(myTypeInstance)); // false

myTypeInstance.myValue = 42;

console.log(specification.isSatisfiedBy(myTypeInstance)); // true
```

## Chaining

The specification API allows for chaining expressions together, every addition becomes a
node in the hierarchy and will be part of the total evaluation. You can continue the chain
as far as you want.

## And

You can add a logical **and** to the expression that makes it have to satisfy the previous
predicate **and** this addition.

```typescript
const specification = Specification.when(_ => _.myValue > 0).and(_ => _.myValue < 43);

const myTypeInstance = new MyType();

myTypeInstance.myValue = 1;

console.log(specification.isSatisfiedBy(myTypeInstance)); // true

myTypeInstance.myValue = 43;

console.log(specification.isSatisfiedBy(myTypeInstance)); // false
```

## Or

You can add a logical **or** to the expression that makes it have to satisfy the previous
predicate **or** this addition.

```typescript
const specification = Specification.when(_ => _.myValue == 42).or(_ => _.myValue == 43);

const myTypeInstance = new MyType();

myTypeInstance.myValue = 0;

console.log(specification.isSatisfiedBy(myTypeInstance)); // false

myTypeInstance.myValue = 42;

console.log(specification.isSatisfiedBy(myTypeInstance)); // true

myTypeInstance.myValue = 43;

console.log(specification.isSatisfiedBy(myTypeInstance)); // true
```

## Not

You can also add negating expressions as a logical **and** or **or**.

```typescript
const specification = Specification
                        .when(_ => _.myValue > 0)
                        .and(_ => _.myValue < 45)
                        .andNot(_ => _.myValue == 43);

const myTypeInstance = new MyType();

myTypeInstance.myValue = 1;

console.log(specification.isSatisfiedBy(myTypeInstance)); // true

myTypeInstance.myValue = 44;

console.log(specification.isSatisfiedBy(myTypeInstance)); // true

myTypeInstance.myValue = 43;

console.log(specification.isSatisfiedBy(myTypeInstance)); // false
```

You also have an `orNot` method for negation.
