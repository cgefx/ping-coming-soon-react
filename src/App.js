import React from 'react'
import { ThemeProvider } from 'styled-components'
import dashboardImg from './images/illustration-dashboard.png'
import { GlobalStyles, lightTheme } from './style'
import {
  Button,
  FlexContainer,
  Footer,
  FormInput,
  Heading,
  Image,
  Layout,
  Logo,
  Section,
  Text,
} from './components'
import { Provider } from './store'
import reducer, { initialState } from './reducer'

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  function handleSubmit() {
    dispatch({ type: 'change', payload: { name: 'submitted', value: true } })
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <Provider value={[state, dispatch]}>
        <Layout>
          <GlobalStyles />
          <Logo />
          <Heading>
            We are launching <strong>soon!</strong>
          </Heading>
          <Text>Subscribe and get notified</Text>
          <FlexContainer>
            <FormInput />
            <Button onClick={handleSubmit} label="Notify Me" />
          </FlexContainer>
          <Section>
            <Image source={dashboardImg} altText="Ping-product" />
          </Section>
          <Footer />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}

export default App
