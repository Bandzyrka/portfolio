import React from 'react';

import NavBar from './components/NavBar/NavBar.component'
import Header from './containers/Header/Header.component'
import './App.scss';

const App = () => (
  <div className="app">
    <NavBar />
    <Header />
  </div>
);

export default App;