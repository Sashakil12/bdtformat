const {bdtFormat} = require("./index")
describe('trying out different data types',()=>{
    
    test('should reject string arg',()=>{
        const string = 'abc'
        expect(()=>bdtFormat(string)).toThrow()
    })
    test('should reject boolean arg',()=>{
        const boolean = 'abc'
        expect(()=>bdtFormat(boolean)).toThrow()
    })
    test('should reject objects as arg',()=>{
        const obj = {}
        expect(()=>bdtFormat(obj)).toThrow()
    })
    test('should reject arrays as arg',()=>{
        const arr = []
        expect(()=>
        bdtFormat(arr)).toThrow()
    })
    test('should reject really big int as arg',()=>{
        const int = 15245789963531444785632;
        expect(()=>
        bdtFormat(int)).toThrow()
    })
})

describe('should accept',()=>{
    test('int as arg',()=>{
        const int = 152
        expect(bdtFormat(int)).toBe('152')
    })
    test('float as arg',()=>{
        const float = 125.4
        expect(bdtFormat(float)).toBe('125.4')
    })
    
})

describe('should give accurate money string results for',()=>{
    test('ten\'s', ()=>{
        const tens = 10
        expect(bdtFormat(tens)).toBe('10')
    })
    test('thousand\'s', ()=>{
        const thousands = 1000
        expect(bdtFormat(thousands)).toBe('1,000')
    })
    test('thousand\'s', ()=>{
        const thousands = 1000
        expect(bdtFormat(thousands)).toBe('1,000')
    })
    test('ten thousand\'s', ()=>{
        const thousands = 10000
        expect(bdtFormat(thousands)).toBe('10,000')
    })
    
    test('lakhs ', ()=>{
        const lakhs = 100000
        expect(bdtFormat(lakhs)).toBe('1,00,000')
    })
    test('ten lakhs ', ()=>{
        const lakhs = 1000000
        expect(bdtFormat(lakhs)).toBe('10,00,000')
    })
    test('crore/ 100 lakhs ', ()=>{
        const lakhs = 10000000
        expect(bdtFormat(lakhs)).toBe('1,00,00,000')
    })
    test('10 crore/ 1000 lakhs ', ()=>{
        const num = 100000000
        expect(bdtFormat(num)).toBe('10,00,00,000')
    })
    test('100 crore', ()=>{
        const num = 1000000000
        expect(bdtFormat(num)).toBe('1,00,00,00,000')
    })
    test('1000 crore', ()=>{
        const num = 10000000000
        expect(bdtFormat(num)).toBe('10,00,00,00,000')
    })
    test('10,000 crore', ()=>{
        const num = 100000000000
        expect(bdtFormat(num)).toBe('1,00,00,00,00,000')
    })
    test('1 lakh crore', ()=>{
        const num = 1000000000000
        expect(bdtFormat(num)).toBe('10,00,00,00,00,000')
    })
})

describe("money string format should no start with a (,)", ()=>{
    test('ten thousand', ()=>{
        const thousands = 10000
        expect(bdtFormat(thousands)).not.toBe(",10,000")
    })
})