import React from "react";
import AppRouter from "./Router";
import GlobalStyles from "../Styles/GlobalStyles";
import theme from "../Styles/theme";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo-hooks";
import client from "../Apollo/Client";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <AppRouter isLoggedIn={false} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
