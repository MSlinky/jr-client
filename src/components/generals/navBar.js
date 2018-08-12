import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import Hidden from '@material-ui/core/Hidden';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#df647c',
      main: '#602951',
      dark: '#750028',
      contrastText: '#fff',
    }
  },
});

const styles = {
  button: {

  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const fullListMenu = (
      <div>
        <Link to="/">
          <div className="listMenu">
            Inicio
          </div>
        </Link>
        <Link to="/QuienesSomos">
          <div className="listMenu">
            Quienes somos
          </div>
        </Link>
        <Link to="/Espectaculos">
          <div className="listMenu">
          Espectaculos
          </div>
        </Link>
        <Link to="/Contacto">
          <div className="listMenu">
            Contacto
          </div>
        </Link>
        <div className="redes-sociales">
          <div className="icon-social">
            <a href="">
              <svg version="1.1" id="Capa_1" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 49.652 49.652" className="iconFacebook">
                <g>
                  <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    
                  C49.652,11.137,38.516,0,24.826,0z M31,25.7h-4.039c0,6.453,0,14.396,0,14.396h-5.985c0,0,0-7.866,0-14.396h-2.845v-5.088h2.845    
                  v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.435,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.269,0.262-1.269,1.386v2.99h4.56L31,25.7z" 
                  data-original="#000000" className="hovered-path active-path" data-old_color="#ffffff" fill="#ffffff"/>
                </g>
              </svg>
            </a>
          </div>
          <div className="icon-social">
            <a href="">
              <svg version="1.1" id="Capa_1" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 49.652 49.652" className="iconTwitter">
                <g>
                  <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    
                  C49.652,11.137,38.516,0,24.826,0z M35.901,19.144c0.011,0.246,0.017,0.494,0.017,0.742c0,7.551-5.746,16.255-16.259,16.255    
                  c-3.227,0-6.231-0.943-8.759-2.565c0.447,0.053,0.902,0.08,1.363,0.08c2.678,0,5.141-0.914,7.097-2.446    
                  c-2.5-0.046-4.611-1.698-5.338-3.969c0.348,0.066,0.707,0.103,1.074,0.103c0.521,0,1.027-0.068,1.506-0.199    
                  c-2.614-0.524-4.583-2.833-4.583-5.603c0-0.024,0-0.049,0.001-0.072c0.77,0.427,1.651,0.685,2.587,0.714    
                  c-1.532-1.023-2.541-2.773-2.541-4.755c0-1.048,0.281-2.03,0.773-2.874c2.817,3.458,7.029,5.732,11.777,5.972    
                  c-0.098-0.419-0.147-0.854-0.147-1.303c0-3.155,2.558-5.714,5.713-5.714c1.644,0,3.127,0.694,4.171,1.804    
                  c1.303-0.256,2.523-0.73,3.63-1.387c-0.43,1.335-1.333,2.454-2.516,3.162c1.157-0.138,2.261-0.444,3.282-0.899    
                  C37.987,17.334,37.018,18.341,35.901,19.144z" data-original="#000000" className="active-path" data-old_color="#ffffff" fill="#ffffff"/>
                </g>
              </svg>
            </a>
          </div>
          <div className="icon-social">
            <a href="">
              <svg version="1.1" id="Capa_1" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 49.652 49.652" className="iconInstagram">
                <g>
                  <path d="M24.825,29.796c2.739,0,4.972-2.229,4.972-4.97c0-1.082-0.354-2.081-0.94-2.897c-0.903-1.252-2.371-2.073-4.029-2.073     c-1.659,0-3.126,0.82-4.031,2.072c-0.588,0.816-0.939,1.815-0.94,2.897C19.854,27.566,22.085,29.796,24.825,29.796z" data-original="#000000" className="active-path" data-old_color="#ffffff" fill="#ffffff"/>
                  <polygon points="35.678,18.746 35.678,14.58 35.678,13.96 35.055,13.962 30.891,13.975 30.907,18.762    " data-original="#000000" className="active-path" data-old_color="#ffffff" fill="#ffffff"/>
                  <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826     C49.652,11.137,38.516,0,24.826,0z M38.945,21.929v11.56c0,3.011-2.448,5.458-5.457,5.458H16.164     c-3.01,0-5.457-2.447-5.457-5.458v-11.56v-5.764c0-3.01,2.447-5.457,5.457-5.457h17.323c3.01,0,5.458,2.447,5.458,5.457V21.929z" data-original="#000000" className="active-path" data-old_color="#ffffff" fill="#ffffff"/>
                  <path d="M32.549,24.826c0,4.257-3.464,7.723-7.723,7.723c-4.259,0-7.722-3.466-7.722-7.723c0-1.024,0.204-2.003,0.568-2.897     h-4.215v11.56c0,1.494,1.213,2.704,2.706,2.704h17.323c1.491,0,2.706-1.21,2.706-2.704v-11.56h-4.217     C32.342,22.823,32.549,23.802,32.549,24.826z" data-original="#000000" className="active-path" data-old_color="#ffffff" fill="#ffffff"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );

    return (
        <MuiThemeProvider theme={theme}>
          <AppBar position="sticky" color="primary">
            <div className="container">
              <Toolbar>
                <Hidden smUp>
                  <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                  <div className="logoMenu">
                    <Link to="/">
                      <img src="/public/img/logos/logo_JR.png"/>
                    </Link>
                  </div>
                </Hidden>

                <Hidden xsDown>
                  <Typography variant="title" className={classes.flex}>
                    <div className="logoScreen">
                      <Link to="/">
                        <img src="/public/img/logos/logo_JR.png"/>
                      </Link>
                    </div>
                    <div className="menuScreen">
                      {fullListMenu}
                    </div>
                  </Typography>
                </Hidden>
              </Toolbar>
            </div>

            <Hidden smUp>
              <SwipeableDrawer
                open={this.state.left}
                onClose={this.toggleDrawer('left', false)}
                onOpen={this.toggleDrawer('left', true)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                > 
                  <div className="menuMovile">
                    {fullListMenu}
                  </div>
                </div>
              </SwipeableDrawer>
            </Hidden>
            
          </AppBar>
        </MuiThemeProvider>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);