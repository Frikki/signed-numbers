import { _PositiveInteger } from './_PositiveInteger'

export function positiveInteger(
  n: number,
  f: PositiveIntegerBehavior = defaultBehavior): PositiveInteger
{
  return f(n)
}

export type PositiveIntegerBehavior = (n: number) => PositiveInteger

function defaultBehavior(n: number): PositiveInteger {
  return Math.round(Math.abs(n)) || DEFAULT_VALUE
}

const DEFAULT_VALUE = 1

export type PositiveInteger = _PositiveInteger & number
