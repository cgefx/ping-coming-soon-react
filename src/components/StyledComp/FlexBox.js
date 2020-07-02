import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
  margin: 2.4rem 0;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export default FlexBox
