const myTesting = require ("./sum2")


test ('calculate the tax',()=>{
    
    expect(myTesting(50,2,3)).toBe(55)
})