import React, {Fragment, useState, useEffect} from "react";
import AfterLoggedInHeader from "../../components/header/AfterLoggedInHeader";
import Footer from "../../components/footer/Footer";
import "./Plan.css";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import store from "../../store/store";
import {loadUser, loadAccess} from "../../../src/actions/auth";

import {APIstoreUserMoment} from "../../config/API";

import {
	apiKey,
	image,
	color,
	createOrderURL,
	getGeoInfoURL,
	paymentSuccessURL,
	platinumPass,
	platinumAmt,
	platinumId,
	platinumINR,
	goldPass,
	goldAmt,
	goldId,
	goldINR,
	silverPass,
	silverAmt,
	silverId,
	silverINR,
	silverSubscription,
	silverSubscriptionIdINR,
	goldSubscription,
	goldSubscriptionIdINR,
	platinumSubscription,
	platinumSubscriptionIdINR,
	createSubscriptionURL,
} from "../../config/PlanContent";

const Payment = ({match}) => {
	useEffect(() => {
		const storeUserMovement = async () => {
			//console.log(window.location.href);
			//console.log(new Date().toLocaleString());
			let body = {
				user_email: localStorage.user,
				page: [
					{page: window.location.href},
					{date: new Date().toLocaleString()},
				],
			};
			try {
				await axios.post(APIstoreUserMoment, body);
				//console.log(result);
			} catch (error) {
				//do nothing for
				//console.log(error);
			}
		};
		storeUserMovement();
	}, []);
	//console.log(match.params.planId);

	// const [ orderId, setOrderID ] = useState();
	// const [ subId, setSubID ] = useState();
	// const [ countryName, setcountryName ] = useState();
	const [isRedirect, setIsRedirect] = useState(false);

	useEffect(() => {
		getGeoInfo();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (isRedirect) {
		return <Redirect to="/plan/completed" />;
	}

	const getGeoInfo = () => {
		fetch(getGeoInfoURL)
			.then(function (response) {
				if (response.status !== 200) {
					//console.log('Looks like there was a problem. Status Code: ' + response.status);
					return;
				}
				// Examine the text in the response
				response.json().then(function (data) {
					// TO BE UNCOMMENTED WHEN USING COUNTRY BASED PRICE POINT
					// setcountryName(data.country);
				});
			})
			.catch(function (err) {
				//console.log('Fetch Error :-S', err);
			});
	};

	const payMonthlyHandler = async () => {
		if (match.params.planId === "platinum") {
			createSubscription(platinumSubscription, platinumSubscriptionIdINR);
		} else if (match.params.planId === "gold") {
			createSubscription(goldSubscription, goldSubscriptionIdINR);
		} else {
			createSubscription(silverSubscription, silverSubscriptionIdINR);
		}
	};

	const payYearlyHandler = async () => {
		if (match.params.planId === "platinum") {
			const body = {
				amount: platinumAmt,
				currency: platinumINR,
				plan_id: platinumId,
			};
			createOrder(body, platinumPass);
		} else if (match.params.planId === "gold") {
			const body = {
				amount: goldAmt,
				currency: goldINR,
				plan_id: goldId,
			};
			createOrder(body, goldPass);
		} else {
			const body = {
				amount: silverAmt,
				currency: silverINR,
				plan_id: silverId,
			};
			createOrder(body, silverPass);
		}
	};

	const createOrder = async (body, planDetail) => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.token}`,
				},
			};

			const res = await axios.post(createOrderURL, body, config);
			// console.log(res);

			// setOrderID(res.data.data.id);

			paymentSubmitHandler(
				body.amount,
				body.currency,
				planDetail,
				body.plan_id,
				res.data.data.id
			);
		} catch (err) {
			//console.error(err);
		}
	};

	const paymentSubmitHandler = (amt, currency, planDetail, planID, ordID) => {
		let options = {
			key: apiKey,
			amount: amt * 100,
			currency: currency,

			description: planDetail,
			image: image,
			order_id: ordID,
			handler: function (response) {
				handlePaymentResponse(response, planID, ordID, null);
			},
			prefill: {
				email: localStorage.user,
			},
			theme: {
				color: color,
			},
		};
		let rzp = new window.Razorpay(options);
		rzp.open();
	};

	const createSubscription = async (planText, planID) => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.token}`,
				},
			};
			const res = await axios.post(
				createSubscriptionURL,
				{
					plan_id: planID,
				},
				config
			);
			// setSubID(res.data.data.id);

			subscriptionSubmitHandler(planText, res.data.data.id, planID);
		} catch (err) {
			//console.error(err);
		}
	};

	const subscriptionSubmitHandler = async (planText, subID, planID) => {
		var options = {
			key: apiKey,
			subscription_id: subID,
			subscription_card_change: 0,
			name: planText,
			description: planText,
			image: image,
			handler: function (response) {
				handlePaymentResponse(response, planID, null, subID);
			},
			prefill: {
				email: localStorage.user,
			},

			theme: {
				color: color,
			},
		};

		let rzpS = new window.Razorpay(options);
		rzpS.open();
	};

	const handlePaymentResponse = async (response, plan, ordID, subID) => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.token}`,
				},
			};

			const bodySuccess = {
				payment_id: response.razorpay_payment_id,
				razorpay_signature: response.razorpay_signature
					? response.razorpay_signature
					: null,
				user_email: localStorage.user,
				razorpay_subscription_id: subID ? subID : null,
				order_id: ordID ? ordID : null,
				plan: plan,
			};

			// console.log(bodySuccess);

			const res = await axios.post(paymentSuccessURL, bodySuccess, config);

			if (res.status !== 200) {
				//console.log('Looks like there was a problem. Status Code: ' + res.status);
				return;
			} else {
				//successfully entered to DB
				//console.log(res);
				//console.log(orderId + subId);

				//redirect to thank you page
				store.dispatch(loadUser());
				store.dispatch(loadAccess());
				setIsRedirect(true);
			}
		} catch (err) {
			store.dispatch(loadUser());
			store.dispatch(loadAccess());
			//console.log(err);
		}

		store.dispatch(loadUser());
		store.dispatch(loadAccess());
	};
	return (
		<Fragment>
			<AfterLoggedInHeader />

			<div className="site-wrap page-paymentnow">
				<div className="container-fluid">
					<div className="container planbckbtn">
						<div className="breadcrumb-main">
							<ul className="breadcrumb">
								<Link to="/plan/choose" className="bhome">
									<li className="toolbckpln">
										<i className="fas fa-long-arrow-alt-left" />
										<span className="tooltiptext">Back</span>
									</li>
								</Link>
							</ul>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="ticonpmnt">
								<img
									src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/Lock.png"
									alt="Lock"
								/>
							</div>
							<div className="stepHeader-container cntstphdrpmnt">
								<div className="stepHeader pmntstphdr">
									<span id="" className="stepIndicator paymntstpind">
										STEP <b>3</b> OF <b>3</b>
									</span>
									<h1 className="stepTitle" data-uia="stepTitle">
										Set up your payment.
									</h1>
								</div>
							</div>

							<div className="narrowContainer">
								<div id="" className="contextRow contextRowFirst">
									Your membership starts as soon as you set up payment.
								</div>
								<div className="contextRow seccmmnts">
									<div id="">
										<b>No commitments.</b>
									</div>
									<div id="">
										<b>Cancel online anytime.</b>
										{/*<b>{countryName}</b>*/}
									</div>
								</div>
							</div>

							<div className="pynwmain">
								<div className="col-md-6">
									<input
										type="button"
										className="paynowbtn mnthp"
										value="PAY MONTHLY"
										name=""
										onClick={payMonthlyHandler}
									/>
								</div>

								<div className="col-md-6">
									<input
										type="button"
										className="paynowbtn yerlzp"
										value="PAY ANNUALLY"
										name=""
										onClick={payYearlyHandler}
									/>
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

export default Payment;
