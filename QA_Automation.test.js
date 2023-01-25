const myTesting = require('./QA_Automation')

test("to test the number of items inside ma array", () => {
    expect(myTesting.length).toBe(7)
})

test("test the number of items inside ma array", () => {
    expect(myTesting).toContain("ahmad")
})

test("test the number of items inside ma array", () => {
    expect(myTesting).not.toContain("lama")
})

test(" same as pervious one to check if my arraydose not contains the name abed", () => {
    for (let i = 0; i < myTesting.length; i++) {
        expect(myTesting).not.toContain("lama");
    }
});

test(" tocheck if my array dosent have any number inside it", () => {
    for (let i = 0; i < myTesting.length; i++) {
        expect(isNaN(myTesting[i])).toBe(true)
    }
});