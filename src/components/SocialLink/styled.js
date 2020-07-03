import styled from 'styled-components'

export const StyledSocialLink = styled.a`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.4rem;
  width: 2.4rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.primaryLight};
  border-radius: 100%;
  padding: 2rem;
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

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`
