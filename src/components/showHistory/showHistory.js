import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";

import SliderGallery from "./../generals/slider-gallery";

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class ShowHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      showList: [],
      open: false,
		}
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.showList);
    this.setState((state) => ({
      name: nextProps.showList.categoryName,
			showList: nextProps.showList.shows
    }));
  }
  
  componentDidMount(prevProps) {
		AOS.init();
  }
  
  getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      width: '90%',
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  render() {
    const { classes } = this.props;

		let gallery = [['1aladin.jpg', 'aestudio.jpg'], 
						['aladdin.jpg', 'aladdinestudio.jpg'], 
						['bella.jpg', 'bellaylego.jpg']]

    	return (
			<div className="section-espectaculos section-first">
				<div className="container container-sections-espectaculos">
					<div className="content-title-section" data-aos="zoom-in">
						<img className="title-section" src="/public/img/elementos/letrero-princesas.png" alt=""/>
						<p className="title-section-text">{this.state.name}</p>
					</div>

          <Grid container spacing={24}>
            {this.state.showList.map((item, key) => (
              <Grid item key={key} xs={6} sm={3}>
                <Link to={`/espectaculos/${item.showName}`}>
                  <ListItem
                    button
                    className="content-listShowHistory"
                    data-aos="zoom-in"
                  >  
                    <div>
                      { (item.showImg !== '') ?
                          <div>
                            <img style={{width: '100%'}} src={`https://bejunior.mx/jr/public/imgShowsHistory/${item.showImg}`} />
                          </div>
                        : null
                      }
                      <div className="listShowHistory">
                        <ListItemIcon>
                          <StarIcon className="icon" />
                        </ListItemIcon>
                        <ListItemText primary={item.showName} />
                      </div>
                    </div>
                  </ListItem>
                </Link>
              </Grid>
            ))}
          </Grid>

				</div>
				<div className="arrow-bottom">
					<img src="/public/img/backgrounds/triangulo-blanco.png" alt=""/>
					<div className="image-arrow-bottom"><img src="/public/img/elementos/hongos_quienes-somos.png" alt=""/></div>
				</div>
      </div>
    	);
  	}
}

ShowHistory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowHistory);
