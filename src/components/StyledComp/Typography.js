import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: normal;
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;
  strong {
    color: ${({ theme }) => theme.textSecondary};
  }
`

export const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textSecondary};
`

export const SmallText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 300;
  margin: 0.5rem auto;
  color: ${({ theme, error }) => (error ? theme.error : theme.textSecondary)};

  @media (min-width: 600px) {
    text-align: left;
    margin-left: 3.2rem;
    font-size: 1.4rem;
  }
`
