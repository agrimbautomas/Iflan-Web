import React from "react";
import SocketsService from "../../services/socketsService"

import './MainStatsContainer.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import spinner from '../../assets/img/spinner.gif';
import StatsSlide from "../statsSlide/StatsSlide";

// const ENDPOINT = "http://localhost:3000/1";

const ENDPOINT = "http://api.iflan.house/1";


class MainStatsContainer extends React.Component {

  constructor( props ) {
	super(props);

	this.get_stats_url = ENDPOINT + "/stats";
	SocketsService.listenForNewWindLogs(this);

	this.state = {
	  error: null,
	  isLoaded: false,
	  stats: []
	};
  }

  componentDidMount = () => {
	fetch(this.get_stats_url)
	  .then(res => res.json())
	  .then(
		( results ) => {
		  console.log(results.response.tmp_hum);
		  this.setState({
			isLoaded: true,
			tmp_hum: results.response.tmp_hum,
			noise: results.response.noise,
		  });
		},
		( error ) => {
		  this.setState({
			isLoaded: true,
			error
		  });
		}
	  )
  }


  socketsCallback = ( data ) => {
	this.updateStats(data.stats);
  }

  updateStats = ( stats ) => {
	this.setState({
	  stats: stats
	});
  }


  render() {
	const { error, isLoaded } = this.state;
	if (error) {
	  return <div>Error: { error.message }</div>;
	} else if (!isLoaded) {
	  return <div className="spinner-container"><img src={ spinner } alt="iflan"/></div>;
	} else {
	  return this.renderLatestStatsView()
	}
  }


  renderLatestStatsView = () => {
	if (this.state.stats)
	  return this.displayStats();
	else
	  return this.displayPlaceholder();
  }

  displayStats = () => {
	let settings = {
	  slidesToShow: 5,
	  infinite: false,
	  slidesToScroll: 1

	};

	return (

	  <div className="stats-container">
		{/*{this.getLatestStatsView(this.state.stats.current)}*/ }

		<section className="stats-slider-container ">
		  <div className="stats-slider">
			{ this.getStatsSlide(this.state.tmp_hum.last) }
		  </div>
		</section>
	  </div>
	)
  }

  displayPlaceholder = () => {
	return (
	  <div className="stats-placeholder">
		<h1>No información disponible</h1>
	  </div>
	)
  }

  // Component Views
  // getLatestStatsView = (stats) => {
  //     return (
  //         <LatestStats
  //             key={stats.id}
  //             id={stats.id}
  //             speed={stats.speed}
  //             gust={stats.gust}
  //             hour={stats.hour}
  //             direction={stats.direction}
  //         />
  //     );
  // }

  getStatsSlide = ( stats ) => {
	return (
	  <StatsSlide
		key={ stats.id }
		id={ stats.id }
		temperature={ stats.temperature }
		humidity={ stats.humidity }
		datetime={ stats.created_at }
	  />
	);
  }

}

export default MainStatsContainer;
