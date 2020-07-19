import React, { Fragment, useState, useEffect } from 'react';
import AfterLoggedInHeader from '../../../header/AfterLoggedInHeader';
import Footer from '../../../footer/Footer';
import axios from 'axios';
import './Plan.css';

import {
	apiKey,
	image,
	color,
	createOrderURL,
	getGeoInfoURL,
	paymentSuccessURL,
	oneDayTextIND,
	oneDayTextUSD,
	oneDayCostIND,
	oneDayPaiseIND,
	oneDayCurrencyIND,
	oneDaySubscriptionIdIND,
	oneDayCostUSD,
	oneDayCentsUSD,
	oneDayCurrencyUSD,
	oneDaySubscriptionIdUSD,
	oneYearTextIND,
	oneYearTextUSD,
	oneYearCostIND,
	oneYearPaiseIND,
	oneYearCurrencyIND,
	oneYearSubscriptionIdIND,
	oneYearCostUSD,
	oneYearCentsUSD,
	oneYearCurrencyUSD,
	oneYearSubscriptionIdUSD,
	subTextIND,
	subTextUSD
} from '../../../config/PlanContent';

const Plan = () => {
	const [ orderId, setOrderID ] = useState();
	const [ subscriptionID, setSubscriptionID ] = useState('');
	const [ countryName, setcountryName ] = useState();

	useEffect(() => {
		getGeoInfo();
	}, []);

	const getGeoInfo = () => {
		fetch(getGeoInfoURL)
			.then(function(response) {
				if (response.status !== 200) {
					//console.log('Looks like there was a problem. Status Code: ' + response.status);
					return;
				}
				// Examine the text in the response
				response.json().then(function(data) {
					setcountryName(data.country);
				});
			})
			.catch(function(err) {
				//console.log('Fetch Error :-S', err);
			});
	};

	const onClickPaymentHandler = async (type) => {
		let body = null;
		//console.log(type);
		if (countryName === 'IN') {
			// If in India

			if (type === 'year') {
				// if one year in India
				body = {
					amount: parseInt(oneYearCostIND),
					currency: oneYearCurrencyIND,
					plan_id: parseInt(oneYearSubscriptionIdIND)
				};
			} else {
				//if one day in India
				body = {
					amount: parseInt(oneDayCostIND),
					currency: oneDayCurrencyIND,
					plan_id: parseInt(oneDaySubscriptionIdIND)
				};
			}
		} else {
			// if Outside india

			if (type === 'year') {
				body = {
					amount: parseInt(oneYearCostUSD),
					currency: oneYearCurrencyUSD,
					plan_id: parseInt(oneYearSubscriptionIdUSD)
				};
			} else {
				body = {
					amount: parseInt(oneDayCostUSD),
					currency: oneDayCurrencyUSD,
					plan_id: parseInt(oneDaySubscriptionIdUSD)
				};
			}
		}
		//Body is generated dynamically
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.token}`
				}
			};
			const res = await axios.post(createOrderURL, body, config);

			setOrderID(res.data.data.id);

			onClickPaymentSubmit(type);
		} catch (err) {
			//console.error(err);
		}
	};

	const onClickPaymentSubmit = (type) => {
		var options = null;
		if (countryName === 'IN') {
			// If in India

			if (type === 'year') {
				// if one year in India
				options = {
					key: apiKey,
					amount: oneYearPaiseIND,
					currency: oneYearCurrencyIND,

					description: 'Collegepass: ' + oneYearTextIND,
					image: image,
					order_id: orderId,
					handler: function(response) {
						//console.log(response);

						//Success
						//https://api.collegepass.org/api/v1/payment/sendSuccessPaymentResponse
						try {
							const config = {
								headers: {
									'Content-Type': 'application/json',
									Authorization: `Bearer ${localStorage.token}`
								}
							};
							const body = {
								payment_id: response.payment_id,
								razorpay_signature: response.razorpay_signature,
								user_id: '3',
								razorpay_subscription_id: null,
								order_id: response.order_id,
								plan_duration: null
							};
							const res = axios.post(paymentSuccessURL, body, config).then(function(response) {
								if (response.status !== 200) {
									//console.log('Looks like there was a problem. Status Code: ' + response.status);
									return;
								}
								// Examine the text in the response
								response.json().then(function(data) {
									//successfully entered to DB
									//console.log(response);
								});
							});
						} catch (err) {
							//console.error(err);
						}
					},
					prefill: {
						email: localStorage.user
					},
					theme: {
						color: color
					}
				};
			} else {
				//if one day in India
				options = {
					key: apiKey,
					amount: oneDayPaiseIND,
					currency: oneDayCurrencyIND,

					description: 'Collegepass: ' + oneDayTextIND,
					image: image,
					order_id: orderId,
					handler: function(response) {
						//console.log(response);

						//console.log(response);

						//Success
						//https://api.collegepass.org/api/v1/payment/sendSuccessPaymentResponse
						try {
							const config = {
								headers: {
									'Content-Type': 'application/json',
									Authorization: `Bearer ${localStorage.token}`
								}
							};
							const body = {
								payment_id: response.payment_id,
								razorpay_signature: response.razorpay_signature,
								user_id: '3',
								razorpay_subscription_id: null,
								order_id: response.order_id,
								plan_duration: null
							};
							const res = axios.post(paymentSuccessURL, body, config).then(function(response) {
								if (response.status !== 200) {
									//console.log('Looks like there was a problem. Status Code: ' + response.status);
									return;
								}
								// Examine the text in the response
								response.json().then(function(data) {
									//successfully entered to DB
									//console.log(response);
								});
							});
						} catch (err) {
							//console.error(err);
						}
					},
					prefill: {
						email: localStorage.user
					},
					theme: {
						color: color
					}
				};
			}
		} else {
			// if Outside india

			if (type === 'year') {
				options = {
					key: apiKey,
					amount: oneYearCentsUSD,
					currency: oneYearCurrencyUSD,

					description: 'Collegepass: ' + oneYearTextUSD,
					image: image,
					order_id: orderId,
					handler: function(response) {
						//console.log(response);

						//console.log(response);

						//Success
						//https://api.collegepass.org/api/v1/payment/sendSuccessPaymentResponse
						try {
							const config = {
								headers: {
									'Content-Type': 'application/json',
									Authorization: `Bearer ${localStorage.token}`
								}
							};
							const body = {
								payment_id: response.payment_id,
								razorpay_signature: response.razorpay_signature,
								user_id: '3',
								razorpay_subscription_id: null,
								order_id: response.order_id,
								plan_duration: null
							};
							const res = axios.post(paymentSuccessURL, body, config).then(function(response) {
								if (response.status !== 200) {
									//console.log('Looks like there was a problem. Status Code: ' + response.status);
									return;
								}
								// Examine the text in the response
								response.json().then(function(data) {
									//successfully entered to DB
									//console.log(response);
								});
							});
						} catch (err) {
							//console.error(err);
						}
					},
					prefill: {
						email: localStorage.user
					},
					theme: {
						color: color
					}
				};
			} else {
				// one day outside India
				options = {
					key: apiKey,
					amount: oneDayCentsUSD,
					currency: oneDayCurrencyUSD,

					description: 'Collegepass: ' + oneDayTextUSD,
					image: image,
					order_id: orderId,
					handler: function(response) {
						//console.log(response);

						//console.log(response);

						//Success
						//https://api.collegepass.org/api/v1/payment/sendSuccessPaymentResponse
						try {
							const config = {
								headers: {
									'Content-Type': 'application/json',
									Authorization: `Bearer ${localStorage.token}`
								}
							};
							const body = {
								payment_id: response.payment_id,
								razorpay_signature: response.razorpay_signature,
								user_id: '3',
								razorpay_subscription_id: null,
								order_id: response.order_id,
								plan_duration: null
							};
							const res = axios.post(paymentSuccessURL, body, config).then(function(response) {
								if (response.status !== 200) {
									//console.log('Looks like there was a problem. Status Code: ' + response.status);
									return;
								}
								// Examine the text in the response
								response.json().then(function(data) {
									//successfully entered to DB
									//console.log(response);
								});
							});
						} catch (err) {
							//console.error(err);
						}
					},
					prefill: {
						email: localStorage.user
					},
					theme: {
						color: color
					}
				};
			}
		}

		let rzp = new window.Razorpay(options);
		rzp.open();
	};

	// const onSubscriptionHandler = async () => {
	// 	try {
	// 		const config = {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Authorization: `Bearer ${localStorage.token}`
	// 			}
	// 		};
	// 		const res = await axios.post(
	// 			'https://api.collegepass.org/api/v1/payment/createRazorpaySubcription',
	// 			{
	// 				plan_id: subscriptionID
	// 			},
	// 			config
	// 		);

	// 		console.log(res.data.data.id);
	// 		setSubconfirmID(res.data.data.id);

	// 		OnSubSubmission();
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };

	// const OnSubSubmission = () => {
	// 	var options = {
	// 		key: 'rzp_test_sCaHB0FPYkOJeC',
	// 		subscription_id: subconfirmID,
	// 		subscription_card_change: 0,
	// 		name: 'Collegepass Test',
	// 		description: 'Monthly Test Plan',
	// 		image: 'https://www.collegepass.org/assets/images/holo.png',
	// 		handler: function(response) {
	// 			console.log(response);
	// 			//console.log(response.razorpay_subscription_id),
	// 			//console.log(response.razorpay_signature);
	// 			// pay_EjqnjtlGxUkEkz
	// 			// sub_EjqnFjv9WhSjBD
	// 			// 224af56a9ea8189fbf49090a157e2993fc776628dece0d65b62876aa6e6c5b59
	// 		},
	// 		prefill: {
	// 			name: 'Astitva Srivastava',
	// 			email: 'astitva.s@collegepass.org'
	// 		},

	// 		theme: {
	// 			color: '#e6a851'
	// 		}
	// 	};

	// 	let rzp = new window.Razorpay(options);
	// 	rzp.open();

	// 	//Success
	// 	//https://api.collegepass.org/api/v1/payment/sendSuccessPaymentResponse
	// };

	return (
		<Fragment>
			<AfterLoggedInHeader />
			<div className="site-wrap page-payment">
				<div className="container-fluid mainsecp">
					<div className="container">
						<div className="row">
							<div className="aldata">
								<div className="planmobileimg" />
								<h1 className="planwelcm">Welcome to CollegePass</h1>
								<div className="subtawelcm">
									<p>Some great feature Another super feature And more...</p>
								</div>

								<div className="frsttb">
									<p
										className="planbtn"
										onClick={() => {
											onClickPaymentHandler('one');
										}}
									>
										{countryName === 'IN' ? oneDayTextIND : oneDayTextUSD}
									</p>
									<p className="aftrbtnsbtlt">Lorum ipsom is a dummy text.</p>
									<span className="dv-button-divider divider-left" />
									<p className="dv-button-divider-copy">or</p>
									<span className="dv-button-divider divider-right" />
									<p className="planbtn">{countryName === 'IN' ? subTextIND : subTextUSD}</p>
									<p className="aftrbtnsbtlt">Lorum ipsom is a dummy text.</p>
								</div>

								<div className="scndtb">
									<p />
									<div>
										<p style={{ fontSize: '15px', margin: '0 0px -30px 0', color: '#fff' }}>
											You can Also
										</p>
										<p
											className="planbtn"
											onClick={() => {
												onClickPaymentHandler('year');
											}}
										>
											{countryName === 'IN' ? oneYearTextIND : oneYearTextUSD}
										</p>
										<p className="aftrbtnsbtlt">Lorum ipsom is a dummy text for the web.</p>
									</div>
									<p />
								</div>

							</div>
							
						</div>
					</div>
				</div>

				<div className="container faq">
					<h2 className="new-class-heading">Frequently asked questions</h2>
					<div className="faqfixed">
						<div className="panel-group" id="accordion">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<p
											className="accordion-toggle collapsed"
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapse1"
										>
											Who cen sell items?
										</p>
									</h4>
								</div>
								<div id="collapse1" className="panel-collapse collapse">
									<div className="panel-body">
										<p>
											Any registed user, who presents a work, which is genuine and appealing, can
											post it on PrepBootstrap
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="panel-group" id="accordion">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<p
											className="accordion-toggle collapsed"
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapse2"
										>
											Who cen sell items?
										</p>
									</h4>
								</div>
								<div id="collapse2" className="panel-collapse collapse">
									<div className="panel-body">
										<p>
											Any registed user, who presents a work, which is genuine and appealing, can
											post it on PrepBootstrap
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="panel-group" id="accordion">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<p
											className="accordion-toggle collapsed"
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapse3"
										>
											Who cen sell items?
										</p>
									</h4>
								</div>
								<div id="collapse3" className="panel-collapse collapse">
									<div className="panel-body">
										<p>
											Any registed user, who presents a work, which is genuine and appealing, can
											post it on PrepBootstrap
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="panel-group" id="accordion">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<p
											className="accordion-toggle collapsed"
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapse4"
										>
											Who cen sell items?
										</p>
									</h4>
								</div>
								<div id="collapse4" className="panel-collapse collapse">
									<div className="panel-body">
										<p>
											Any registed user, who presents a work, which is genuine and appealing, can
											post it on PrepBootstrap
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="panel-group" id="accordion">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<p
											className="accordion-toggle collapsed"
											data-toggle="collapse"
											data-parent="#accordion"
											href="#collapse5"
										>
											Who cen sell items?
										</p>
									</h4>
								</div>
								<div id="collapse5" className="panel-collapse collapse">
									<div className="panel-body">
										<p>
											Any registed user, who presents a work, which is genuine and appealing, can
											post it on PrepBootstrap
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Plan;
