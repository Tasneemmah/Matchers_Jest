const myTesting = require ('./say')

test ("test the welcome message",()=>{
    expect(myTesting("ahmad")).toBe("ahmad your name starts with a")
})