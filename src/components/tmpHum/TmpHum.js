import React from "react";
import './TmpHum.scss';

const TmpHum = ( { props } ) => {

  const temperature = props.temperature;
  const humidity = props.humidity;
  const datetime = props.created_at;

  const parseDatetime = ( datetime ) => {
	let dt = new Date(datetime);
	let options = { hour: 'numeric', month: 'numeric', day: 'numeric', minute: 'numeric' };
	return dt.toLocaleString('es-AR', options)
  };

  return (
	<div className="stats">
	  <div className="datetime">{ parseDatetime(datetime) }</div>
	  <div>{ temperature }°</div>
	  <div>{ humidity }%</div>
	</div>
  );
}


export default TmpHum;
