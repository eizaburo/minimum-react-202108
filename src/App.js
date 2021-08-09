import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Header from './Header';
import MainHome from './MainHome';
import MainContact from './MainContact';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Header />
        <Switch>
          <Route path="/" exact component={MainHome} />
          <Route path="/contact" exact component={MainContact} />
          <Route render={() => (<p>Page not found.</p>)} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
