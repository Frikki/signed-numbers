# PositiveInteger

## Purpose

The `PositiveInteger` type exists to denote the subset of numbers that are 
the solution to the simple linear recurrence equation:

![](https://latex.codecogs.com/svg.latex?a_n%20%3D%20a_%7Bn-1%7D%20&plus;%201)

with ![](https://latex.codecogs.com/svg.latex?a_1%20%3D%201)

The positive integers are the numbers 1, 2, 3, ... [(OEIS A000027)][1], 
sometimes called the counting numbers, or natural numbers, denoted 
![](https://latex.codecogs.com/svg.latex?%5Cmathbb%7BZ%5E&plus;%7D).

## Responsibility

The `PositiveInteger` is responsible of enforcing constraints to meet 
definition as noted above, while allowing native arithmetic calculations.

The default behavior is to:

- round value to the nearest integer,
- take the absolute value,
- default 0 to 1, and
- default NaN to 1.

## Usage

To make a positive integer, call the factory function 

```ts
positiveInteger(n: number, f: PositiveIntegerBehavior = defaultBehavior)
```

passing `n` as the value for the integer. Optionally, pass a function that is 
called with `n` to specify behavior (constraints) for the type. If no behavior 
function is given, the default behavior and constraints will precede.

### Examples

```ts
// Simple
const a = positiveInteger(7)

console.log(a * a) // logs 49

// Advanced with custom behavior and constraints
const b = positiveInteger(0.49, myBehavior)

// Errors with message 'n must be at least 1; got 0.49'

const myBehavior: PositiveIntegerBehavior = function(n: number) {
  const isInteger = Math.round(n) === n

  if (!isInteger)
    throw new Error(`n must be an integer; got ${n}`)

  const isPositive = Math.abs(n) === n

  if (!isPositive)
    throw new Error(`n must be a positive integer; got ${n}`)

  if (n < 1)
    throw new Error(`n must be at least 1; got ${n}`)

  if (Number.isNaN(n))
    throw new Error(`n must be a number; got ${n}`)

  return n
}
```

[1]: http://oeis.org/A000027