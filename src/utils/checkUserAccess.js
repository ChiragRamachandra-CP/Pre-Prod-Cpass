import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const checkUserAccess = ({ premiumLevel, accountTrial, subscription_status }) => {
	//console.log(premiumLevel);
	//console.log(accountTrial);
	if (premiumLevel === 'Basic') {
		if (!accountTrial) {
			return <Redirect to="/expired" />;
		}
	} else if (subscription_status === 'cancelled') {
		if (!accountTrial) {
			return <Redirect to="/expired" />;
		}
	} else {
		//do nothing
	}
	return <Fragment />;
};

checkUserAccess.propTypes = {
	premiumLevel: PropTypes.string.isRequired,
	accountTrial: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
	premiumLevel: state.auth.premiumLevel,
	accountTrial: state.auth.accountTrial,
	subscription_status: state.auth.subscription_status
});

export default connect(mapStateToProps, null)(checkUserAccess);
