import { SignedNumberBehavior } from '../'
import { eq } from '@briancavalier/assert'

describe(`SignedNumber`, () => {
  describe(`SignedNumberBehavior`, () => {
    it(`is a function`, () => {
      const sut: SignedNumberBehavior = () => 0

      eq(typeof sut, 'function')
    })

    it(`requires a Number type argument`, () => {
      const sut: SignedNumberBehavior<Number> = () => 0

      Function.prototype(sut)
    })

    it(`accepts a number function argument`, () => {
      const sut: SignedNumberBehavior<Number> = (n: number) => n

      Function.prototype(sut)
    })
  })
})
