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

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <GlobalStyles />
        <Logo />
        <Heading>
          We are launching <strong>soon!</strong>
        </Heading>
        <Text>Subscribe and get notified</Text>
        <FlexContainer>
          <FormInput />
          <Button label="Notify Me" />
        </FlexContainer>
        <Section>
          <Image source={dashboardImg} altText="Ping-product" />
        </Section>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
