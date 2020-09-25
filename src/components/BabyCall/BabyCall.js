import React, { Component } from "react";
import './BabyCall.scss';
import { Link } from "react-router-dom";
import { RASPI1_IP } from "../../config/urls";

class BabyCall extends Component {

  render() {
	return (
	  <div className="full-card baby-call">
		<div className="inner">
		  <div className="header">
			<h2>BabyCall</h2>
		  </div>
		  <img src={ "http://" + RASPI1_IP + "/video" }/>
		  <audio src={ "http://" + RASPI1_IP + ":8888/audio.mp3" } controls autoPlay={true}/>
		  <Link to='/' className='close'>
			<i className="fas fa-times"></i>
		  </Link>
		</div>
	  </div>
	);
  }
}


export default BabyCall;
