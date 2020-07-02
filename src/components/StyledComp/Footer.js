import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 10rem 0 2rem;

  button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 1px solid ${({ theme }) => theme.primaryLight};
    border-radius: 100%;
    padding: 1.2rem;
    background: white;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.primary};
    line-height: 0;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      color: white;
      background: ${({ theme }) => theme.primary};
      transform: rotate(360deg);
    }
  }

  button + button {
    margin-left: 1rem;
  }
`

export default Footer
