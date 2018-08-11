import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Footer from "./footer";

const App = () => {
  return (
    <Router>
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
};

export default App;