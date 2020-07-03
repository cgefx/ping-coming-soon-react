import React from 'react'
import { StyledText } from './styled'

const Text = ({ children, error, small }) => {
  return (
    <StyledText error={error} small={small}>
      {children}
    </StyledText>
  )
}

export default Text
