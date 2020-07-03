import React from 'react'
import { StyledFooter } from './styled'
import { Row, Text, SocialLink } from '../../components'

const Footer = () => {
  return (
    <StyledFooter>
      <Row>
        <SocialLink>
          <i
            aria-label="facebook"
            className="fab fa-facebook-f footer__icon"
          ></i>
        </SocialLink>
        <SocialLink>
          <i aria-label="twitter" className="fab fa-twitter footer__icon"></i>
        </SocialLink>
        <SocialLink>
          <i
            aria-label="instagram"
            className="fab fa-instagram footer__icon"
          ></i>
        </SocialLink>
      </Row>
      <Row>
        <Text>&copy; Copyright Ping. All rights reserved.</Text>
      </Row>
    </StyledFooter>
  )
}

export default Footer
