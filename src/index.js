import React from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker'
import App from "./App";
import { store } from './store/store';
import { Provider } from "react-redux";

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={ store }>
	<App/>
  </Provider>,
  rootElement
);


serviceWorker.register();
