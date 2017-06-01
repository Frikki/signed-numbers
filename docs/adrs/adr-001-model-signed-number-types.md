# ADR-001: Model Signed Number Types

Frederik Krautwald <fkrautwald@gmail.com>,
Tylor Steinberger <tlsteinberger@gmail.com>

## Status

~~Proposed~~ | ~~Accepted~~ | ~~Deprecated~~ | **Superceded**

## Context

### As Classes

We could add Signed Number types as a classes. This may be okay because we can 
encapsulate constraints. It may be not okay because a class needs instantiation. 
It may not be okay because we need to ask for values. However, we could 
introduce free-standing alias functions which operate on instances. This may not 
be optimal because it introduces additional overhead. It may not be okay to use 
a class because we cannot perform arithmetic calculations natively on an 
instance, e.g. `instanceOne + instanceTwo` resolves in an error.

### As TypeScript Types

We could add Signed Number types as a TypeScript type mapped to a number. 
This may be okay because we can perform arithmetic calculations natively. It may 
not be okay because it doesn't enforce constraints directly, i.e., `-1` would, 
for example, be a valid positive integer. We could introduce try-functions that 
the client could call before establishing the type. This may be okay because we 
can introduce constraints. It may not be okay because the constraints aren't 
enforced automatically.

### As TypeScript Interfaces

We could add Signed Number types as TypeScript interfaces that extends Number. 
This may be okay because it semantically communicates the intent. It may be okay 
because we can perform arithmetic calculations if returned as a union with 
number. It may not be okay because we need a factory function to create an 
instance. This may be okay because we can execute constraints in the function. 
This may not be okay because clients can still assign illegal numbers to 
variables of signed number types.

## Decision

We will model signed number types as interfaces.

We will introduce factory functions with type constraints.

## Consequences

Clients can perform arithmetic calculations natively without conversion first.

Clients can assign illegal numbers to variables of signed number types.

Clients must use the provided factory function to enforce constraints.
