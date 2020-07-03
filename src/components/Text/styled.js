import styled from 'styled-components'

export const StyledText = styled.p`
  font-size: ${({ small }) => (small ? '1.2rem' : '1.5rem')};
  font-weight: 300;
  margin-bottom: 1.15em;
  color: ${({ theme, error }) => (error ? theme.error : theme.textSecondary)};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  @media (min-width: 600px) {
    font-size: ${({ small }) => (small ? '1.4rem' : '2rem')};
  }
`
