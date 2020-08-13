import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Redux

import store from './store/store';
import setAuthToken from './utils/setAuthToken';
import { loadUser, loadAccess ,getTimeZoneData } from './actions/auth'; //replace this : timezone@astitva

//Components imports

import Login from './pages/auth/Login';
import Routes from './components/routes/Routes';

import Alert from './components/alert/Alert';

//CSS imports
import './pages/userDetails/userDetails.css';
import './pages/home/HomeBeforeLogin.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/mediaquery.css';
import './components/live/time-zone.css';
import './pages/landingPages/landingPage.css';
import './assets/css/readliness.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = ({ isAuthenticated }) => {
	useEffect(() => {
		setAuthToken(localStorage.token);
		store.dispatch(loadUser());
		store.dispatch(loadAccess());
		store.dispatch(getTimeZoneData()); //add this : timezone@astitva
	}, []);

	return (
		<Router>
			<Fragment>
				<Alert />
				<Route component={Routes} />
			</Fragment>
		</Router>
	);
};

Login.propTypes = {
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(App);
