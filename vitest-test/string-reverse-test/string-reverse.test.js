import { describe,it,expect } from "vitest";
import { stringReverse } from "./string-reverse";


describe('Reverse string function Test',()=>{
    it('Testing with string',()=>{
        expect(stringReverse('suman')).toBe('namus')
        expect(stringReverse('')).toBe('')
        expect(stringReverse('H')).toBe('H')
    })
})