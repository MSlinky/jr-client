import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from "./pages/Home";
import Espectaculos from "./pages/Espectaculos";
import Contact from "./pages/Contact";
import Footer from "./footer";

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#811c64'
    }
  },
});

const App = () => {
  return (
    <Router>
      <section>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/espectaculos" component={Espectaculos} />
            <Route exact path="/contacto" component={Contact} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </section>
    </Router>
  );
};

export default App;