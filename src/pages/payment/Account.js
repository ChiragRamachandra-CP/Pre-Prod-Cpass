import React, { Fragment, useState, useEffect } from 'react';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './Plan.css';
import axios from 'axios';
import './Account.css';
import { connect } from 'react-redux';
import { setAlert } from '../../../src/actions/alert';
import PropTypes from 'prop-types';
import { SubscriptionCancel } from '../../config/success';
import { error } from '../../config/error';

import { APIcancelRazorpaySubscription } from '../../config/API';
import { APIgetSubscrptionById } from '../../config/API';

const Account = ({ setAlert, premiumLevel, plan_type, subscriptionId, subscription_status, expiry_date }) => {
	const [ changeCardURL, setChangeCardURL ] = useState('');

	const [ premiumPlan, setPremiumPlan ] = useState('Basic');

	const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

	const payMonthlyHandler = async (cycleEndValue) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.token}`
				}
			};
			const body = {
				subscriptionId: subscriptionId,
				cancelAtCycleEnd: cycleEndValue
			};

			const result = await axios.post(APIcancelRazorpaySubscription, body, config);

			//console.log(result.data.status);

			if (result.data.status === true) {
				setAlert(SubscriptionCancel, 'success');
			} else {
				setAlert(error, 'error');
			}
		} catch (error) {
			//do nothing for now
		}
	};

	useEffect(() => {
		if (plan_type === 'subscription') {
			const fetchData = async () => {
				try {
					const config = {
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${localStorage.token}`
						}
					};
					const result = await axios.get(`${APIgetSubscrptionById}${subscriptionId}`, config);

					//console.log(result.data.data.short_url);

					setChangeCardURL(result.data.data.short_url);
				} catch (error) {
					//do nothing for now
				}
			};
			fetchData();
			if (subscription_status === 'active') {
				setPremiumPlan(premiumLevel);
			}
		} else {
			setPremiumPlan(premiumLevel);
		}
	}, [plan_type, premiumLevel, subscriptionId, subscription_status]);

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
					{/* <div className="container accntmembership">
                        <div className="row">
                            <div className="col-md-4 accnthead">
                                <div>
                                    <h3>CARD DETAILS</h3>
                                </div>
                            </div>
                            <div className="col-md-4 accntdtls plandetails tbrdr">
                                <div>
                                    <ul>
                                        <li>**** **** **** ****</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 tbrdr">
                                <div className="cnclsubs">
                                    <button>UPDATE CARD</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
							{plan_type === 'subscription' &&
							subscription_status === 'active' && (
								<div className="col-md-4 tbrdr">
									<div className="cnclsubs">
										<a href={`${changeCardURL}`} target="_BLANK" rel="noopener noreferrer">
											<button>CHANGE CARD</button>
										</a>
									</div>
									<div className="cnclsubs">
										<button onClick={() => payMonthlyHandler(false)}>CANCEL SUBSCRIPTION</button>
									</div>
									{/* <div className="cnclsubs">
                                        <button onClick={() => payMonthlyHandler(true)}>CANCEL SUBSCRIPTION END</button>
                                    </div> */}
								</div>
							)}
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
					{/* <div className="container accntmembership">
                        <div className="row">
                            <div className="col-md-4 accnthead">
                            </div>
                            <div className="col-md-8 accntdtls tbrdr">
                                <div className="pointsaccnt">
                                    <ul>
                                        <li>College Admission Information Session - All Countries</li>
                                        <li>College Application Strategy Session - All Countries</li>
                                        <li>College Admission Expert Interviews - All Countries</li>
                                        <li>Essay Writing: Workshops & Expert Interviews</li>
                                        <li>Video Lessons: College Admission Information & Strategy Sessions</li>
                                        <li>Campus Tours - All Countries</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
	subscriptionId: state.auth.subscriptionId,
	subscription_status: state.auth.subscription_status,
	expiry_date: state.auth.expiry_date
});

export default connect(mapStateToProps, { setAlert })(Account);
