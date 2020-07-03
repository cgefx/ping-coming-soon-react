import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

    *,
  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
	  font-size: 62.5%; // 1rem = 10px
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    font-family: 'Libre Franklin', sans-serif;
    text-rendering: optimizeSpeed;
    line-height: 1.65;
    font-size: 2rem;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input {
	border-radius: 0;
	outline: 0;
	border: none;
	background-color: transparent;
	font-family: inherit;

	&:focus {
		outline: none;
	}
	&::placeholder {
		color: inherit;
	}
}

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
    display: inline-block;
  }

  .app-container {
    margin: 0 auto;
    padding-top: 8rem;
    width: min(60rem, 90%);
    text-align: center;
  }
`

export default GlobalStyles
