import styled from 'styled-components'

export const StyledFormField = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    width: 65%;
    align-self: flex-start;
  }
`

export const StyledInput = styled.input`
  padding: 2rem 3.2rem;
  border-radius: 10rem;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.error : theme.primaryLight)};
  width: 100%;
  outline: none;
  transition: all 0.5s;
  opacity: 0.5;
  font-size: 1.6rem;

  &:focus {
    opacity: 1;
  }

  &:placeholder {
    color: ${({ theme }) => theme.textPrimary};
  }
`
