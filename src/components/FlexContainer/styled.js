import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 90%;
  margin-bottom: 7.2rem;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`
