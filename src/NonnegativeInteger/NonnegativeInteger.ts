import { PositiveInteger, SignedNumberBehavior } from '../'

export function nonnegativeInteger(
  n: number,
  f: SignedNumberBehavior<NonnegativeInteger> = defaultBehavior): NonnegativeInteger
{
  return f(n)
}

const defaultBehavior: SignedNumberBehavior<NonnegativeInteger> =
  (n: number) => Math.abs(Math.round(n)) || DEFAULT_VALUE

const DEFAULT_VALUE = 0

export type NonnegativeInteger = PositiveInteger | 0
