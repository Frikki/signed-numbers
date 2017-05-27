# ADR-003: Model Signed Number Types

Frederik Krautwald <fkrautwald@gmail.com>,
Tylor Steinberger <tlsteinberger@gmail.com>

## Status

**Proposed** | ~~Accepted~~ | ~~Deprecated~~ | ~~Superceded~~

## Context

In light of our previous decision, [ADR-001][1], on how to model signed number 
types, we have learned that the types themselves are too weak to enforce 
constraints. For example, we can do stuff like this:

```ts
const a: PositiveInteger = -5
```

... which in effect renders the type useless.

This is possible because we extend our type with `Number`, allowing every 
number to be assigned.

Going back to our possibilities listed in our previous ADR-001, it leaves us 
with the only choice to model our types as classes.  However, it’s important 
that we don’t extend our classes (and eventual interfaces) with `Number`.

We could add Signed Number types as a classes. This may be okay because we can 
encapsulate constraints. It may be not okay because a class needs instantiation. 
It may not be okay because we need to ask for values. However, we could 
introduce free-standing alias functions which operate on instances. This may not 
be optimal because it introduces additional overhead. It may not be okay to use 
a class because we cannot perform arithmetic calculations natively on an 
instance, e.g. `instanceOne + instanceTwo` resolves in an error. We could 
introduce factory functions to instantiate our classes. This may be okay because 
it is in accord with the functional programming paradigm.

We could forget about the hole idea and just use the native `Number` type. This 
may be okay because we have dealt with that type since the beginning of 
JavaScript. This may also be okay because we can use native arithmetic 
calculations. It may not be okay because it leaves our software fragile an very 
prone to errors.

## Decision

We will model signed number types as classes _without_ extending them 
with `Number`.

We will introduce factory functions to instantiate classes.

We will introduce free-standing alias functions that operate on instances.

## Consequences

Clients cannot perform arithmetic calculations natively on the types.

Clients must "unwrap" the encapsulated numeric value.

Clients cannot assign numbers directly to variables or pass `Number` arguments 
to functions with parameters of signed number types.

Callback functions (behavior and constraints), as mentioned in [ADR-002][2], 
must be passed from the factory functions to the class constructor.

[1]: adr-001-model-signed-number-types.md
[2]: adr-002-override-default-type-constraints.md