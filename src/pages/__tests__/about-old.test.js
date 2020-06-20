import * as React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import AboutOldPage from "../about-old"

jest.mock(`../../components/link`)
jest.mock(`../../components/meta`)
jest.mock(`../../components/modal`)
jest.mock(`../../components/contact-form`)

describe(`AboutOldPage`, () => {
  it(`renders without error`, () => {
    render(<AboutOldPage />)
  })
  it(`renders Meta`, () => {
    const { getByTestId } = render(<AboutOldPage />)
    const meta = getByTestId(`Meta`)
    expect(meta).toBeInTheDocument()
  })
  it(`renders ContactForm`, () => {
    const { getByTestId } = render(<AboutOldPage />)
    const contactForm = getByTestId(`ContactForm`)
    expect(contactForm).toBeInTheDocument()
  })
  it(`opens and closes Modal on Button Click`, () => {
    const { getByTestId } = render(<AboutOldPage />)
    // initially modal is closed
    let modal = screen.queryAllByTestId(`Modal`)
    expect(modal).toHaveLength(0)
    // open on first button click
    const button = getByTestId(`ToggleModalButton`)
    fireEvent.click(button)

    modal = screen.queryAllByTestId(`Modal`)
    expect(modal).toHaveLength(1)
    // close when clicked again
    fireEvent.click(modal)
    modal = screen.queryAllByTestId(`Modal`)
    expect(modal).toHaveLength(0)
  })
})
