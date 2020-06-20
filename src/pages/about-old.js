import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Link from "../components/link"
import Meta from "../components/meta"
import ContactForm from "../components/contact-form"
import Modal from "../components/modal"

const ContactFormStyled = styled(ContactForm)``

const Container = styled.div`
  ${ContactFormStyled} {
    margin-top: 4em;
  }
`

const AboutPage = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <Container>
      <Meta title="About" description="This is the about us page." />

      <article className="styled">
        <h1>About</h1>

        <p>
          This is about us page. Go back to the <Link to="/">homepage</Link> or
          {` `}
          <button
            data-testid="ToggleModalButton"
            type="button"
            className="styled-a"
            onClick={() => setModalOpen(!isModalOpen)}
          >
            open the modal
          </button>
          .
        </p>
      </article>

      <ContactFormStyled />

      {isModalOpen && (
        <Modal closeClick={() => setModalOpen(false)}>
          <div className="styled">
            <h2 className="do-unstyle styled-h1">Hi!</h2>
            <p>There.</p>
          </div>
        </Modal>
      )}
    </Container>
  )
}

export default AboutPage

AboutPage.propTypes = {
  data: PropTypes.object,
}
