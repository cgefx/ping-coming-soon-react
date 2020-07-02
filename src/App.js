import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme } from './style'
import { Logo, FormField, Dashboard } from './components'
import {
  Footer,
  Heading,
  Paragraph,
  FlexBox,
  StyledButton,
} from './components/StyledComp'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <main className="app-container">
        <GlobalStyles />
        <Logo />
        <Heading>
          We are launching <strong>soon!</strong>
        </Heading>
        <Paragraph>Subscribe and get notified</Paragraph>
        <FlexBox>
          <FormField />
          <StyledButton>Notify Me</StyledButton>
        </FlexBox>
        <Dashboard />
        <Footer>
          <button>
            <ion-icon aria-label="facebook" name="logo-facebook"></ion-icon>
          </button>
          <button>
            <ion-icon aria-label="twitter" name="logo-twitter"></ion-icon>
          </button>
          <button>
            <ion-icon aria-label="instagram" name="logo-instagram"></ion-icon>
          </button>
        </Footer>
        <Paragraph style={{ marginBottom: '3.6rem' }}>
          &copy; Copyright Ping. All rights reserved.
        </Paragraph>
      </main>
    </ThemeProvider>
  )
}

export default App
