import styled from 'styled-components'

const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: normal;
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;
  strong {
    color: ${({ theme }) => theme.textSecondary};
  }
`

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textSecondary};
`

const SmallText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 300;
  margin: 0.5rem auto;
  color: ${({ theme, error }) => (error ? theme.error : theme.textSecondary)};

  @media (min-width: 600px) {
    text-align: left;
    margin-left: 3.2rem;
    font-size: 1.4rem;
  }
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
  margin: 3.2rem 0 6.4rem;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 10rem 0 2.8rem;

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

const Row = styled.div`
  padding: 1.6rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  margin: 0 auto;
  padding: 4.8rem 2.4rem;
  max-width: 120rem;

  :not(:first-of-type) {
    padding-top: 0;
  }
`

const StyledButton = styled.button`
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

const StyledFormField = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    width: 65%;
    align-self: flex-start;
  }
`

const StyledInput = styled.input`
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
export {
  FlexBox,
  Footer,
  Heading,
  Paragraph,
  Row,
  Section,
  StyledButton,
  StyledFormField,
  StyledInput,
  SmallText,
}
