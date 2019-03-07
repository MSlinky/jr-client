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

class ShowHistoryBoys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      showList: [],
      open: false,
		}
  }
  componentWillReceiveProps(nextProps) {
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

		let gallery = [['1batman.jpg', 'batman1.jpg'], 
						['batmanyguason.jpg', 'gastonmusculo.jpg'], 
						['wars.jpg', 'súper.jpg']]

    	return (
        <div className="section-espectaculos section-super">
        <div className="container">
          <div data-aos="zoom-in">
						<p className="title-section-text niños">{this.state.name}</p>
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
                          <StarIcon className="icon white" />
                        </ListItemIcon>
                        <ListItemText className="white" primary={item.showName} />
                      </div>
                    </div>
                  </ListItem>
                </Link>
              </Grid>
            ))}
          </Grid>
				</div>
      </div>
    	);
  	}
}

ShowHistoryBoys.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowHistoryBoys);
