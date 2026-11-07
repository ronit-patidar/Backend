const add = require("./math");

test("Addition of two numbers",()=>{
  expect(add(2,3)).toBe(5)
})