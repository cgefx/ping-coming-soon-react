import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: normal;
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;
  strong {
    color: ${({ theme }) => theme.textSecondary};
  }
`

export const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textSecondary};
`
