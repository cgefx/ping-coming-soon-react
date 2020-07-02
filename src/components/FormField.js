import React from 'react'
import { StyledInput, StyledFormField, SmallText } from './StyledComp'
import { emailRegEx } from '../utils'

const FormField = () => {
  const [email, setEmail] = React.useState('')

  const isValid = emailRegEx.test(email)

  const handleChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }
  return (
    <StyledFormField>
      <StyledInput
        error={!isValid}
        value={email}
        onChange={handleChange}
        placeholder="Your email address..."
      />
      {!isValid && (
        <SmallText error>Please provide a valid email address</SmallText>
      )}
    </StyledFormField>
  )
}

export default FormField
