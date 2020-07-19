import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopHeaderNoWarning from './TopHeaderNoWarning';
// import TopHeaderWarning from './TopHeaderWarning';

const AfterLoggedInHeader = ({ profileCompleted }) => {
	let header = <TopHeaderNoWarning />;
	if (!profileCompleted) {
		header = <TopHeaderNoWarning />;
	}
	return <Fragment>{header}</Fragment>;
};

AfterLoggedInHeader.propTypes = {
	profileCompleted: PropTypes.bool
};

const mapStateToProps = (state) => ({
	profileCompleted: state.auth.profileCompleted
});

export default connect(mapStateToProps, null)(AfterLoggedInHeader);
