import React from 'react';

import NavBar from './components/NavBar/NavBar.component'
import Header from './containers/Header/Header.component'
import About from './containers/About/About.component'

import './App.scss';

const App = () => (
  <div className="app">
    <NavBar />
    <Header />
    <About />
  </div>
);

export default App;