import { example } from "./test-example"

describe("example", () => {
  test("when passing two positive values sum is computed correctly", () => {
    expect(example(1, 2)).toEqual(3)
  })
})
