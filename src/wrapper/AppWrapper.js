import React from 'react';
import NavigationDots from '../components/NavDots/navigation-dots.component'
import Socials from '../components/Socials/socials.component'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <Socials />
      <div className="app__wrapper app__flex">
        <Component />
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;