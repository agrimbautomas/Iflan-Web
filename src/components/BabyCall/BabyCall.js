import React, { Component } from "react";
import './BabyCall.scss';
import { Link } from "react-router-dom";
import videojs from "video.js";

class BabyCall extends Component {


  componentDidMount() {
    // https://docs.videojs.com/docs/api/
	let videoJsOptions = {
	  autoplay: true,
	  controls: false,
	  textTrackSettings: false,
	  controlBar: false,
	  bigPlayButton: false,
	  loadingSpinner: false,
	  errorDisplay: false,
	  sources: [{
		src: 'http://192.168.0.3/hls/index.m3u8',
	  }]
	}
	this.player = videojs(this.videoNode, videoJsOptions)
  }

  componentWillUnmount() {
	if (this.player)
	  this.player.play()

  }

  videoStreaming = () => (
	<div className='video-frame'>
	  <div data-vjs-player style={ { width: 900 } }>
		<video className="video-js" ref={ ( node ) => {
		  this.videoNode = node;
		} }/>
	  </div>
	</div>
  );

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
