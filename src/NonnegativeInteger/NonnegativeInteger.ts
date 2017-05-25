import { PositiveInteger } from '../'

export function nonnegativeInteger(
  n: number,
  f: NonnegativeIntegerBehavior = defaultBehavior): NonnegativeInteger
{
  return f(n)
}

export type NonnegativeIntegerBehavior = (n: number) => NonnegativeInteger

function defaultBehavior(n: number): NonnegativeInteger {
  return Math.abs(Math.round(n)) || DEFAULT_VALUE
}

const DEFAULT_VALUE = 0

export type NonnegativeInteger = PositiveInteger | 0
