import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 2rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 1.6rem;
  border-radius: 10rem;
  outline: none;
  border: 0;
  transition: 0.5s;
  font-weight: 700;
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadowPrimary};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: translateY(-2px);
  }

  @media (min-width: 600px) {
    width: 50%;
    /* align-self: flex-start; */
  }
`
