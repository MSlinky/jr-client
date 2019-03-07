import React from "react";
import HeaderEspectaculos from "./../generals/header-espectaculos";
import ShowHistory from "./../showHistory/showHistory";
import ShowHistoryBoys from "./../showHistory/showHistoryBoys";
import { refreshShowsHistories } from './../../state/actions/actions';
import { connect } from 'react-redux';

class Espectaculos extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			girlsList: [],
			category: []
		}
	}

	componentWillMount() {
		this.getAllShowsHistory();
	}

	componentDidMount() {
    window.scrollTo(0, 0)
  }

	getAllShowsHistory() {
		fetch(`https://bejunior.mx/api/showsHistory`, {
			mode :'cors', 
			method: 'GET',
			cache: 'no-cache',
			// credentials: 'include',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				if (data.data) {
					const info = data.data;
					const category = [];
					let lastCategory = '';
					info.forEach(element => {
						if (lastCategory !== element.categoryName) {
							lastCategory = element.categoryName;
							category.push({
								categoryName: lastCategory,
								shows: [
									{
										showId: element.showId,
										showName: element.showName,
										showImg: element.showImg,
										showDescription: element.showDescription
									}
								]
							});
						} else {
							category[category.length-1].shows.push({
								showId: element.showId,
								showName: element.showName,
								showImg: element.showImg,
								showDescription: element.showDescription
							});
						}
					});
					console.log(category);
					this.props.refreshShowsHistories(category);
					this.setState({
						category
					});
				}
			})
			.catch((err) => {
				console.log(err);
			})
	}
	
	render() {
		return (
		<div>
			<HeaderEspectaculos />
			{ this.props.showsHistories[0] ?
				<ShowHistory showList={this.props.showsHistories[0]} /> : null
			}
			{ this.props.showsHistories[1] ?
				<ShowHistoryBoys showList={this.props.showsHistories[1]} /> : null
			}
			{ this.props.showsHistories[2] ?
				<ShowHistory showList={this.props.showsHistories[2]} /> : null
			}
			{ this.props.showsHistories[3] ?
				<div className="section-last">
					<ShowHistoryBoys showList={this.props.showsHistories[3]} />
				</div>
				: null
			}
		</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    showsHistories: state && state.showsHistories ? state.showsHistories : []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshShowsHistories (showsHistories) {
      dispatch(refreshShowsHistories(showsHistories));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Espectaculos);
