const myTesting = require ('./say1')

test ("test the welcome message",()=>{
    expect(myTesting("ahmad")).toBe(" your name starts with a")
})