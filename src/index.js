import React from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker'
import Header from "./components/Header/Header";
import HomeBlocksContainer from "./components/HomeBlocksContainer/HomeBlocksContainer";


class MainGrid extends React.Component {
  render() {
	return (
	  <div className="grid">
		<Header/>
		<HomeBlocksContainer/>
	  </div>
	)
  }
}

ReactDOM.render(
  <MainGrid/>,
  document.getElementById('root')
);

serviceWorker.register();

