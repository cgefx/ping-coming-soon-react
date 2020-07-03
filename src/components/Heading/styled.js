import styled from 'styled-components'

export const StyledHeading = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 1.6rem;

  @media (min-width: 600px) {
    font-size: 4rem;
  }
  strong {
    color: ${({ theme }) => theme.textSecondary};
  }
`
