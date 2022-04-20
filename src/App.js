import React from 'react';

import NavBar from './components/NavBar/NavBar.component'
import Header from './containers/Header/Header.component'
import About from './containers/About/About.component'
import Skills from './containers/Skills/skills.component'
import Work from './containers/Work/work.component'
import './App.scss';

const App = () => (
  <div className="app">
    <NavBar />
    <Header />
    <About />
    <Work />
    <Skills />
  </div>
);

export default App;