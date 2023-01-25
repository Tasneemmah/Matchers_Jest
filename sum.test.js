let myTesting = require('./sum' )



test ("this is to see the sum of two numbers",()=>{
    expect(myTesting(5,15)).toBe(20)
})