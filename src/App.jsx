import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>Olá, mundo!</p>
    </ThemeProvider>
  );
}

export default App;
