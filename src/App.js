import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Theme UI sample</h1>
    </ThemeProvider>
  );
}

export default App;
