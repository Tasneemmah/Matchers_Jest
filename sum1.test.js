let myTesting = require('./sum1')

test ("this is to see the sun of two numbers",()=>{
    expect(myTesting(3,7)).toBe(10)
})

test ("this is to see the sun of three numbers",()=>{
    expect(myTesting(5,8,1)).toBe(14)
})

test.skip ("this is to see the sun of unknown numbers",()=>{
    expect(myTesting(3,5,8,2,5,1,9,4)).toBe(37)
})

test ("this is to see the sun of unknown numbers",()=>{
    expect(myTesting(3,5,8,2,5,1,9,4)).toBe(37)
})