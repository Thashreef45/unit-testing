import {describe, expect, it } from 'vitest'
import { sum } from './sum'


describe('Tests for function sum()',()=>{
    it('adds 1 + 4 to equal 5', () => {
        expect(sum(1, 4)).toBe(5)
    })
})