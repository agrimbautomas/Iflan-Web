import React, { Component } from "react";
import './StatsSlide.scss';

class StatsSlide extends Component {

  constructor( props ) {
	super(props);
	this.state = {
	  temperature: this.props.temperature,
	  humidity: this.props.humidity,
	  datetime: this.parseDatetime(this.props.datetime)
	};
  }

  parseDatetime = ( datetime ) => {
	let dt = new Date(datetime);
	return dt.getUTCDay() + "/" + dt.getUTCMonth()
	  + " - " + dt.getHours() + ":" + dt.getMinutes();
  }

  render() {
	return (
	  <div
		className="stats-slide">
		<h5>{ this.state.temperature }</h5>
		<h6>{ this.state.humidity }</h6>
		<h6>{ this.state.datetime }</h6>
	  </div>
	);
  }
}

export default StatsSlide;
