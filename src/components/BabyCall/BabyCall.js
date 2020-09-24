import React, { Component } from "react";
import './BabyCall.scss';
import { Link } from "react-router-dom";
import videojs from "video.js";

class BabyCall extends Component {


  componentDidMount() {
	this.player = videojs(this.videoNode, this.props)
  }

  componentWillUnmount() {
	if (this.player) {
	  this.player.dispose()
	}
  }


  videoStreaming = () => (
	<div className='video-frame'>
	  <div data-vjs-player style={ {
		width: 960, height: 540
	  } }>
		<video ref={ ( node ) => {
		  this.videoNode = node;
		} } className="video-js"/>
	  </div>
	</div>
  )

  render() {
	return (
	  <div className="full-card baby-call">
		<div className="inner">
		  <div className="header">
			<h2>BabyCall</h2>
		  </div>
		  <Link to='/' className='close'>
			<i className="fas fa-times"></i>
		  </Link>
		  { this.videoStreaming() }
		</div>
	  </div>
	);
  }
}


export default BabyCall;
