import styled from 'styled-components'

export const StyledHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: normal;

  @media (min-width: 900px) {
    font-size: 4rem;
  }
  strong {
    color: ${({ theme }) => theme.textSecondary};
  }
`
