import React from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker'
import MainStatsContainer from './components/mainStatsContainer/MainStatsContainer';
import Header from "./components/header/Header";


class MainGrid extends React.Component {
  render() {
	return (
	  <div className="grid">
		<Header/>
		{/*<MainStatsContainer/>*/}
	  </div>
	)
  }
}

ReactDOM.render(
  <MainGrid/>,
  document.getElementById('root')
);

serviceWorker.register();

