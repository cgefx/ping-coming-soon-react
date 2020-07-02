import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 1.6rem 2rem;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border-radius: 10rem;
  outline: none;
  border: 0;
  transition: all 0.5s;
  font-weight: 700;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.textSecondary};
  }

  @media (min-width: 600px) {
    width: 30%;
    align-self: flex-start;
  }
`

export default StyledButton
