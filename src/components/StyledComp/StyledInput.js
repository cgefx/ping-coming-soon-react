import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 1.6rem 2rem;
  border-radius: 10rem;
  border: 1px solid ${({ theme }) => theme.primaryLight};
  width: 100%;
  outline: none;
  transition: 0.5s;
  color: ${({ theme }) => theme.textSecondary};
`

export default StyledInput
