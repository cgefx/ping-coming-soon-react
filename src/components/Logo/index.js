import React from 'react'
import LogoImage from '../../images/logo.svg'
import { Wrapper } from './styled'

const Logo = () => {
  return (
    <Wrapper>
      <img src={LogoImage} alt="Ping Logo" />
    </Wrapper>
  )
}

export default Logo
