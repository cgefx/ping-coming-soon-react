import React from 'react'
import { StyledButton } from './styled'

const Button = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}

export default Button
