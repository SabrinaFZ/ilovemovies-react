import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './Routes';
import Nav from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes />
      </> 
    </BrowserRouter>
  )
}

export default App;
