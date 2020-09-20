import React, { Component } from "react";
import './TmpHum.scss';
import SocketsService from "../../services/socketsService";
import { STATS_URL } from "../../config/urls";
import Spinner from "../Spinner/Spinner";

class TmpHum extends Component {

  constructor( props ) {
	super(props);

	SocketsService.listenForNewWindLogs(this);

	this.state = {
	  temperature: null,
	  datetime: null,
	  humidity: null,
	};
  }

  parseDatetime = ( datetime ) => {
	let dt = new Date(datetime);
	let options = { hour: 'numeric', month: 'numeric', day: 'numeric', minute: 'numeric' };
	return dt.toLocaleString('es-AR', options)
  };

  setTmpHumState = ( tmp_hum_response ) => {
	let tmp_hum = tmp_hum_response.tmp_hum.last;
	this.setState({
	  isLoaded: true,
	  temperature: tmp_hum.temperature,
	  humidity: tmp_hum.humidity,
	  datetime: tmp_hum.created_at,
	});
  }

  socketsCallback = ( data ) => this.setTmpHumState(data.response);

  componentDidMount = () => {
	fetch(STATS_URL)
	  .then(res => res.json())
	  .then(
		( results ) => {
		  let tmp_hum = results.response.tmp_hum.last;
		  this.setTmpHumState(results.response);
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
	const { isLoaded } = this.state;
	if (!isLoaded) return <Spinner/>;
	return (
	  <div className="stats">
		<div className="datetime">Ult: { this.parseDatetime(this.state.datetime) }</div>
		<div>{ this.state.temperature }°</div>
		<div>{ this.state.humidity }%</div>
	  </div>
	);
  }
}


export default TmpHum;
