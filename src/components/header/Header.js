import React, { Component } from "react";
import SocketsService from "../../services/socketsService";
import TmpHum from "../tmpHum/TmpHum";
import spinner from "../../assets/img/spinner.gif";
import './Header.scss';
import { STATS_URL } from "../../config/urls"

class Header extends Component {

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

		  this.setState({
			isLoaded: true,
			tmp_hum: results.response.tmp_hum,
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


  render() {
	const { error, isLoaded } = this.state;
	if (error) {
	  return <div>Error: { error.message }</div>;
	} else if (!isLoaded) {
	  return <div className="spinner-container"><img src={ spinner } alt="iflan"/></div>;
	} else {
	  return this.renderStats()
	}
  }

  renderStats = () => {
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
			  <TmpHum props={ this.state.tmp_hum.last }/>
			</div>
		  </section>
		</div>
	  </div>
	)
  }

}


export default Header;
