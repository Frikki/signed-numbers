import { PositiveInteger, PositiveIntegerBehavior, positiveInteger } from './'

import { eq } from '@briancavalier/assert'

describe(`PositiveInteger`, () => {
  it(`is a 'number' type`, () => {
    const sut: PositiveInteger = positiveInteger(1)

    eq(typeof sut, 'number')
  })

  describe(`positiveInteger`, () => {
    it(`sets the value`, () => {
      assertSetValue(1, 1)
      assertSetValue(2, 2)
    })

    it(`rounds the value to nearest integer`, () => {
      assertSetValue(0.5, 1)
      assertSetValue(1.49, 1)
      assertSetValue(1.5, 2)
    })

    it(`sets the value as absolute value`, () => {
      assertSetValue(-1, 1)
      assertSetValue(-2, 2)
      assertSetValue(-0.5, 1)
    })

    it(`defaults 0 to 1`, () => {
      assertSetValue(0, 1)
    })

    it(`defaults NaN to 1`, () => {
      assertSetValue(NaN, 1)
    })

    it(`can override default behavior`, () => {
      const defaultInfinity: PositiveIntegerBehavior = (n: number) => n || Infinity

      const sut = positiveInteger(0, defaultInfinity)

      eq(sut, Infinity)
    })
  })

  it(`can be used arithmetically`, () => {
    const n1 = 1
    const n2 = 2
    const a = positiveInteger(n1)
    const b = positiveInteger(n2)

    const added = a + b
    eq(added, n1 + n2)

    const subtracted = a - b
    eq(subtracted, n1 - n2)

    const multiplied = a * b
    eq(multiplied, n1 * n2)

    const divided = a / b
    eq(divided, n1 / n2)
  })
})

function assertSetValue(n: number, expected: number) {
  const sut = positiveInteger(n)

  eq(sut, expected)
}
