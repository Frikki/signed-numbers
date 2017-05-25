import { NonnegativeInteger, NonnegativeIntegerBehavior, nonnegativeInteger } from './'

import { eq } from '@briancavalier/assert'

describe(`NonnegativeInteger`, () => {
  it(`is a 'number' type`, () => {
    const sut: NonnegativeInteger = nonnegativeInteger(0)

    eq(typeof sut, 'number')
  })

  describe(`nonnegativeInteger`, () => {
    it(`sets the value`, () => {
      assertSetValue(0, 0)
      assertSetValue(1, 1)
    })

    it(`rounds the value to nearest integer`, () => {
      assertSetValue(0.49, 0)
      assertSetValue(0.5, 1)
      assertSetValue(1.5, 2)
    })

    it(`sets the value as absolute value`, () => {
      assertSetValue(-0.5, 0)
      assertSetValue(-1, 1)
      assertSetValue(-2, 2)
    })

    it(`defaults NaN to 0`, () => {
      assertSetValue(NaN, 0)
    })

    it(`can override default behavior`, () => {
      const defaultInfinity: NonnegativeIntegerBehavior =
        (n: number) => n || Infinity

      const sut = nonnegativeInteger(NaN, defaultInfinity)

      eq(sut, Infinity)
    })
  })

  it(`can be used arithmetically`, () => {
    const n1 = 1
    const n2 = 2
    const a = nonnegativeInteger(n1)
    const b = nonnegativeInteger(n2)

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
  const sut = nonnegativeInteger(n)

  eq(sut, expected)
}
