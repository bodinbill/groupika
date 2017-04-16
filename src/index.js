import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Home from './modules/Home'
import Demo from './modules/Demo'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Home} />
		<Route path="/demo" component={Demo} /> 
	</Router>
), document.getElementById('app'))
