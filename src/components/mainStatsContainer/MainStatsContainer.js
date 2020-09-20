import React from "react";
import SocketsService from "../../services/socketsService"
import './MainStatsContainer.scss';
import spinner from '../../assets/img/spinner.gif';
import { STATS_URL } from "../../config/urls"

class MainStatsContainer extends React.Component {

  constructor( props ) {
	super(props);

	SocketsService.listenForNewWindLogs(this);

	this.state = {
	  error: null,
	  isLoaded: false,
	  stats: []
	};
  }

  componentDidMount = () => {
	fetch(STATS_URL)
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
    console.log('socketsCallback', data);
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
	return (
	  <div>
		<div className="stats-container">
		  <section className="stats-slider-container ">
			<div className="stats-slider">
			  {/*{ this.getTmpHum(this.state.tmp_hum.last) }*/ }
			</div>
		  </section>
		</div>
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


}

export default MainStatsContainer;
