import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from "./pages/Home";
import Espectaculos from "./pages/Espectaculos";
import Quienes from "./pages/Quienes";
import Contact from "./pages/Contact";
import Shows from "./pages/Shows";
import Events from "./pages/Events";
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
            <Route exact path="/quienesSomos" component={Quienes} />
            <Route exact path="/espectaculos" component={Espectaculos} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/shows" component={Shows} />
            <Route exact path="/espectaculos/:id" component={Events} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </section>
    </Router>
  );
};

export default App;