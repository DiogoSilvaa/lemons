import "@testing-library/jest-dom"
import { Typography } from "./typography"
import { render } from "@testing-library/react"

describe("Typography", () => {
  test("when passing small size, color primary and  text `hello`", () => {
    const { getByText } = render(
      <Typography size='small' color='primary' text='hello' className='my-60' />
    )
    const element = getByText("hello")
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass("text-sm")
    expect(element).toHaveClass("text-primary")
    expect(element).toHaveClass("my-60")
  })
})
