import React from 'react'
import { StyledInput, StyledFormField } from './styled'
import { Text } from '../../components'
import { emailRegEx } from '../../utils'

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
        <Text small error>
          Please provide a valid email address
        </Text>
      )}
    </StyledFormField>
  )
}

export default FormField
