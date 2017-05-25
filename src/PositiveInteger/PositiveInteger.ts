import { SignedNumberBehavior } from '../'
import { _PositiveInteger } from './_PositiveInteger'

export function positiveInteger(
  n: number,
  f: SignedNumberBehavior<PositiveInteger> = defaultBehavior): PositiveInteger
{
  return f(n)
}

const defaultBehavior: SignedNumberBehavior<PositiveInteger> =
  (n: number) => Math.round(Math.abs(n)) || DEFAULT_VALUE

const DEFAULT_VALUE = 1

export type PositiveInteger = _PositiveInteger & number
