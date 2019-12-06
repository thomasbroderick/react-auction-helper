import React from 'react';
import { Grommet } from 'grommet';
import Layout from "./components/Layout/Layout";
import AppBar from "./components/Layout/AppBar";

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>Auction Helper</AppBar>
      <Layout />
    </Grommet>
  );
}

export default App;
