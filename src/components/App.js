import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Espectaculos from "./pages/Espectaculos";
import Footer from "./footer";

const App = () => {
  return (
    <Router>
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/espectaculos" component={Espectaculos} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
};

export default App;