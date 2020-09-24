import React, { Component } from "react";
import './BabyCall.scss';
class BabyCall extends Component {

  constructor( props ) {
	super(props);

  }


  render() {

	return (
	  <div className="baby-call">
		<div className="icon">
		  <i className="fas fa-camera-retro"></i>
		</div>
		<h2>BabyCall</h2>
	  </div>
	);
  }
}


export default BabyCall;
