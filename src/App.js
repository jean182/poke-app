/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <a href="/" sx={{color: 'primary'}}>Theme UI sample</a>
    </ThemeProvider>
  );
}

export default App;
