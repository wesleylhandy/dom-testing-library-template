import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rem } from "polished"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import Button from "./button"
import Field from "./form/field"

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  champion: Yup.string().required(),
  terms: Yup.boolean().termsAndConditions(),
})

const initialValues = {
  name: ``,
  email: ``,
  champion: ``,
  terms: false,
}

const StyledField = styled(Field)``

const Row = styled.div`
  display: flex;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: ${rem(40)};
  }

  ${StyledField}:nth-of-type(1) {
    padding-right: ${rem(6)};
  }

  ${StyledField}:nth-of-type(2) {
    padding-left: ${rem(6)};
  }
`

const Done = styled.p`
  margin-top: 1em;
`

const Container = styled.div`
  width: 100%;
`

const SubmitRow = styled(Row)`
  @media ${(props) => props.theme.smallUp} {
    margin-top: ${rem(60)};
  }

  @media ${(props) => props.theme.smallDown} {
    margin-top: ${rem(30)};
  }
`

class ContactForm extends React.Component {
  name = ``

  state = {
    submitted: false,
  }

  submit = (formData) => {
    this.name = formData.name
    this.setState({ submitted: true })
  }

  render() {
    const { className } = this.props
    const { submitted } = this.state

    return (
      <Container className={className}>
        {submitted && <Done>Well done, {this.name}!</Done>}

        {!submitted && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.submit}
          >
            {() => (
              <Form>
                <Row>
                  <StyledField name="first-name" label="First Name" />
                  <StyledField name="last-name" label="Last Name" />
                </Row>

                <Row>
                  <Field name="email" type="email" label="Email" />
                </Row>

                <Row>
                  <Field name="subject" label="subject" />
                </Row>

                <Row>
                  <Field name="message" label="message" type="textarea" />
                </Row>

                {/* <Row>
                  <Field
                    name="champion"
                    component="select"
                    label="Champion of the world"
                  >
                    <option value="">Choose one…</option>
                    <option value="1">Farrokh Bulsara</option>
                    <option value="2">Ibra</option>
                    <option value="3">Ali</option>
                    <option value="4">MJ</option>
                    <option value="5">jQuery</option>
                  </Field>
                </Row> */}

                {/* <Row>
                  <Field
                    name="terms"
                    type="checkbox"
                    label="I accept the privacy policy and terms and conditions"
                  />
                </Row> */}

                <SubmitRow>
                  <Button type="submit">
                    <span>Send</span>
                  </Button>
                </SubmitRow>
              </Form>
            )}
          </Formik>
        )}
      </Container>
    )
  }
}

ContactForm.propTypes = {
  className: PropTypes.string,
}

export default ContactForm
