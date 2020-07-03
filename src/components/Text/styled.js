import styled from 'styled-components'

export const StyledText = styled.p`
  font-size: ${({ small }) => (small ? '1.2rem' : '1.8rem')};
  font-weight: 300;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.textSecondary};
  @media (min-width: 600px) {
    font-size: ${({ small }) => (small ? '1.4rem' : '2rem')};
  }
`
