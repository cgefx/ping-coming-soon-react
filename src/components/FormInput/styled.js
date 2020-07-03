import styled from 'styled-components'

export const StyledFormField = styled.div`
  margin-bottom: 1.6rem;
  @media (min-width: 600px) {
    width: 65%;
    align-self: flex-start;
    margin-right: 1.6rem;
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

export const FeedBackText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 300;
  margin-top: 0.5rem;
  margin-left: 3.2rem;
  color: ${({ theme, error }) => (error ? theme.error : theme.success)};
  @media (min-width: 600px) {
    font-size: 1.4rem;
  }
`
