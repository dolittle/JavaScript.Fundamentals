---
title: Rule Set Container
description: What is a rule set container
keywords: fundamentals, javascript, building blocks
aliases:
    - /fundamentals/javascript-fundamentals/rules/rule_set_container/
---
While a [rule set]({{< relref rule_set >}}) is a collection of rules for a
specific [subject]({{< relref subject >}}),
a **rule set container** is a collection of these [rule sets]({{< relref rule_set >}}).

## RuleSetContainerBuilder

To build a container you'll need to use a **rule set container builder** for
the type of container you're building for. Type of container is the owner of
any [subjects]({{< relref subject >}}).

### ObjectRuleSetContainerBuilder

In a lot of cases that would typically be an `Object`. For this scenario there
is a specific builder called `ObjectRuleSetContainerBuilder`. It supports then
building rules for properties on this object.

```javascript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';

const builder = new ObjectRuleSetContainerBuilder();
builder.ruleFor(_ => _.myProperty);
```

With TypeScript you can be leveraging the generic parameter and have a type-safe
approach:

```typescript
import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';

class MyType {
    myProperty: Number = 0;
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<MyType>();
ruleSetContainerBuilder.ruleFor(_ => _.myProperty);
```

The `ruleFor` method returns a `PropertyRuleSetBuilder` which extends the `RuleSetBuilder`
type found in the rules package and provides a way to build rules into each rule set.

Once you have all the rules you can build an actual `RuleSetContainer` by calling the
`build()` method on it. With the container you can now use the evaluation type to evaluate
instances.

```typescript
import { IRule, IRuleContext, ObjectRuleSetContainerBuilder, Reason, RuleSetContainerEvaluation } from '@dolittle/rules';

class MyRule implements IRule {
    static ValueIsNotFortyTwo: Reason = Reason.create('4b99af88-09c0-4342-8876-24c42a48d728', 'Value should be forty two');

    async evaluate(context: IRuleContext, subject: any) {
        const value = subject as Number;

        if (value != 42) {
            context.fail(this, subject, MyRule.ValueIsNotFortyTwo.noArguments());
        }
    }
}

class MyType {
    myProperty: Number = 0;
}

const ruleSetContainerBuilder = new ObjectRuleSetContainerBuilder<MyType>();
const ruleSetBuilder = ruleSetContainerBuilder.ruleFor(_ => _.myProperty);
const ruleBuilder = new PropertyValueBuilderBuilder(ruleSetBuilder, () => new MyRule());
ruleSetBuilder.addRuleBuilder(ruleBuilder);
const ruleSetContainer = ruleSetContainerBuilder.build();

const ruleSetContainerEvaluation = new RuleSetContainerEvaluation(ruleSetContainer);
const instanceToEvaluate = new MyType();

(async () => {
    await ruleSetContainerEvaluation.evaluate(instanceToEvaluate);
})();

console.log(ruleSetContainerEvaluation.isSuccess); // false
```

On the `RuleSetContainerEvaluation` instance you'll find a property called `brokenRules`.
This is a read-only array of any [broken rules]({{< relref broken_rule >}}) after an
evaluation.

{{% notice information %}}
It's worth noting that once the `RuleSetContainer` instance has been built, you don't
need to rebuild this. It is now something you'd keep around for the life-cycle of your
application. This is also something you could consider doing for the `RuleSetContainerEvaluation`
instance as well and just call the `evaluate` method on it with different instances.
It will reset its own state on each call. For **async** operations, it is however recommended
to keep multiple instances of the evaluation object.
{{% /notice %}}
