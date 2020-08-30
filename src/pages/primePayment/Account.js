import React, { Fragment, useState, useEffect } from 'react';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './Plan.css';
import './Account.css';
import { connect } from 'react-redux';
import { setAlert } from '../../../src/actions/alert';
import PropTypes from 'prop-types';


const Account = ({ setAlert, premiumLevel, plan_type, subscriptionId, subscription_status, expiry_date }) => {

	const [ premiumPlan, setPremiumPlan ] = useState('Basic');

	const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

	
	useEffect(() => {
	
		setPremiumPlan('Prime');
		
	}, [plan_type, premiumLevel]);

	return (
		<Fragment>
			<AfterLoggedInHeader />
			<div className="site-wrap page-payment-plan accntpgid">
				<div className="container-fluid">
					<div className="container">
						<div className="row accountmhead">
							<div className="">
								<div className="headplans">
									<div className="stepHeader-container">
										<div className="stepHeader">
											<h1 className="stepTitle">Account</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container accntmembership">
						<div className="row">
							<div className="col-md-4 accnthead">
								<div>
									<h3>MEMBERSHIP & BILLING</h3>
								</div>
							</div>
							<div className="col-md-4 accntdtls plandetails">
								<div>
									<ul>
										<li>{localStorage.user}</li>
										<li>Password: ******</li>
									</ul>
								</div>
							</div>
							<div className="col-md-4">
								<div className="cnclsubs">
									<Link to="/changePassword">
										<button>CHANGE PASSWORD</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
					
					<div className="container accntmembership">
						<div className="row">
							<div className="col-md-4 accnthead">
								<div>
									<h3>PLAN DETAILS</h3>
								</div>
							</div>
							<div className="col-md-4 accntdtls tbrdr">
								<div className="plandetails">
									<ul>
										<li>
											<h4 className="stepTitle">{premiumPlan}</h4>
										</li>
									</ul>
								</div>
							</div>
							
							{plan_type === 'one_time' && premiumPlan!=='Basic' && expiry_date!=='0000-00-00' && expiry_date!== null && (
								<div className="col-md-4 tbrdr">
									<div className="cnclsubs">
										<button>
											Expire On :{' '}
											{new Date(expiry_date).toLocaleDateString('en-US', DATE_OPTIONS)}{' '}
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
					
				</div>
			</div>

			<Footer />
		</Fragment>
	);
};

Account.propTypes = {
	setAlert: PropTypes.func.isRequired,
	premiumLevel: PropTypes.string.isRequired,
	plan_type: PropTypes.string.isRequired
};
const mapStateToProps = (state) => ({
	premiumLevel: state.auth.premiumLevel,
	plan_type: state.auth.plan_type,
	expiry_date: state.auth.expiry_date
});

export default connect(mapStateToProps, { setAlert })(Account);
