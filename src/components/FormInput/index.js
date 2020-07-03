import React from 'react'
import { StyledInput, StyledFormField, FeedBackText } from './styled'
import { emailRegEx } from '../../utils'
import AppContext from '../../store'

const FormField = () => {
  const [{ email, submitted }, dispatch] = React.useContext(AppContext)

  const isValid = emailRegEx.test(email)

  const handleChange = ({ target: { value } }) => {
    dispatch({ type: 'change', payload: { name: 'email', value } })
  }
  return (
    <StyledFormField>
      <StyledInput
        error={submitted && !isValid}
        value={email}
        onChange={handleChange}
        placeholder="Your email address..."
      />
      {submitted && !isValid && (
        <FeedBackText error>Please provide a valid email address</FeedBackText>
      )}
      {submitted && isValid && <FeedBackText>Success!</FeedBackText>}
    </StyledFormField>
  )
}

export default FormField
