const myTesting = require ("./sum")


test ('return the number the user enterrd',()=>{
    expect(myTesting(10)).toBe(10)
})

