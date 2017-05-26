# ADR-002: Override Default Type Constraints

Frederik Krautwald <fkrautwald@gmail.com>,
Tylor Steinberger <tlsteinberger@gmail.com>

## Status

~~Proposed~~ | **Accepted** | ~~Depreciated~~ | ~~Superceded~~

## Context

In order for clients to change the type constraints enforced in the factory 
functions, we could provide the function with a second optional parameter that 
takes a callback function which is called with the number value. In such 
a callback function, the client is able to change the behavior of the 
constraints. This may be okay, because it provides an easy mechanism to 
dynamically change constraints. It may not be okay because it may introduce an 
extra cognitive load on client to understand the usage.

## Decision

We will add a second optional parameter that accepts a behavior function that 
enforces constraints on the type. If not provided, it will default to the 
built-in behavior constraints.

## Consequences

Clients can override the default constraints and behavior.
