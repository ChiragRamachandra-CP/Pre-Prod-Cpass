import React, { Fragment, useEffect } from 'react';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './Plan.css';
import axios from 'axios';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { APIstoreUserMoment } from '../../config/API';

const Plan = ({premiumLevel}) => {

	let continueSilver = null;
	
	let continueGold = null;
	
	let continuePlatinum = null;
	
	let upgradePlan = null

	let plnchngeSilver = null;
	let plnchngeGold = null;
	let plnchngePlatinum = null;
	

	//console.log("test preminum", premiumLevel);
	if (premiumLevel === "Basic") {
		continueSilver = (
			<label className="headplncards btncnt">
				<span className="bxplan">
					<Link to="/plan/payment/silver">
						<input
							type="button"
							name=""
							value="CONTINUE"
							className="cntbtn"
						/>
					</Link>
				</span>
			</label>
		);
		continueGold = (
			<label className="headplncards btncnt">
				<span className="bxplan">
					<Link to="/plan/payment/gold">
						<input
							type="button"
							name=""
							value="CONTINUE"
							className="cntbtn"
						/>
					</Link>
				</span>
			</label>
		);
		continuePlatinum = (
			<label className="headplncards btncnt">
				<span className="bxplan">
					<Link to="/plan/payment/platinum">
						<input
							type="button"
							name=""
							value="CONTINUE"
							className="cntbtn"
						/>
					</Link>
				</span>
			</label>
		);
	}

	else if (premiumLevel === "Silver") {
		continueSilver = (
			<label className="headplncards btncnt">
				<span className="bxplan">
					<Link to="#">
						<input
							type="button"
							name=""
							value="Current Plan"
							className="cntbtn crntplnclr"
						/>
					</Link>
				</span>
			</label>
		);
		continueGold = (
			<label className="headplncards btncnt">
				<span className="bxplan">
					<Link to="/plan/payment-upgrade/gold">
						<input
							type="button"
							name=""
							value="UPGRADE"
							className="cntbtn"
						/>
					</Link>
				</span>
			</label>
		);
		continuePlatinum = (
			<label className="headplncards btncnt">
				<span className="bxplan">
					<Link to="/plan/payment-upgrade/platinum">
						<input
							type="button"
							name=""
							value="UPGRADE"
							className="cntbtn"
						/>
					</Link>
				</span>
			</label>
		);
		plnchngeSilver = "currntpln";
	}

	else if (premiumLevel === "Gold") {
		continueSilver = null;
		continueGold = (
			<label className="headplncards btncnt">
				<span className="bxplan">
					<Link to="#">
						<input
							type="button"
							name=""
							value="Current Plan"
							className="cntbtn crntplnclr"
						/>
					</Link>
				</span>
			</label>
		);
		continuePlatinum = (
			<label className="headplncards btncnt">
				<span className="bxplan">
					<Link to="/plan/payment-upgrade/platinum">
						<input
							type="button"
							name=""
							value="UPGRADE"
							className="cntbtn"
						/>
					</Link>
				</span>
			</label>
		);
		plnchngeGold = "currntpln";
	}

	else if (premiumLevel === "Platinum") {
		continueSilver = null;
		continueGold = null ;
		continuePlatinum = (
			<label className="headplncards btncnt">
				<span className="bxplan">
					<Link to="#">
						<input
							type="button"
							name=""
							value="Current Plan"
							className="cntbtn crntplnclr"
						/>
					</Link>
				</span>
			</label>
		);
		plnchngePlatinum = "currntpln";
	}






	useEffect( ()=> {
		const storeUserMovement = async () => {
			//console.log(window.location.href);
			//console.log(new Date().toLocaleString());
			let body={"user_email": localStorage.user,
			    "page": [{"page": window.location.href},{"date": new Date().toLocaleString()}]}
			try {
				const result = await axios.post(APIstoreUserMoment, body);
				//console.log(result);
				
			} catch (error) {
				//do nothing for 
				//console.log(error);
			}
		};
		storeUserMovement()
	},[])

	return (
		<Fragment>
			<AfterLoggedInHeader />
			<div className="site-wrap page-payment-plan">
				<div className="container-fluid">
					<div className="container planbckbtn">
						<div className="breadcrumb-main">
							<ul className="breadcrumb">
								<Link to="/plan/info" className="bhome">
									<li className="toolbckpln">
										<i className="fas fa-long-arrow-alt-left" />
										<span className="tooltiptext">Back</span>
									</li>
								</Link>
							</ul>
						</div>
					</div>
					<div className="container fxdwthpln">
						<div className="row">
							<div className="allplanm">
								<div className="headplans">
									<div className="stepHeader-container">
										<div className="stepHeader">
											<span className="stepIndicator">
												STEP <b>2</b> OF <b>3</b>
											</span>
											<h1 className="stepTitle">Choose the plan that’s right for you.</h1>
										</div>
									</div>
									{/*<div className="changeAnytime">Downgrade or upgrade at any time.</div>*/}
								</div>
							</div>
						</div>
					</div>
					<div className="mainsecplans">
						<div className="container fxdwthpln">
							<div className="row">
								<div className="headplnmain">
									<div className="headpln">
										<div className="wdhundret">
											{/*<label className="headplncards">
                                                <span className="bxplan">Mobile</span>
                                            </label>*/}
											<label className="headplncards" style={{background: '#C0C0C0', color: '#000'}}>
												<span className="bxplan">Silver Pass</span>
											</label>
											<label className="headplncards" style={{background: 'rgb(225, 168, 82)', color: '#000'}}>
												<span className="bxplan">Gold Pass</span>
											</label>
											<label className="headplncards" style={{background: 'rgb(101, 100, 98)', color: '#fff'}}>
												<span className="bxplan">Platinum Pass</span>
											</label>
										</div>
									</div>
								</div>
								<div className="maintblepln">
									<table
										className="planGrid__featureTable"
										role="table"
										data-uia="plan-grid-feature-table"
									>
										<tbody
											className="planGrid__featureTableBody"
											data-uia="plan-grid-feature-table-body"
										>
											
											
											<tr className="mobtlpln">
												<td>College Admission Information Session - All Countries: Live Sessions & Video Lessons</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
												College Admission Information Session - All Countries: Live Sessions & Video Lessons
												</td>
												{/*<td className="rttttl planGrid__cell planGrid__booleanCell" role="cell" aria-label="Mobile">
                                                    <span className="planGrid__booleanLabel">&#10005;</span>
                                    </td>*/}
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__booleanCell ' + plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell plnchnge ' + plnchngeGold}
													role="cell"
													aria-label="Standard"

												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell plnchnge ' + plnchngePlatinum}
													role="cell"
													aria-label="Premium"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
											</tr>
											<tr className="mobtlpln">
												<td>College Application Strategy Session - All Countries: Live Sessions & Video Lessons</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
												College Application Strategy Session - All Countries: Live Sessions & Video Lessons
												</td>
												{/*<td className="rttttl planGrid__cell planGrid__booleanCell" role="cell" data-uia="plan-grid-feature-table-cell+canWatchOnLaptopAndTV-text_1_stream_name" aria-label="Mobile">
                                                    <span className="planGrid__booleanLabel">&#10005;</span>
                                </td>*/}
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__booleanCell ' + plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngeGold}
													role="cell"
													aria-label="Standard"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngePlatinum}
													role="cell"
													aria-label="Premium"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
											</tr>
											<tr className="mobtlpln">
												<td>College Admission Expert Interviews - All Countries: Live Sessions & Video Lessons</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
												College Admission Expert Interviews - All Countries: Live Sessions & Video Lessons
												</td>
												{/*<td className="rttttl planGrid__cell planGrid__booleanCell" role="cell" data-uia="plan-grid-feature-table-cell+canWatchOnMobilePhoneAndTablet-text_1_stream_name" aria-label="Mobile">
                                                    <span className="planGrid__booleanLabel">&#10004;</span>
                            </td>*/}
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__booleanCell ' + plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngeGold}
													role="cell"
													aria-label="Standard"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngePlatinum}
													role="cell"
													aria-label="Premium"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
											</tr>
											<tr className="mobtlpln">
												<td>Essay Writing: Workshops & Expert Interviews</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
												Essay Writing: Workshops & Expert Interviews
												</td>
												{/*<td className="rttttl planGrid__cell planGrid__stringCell" role="cell" aria-label="Mobile">1</td>*/}
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__stringCell ' + plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													&#10004;
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__stringCell ' + plnchngeGold}
													role="cell"
													aria-label="Standard"
												>
													&#10004;
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__stringCell ' + plnchngePlatinum }
													role="cell"
													aria-label="Premium"
												>
													&#10004;
												</td>
											</tr>
											<tr className="mobtlpln">
												<td>
												IELTS LiveStream
												</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
												IELTS LiveStream
												</td>
												{/*<td className="rttttl planGrid__cell planGrid__booleanCell" role="cell" aria-label="Mobile">
                                                    <span className="planGrid__booleanLabel">&#10004;</span>
                        </td>*/}
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__booleanCell ' + plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' +plnchngeGold}
													role="cell"
													aria-label="Standard"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' +plnchngePlatinum}
													role="cell"
													aria-label="Premium"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
											</tr>
											<tr className="mobtlpln">
												<td>PSAT Livestream</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
												PSAT Livestream
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__booleanCell ' +plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													<span className="planGrid__booleanLabel">&#10005;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngeGold}
													role="cell"
													aria-label="Standard"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngePlatinum }
													role="cell"
													aria-label="Premium"
												>
													<span className="planGrid__booleanLabel">&#10005;</span>
												</td>
											</tr>

											<tr className="mobtlpln">
												<td>SAT Livestream</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
												SAT Livestream
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__booleanCell ' + plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													<span className="planGrid__booleanLabel">&#10005;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngeGold}
													role="cell"
													aria-label="Standard"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngePlatinum}
													role="cell"
													aria-label="Premium"
												>
													<span className="planGrid__booleanLabel">&#10005;</span>
												</td>
											</tr>

											<tr className="mobtlpln">
												<td>SAT Pro: Intensive SAT Tutoring</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
												SAT Pro: Intensive SAT Tutoring
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__booleanCell ' + plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													<span className="planGrid__booleanLabel">&#10005;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngeGold}
													role="cell"
													aria-label="Standard"
												>
													<span className="planGrid__booleanLabel">&#10005;</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngePlatinum}
													role="cell"
													aria-label="Premium"
												>
													<span className="planGrid__booleanLabel">&#10004;</span>
												</td>
											</tr>

											<tr className="mobtlpln">
												<td>Billed Monthly</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
													Billed Monthly
												</td>
												{/*<td className="rttttl planGrid__cell planGrid__stringCell" role="cell" aria-label="Mobile">₹&nbsp;199</td>*/}
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__stringCell ' +plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													₹&nbsp;999
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__stringCell ' + plnchngeGold}
													role="cell"
													aria-label="Standard"
												>
													₹&nbsp;3999
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__stringCell ' + plnchngePlatinum}
													role="cell"
													aria-label="Premium"
												>
													₹&nbsp;7999
												</td>
											</tr>

											<tr className="mobtlpln">
												<td>Billed Annually (upto 40% off)</td>
											</tr>
											<tr role="row" className="planGrid__featureTableRow">
												<td className="lftttl planGrid__cell planGrid__featureCell" role="cell">
													Annually (upto 40% off)
												</td>
												{/*<td className="rttttl planGrid__cell planGrid__booleanCell" role="cell" aria-label="Mobile">
                                                    <span className="planGrid__booleanLabel">&#10005;</span>
                                        		</td>*/}
												<td
													className={'rttttl planGrid__cell planGrid__cell--isSelected planGrid__booleanCell ' + plnchngeSilver}
													role="cell"
													aria-label="Basic"
												>
													<span className="planGrid__booleanLabel">₹&nbsp;9999</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngeGold}
													role="cell"
													aria-label="Standard"
												>
													<span className="planGrid__booleanLabel">₹&nbsp;29999</span>
												</td>
												<td
													className={'rttttl planGrid__cell planGrid__booleanCell ' + plnchngePlatinum}
													role="cell"
													aria-label="Premium"
												>
													<span className="planGrid__booleanLabel">₹&nbsp;69999</span>
												</td>
											</tr>

											
										</tbody>
									</table>
									<div className="headpln">
										<div className="wdhundret">
											{/*<label className="headplncards btncnt">
                                                <span className="bxplan">
                                                    <input type="button" name="" value="CONTINUE" className="cntbtn" />
                                                </span>
                                            </label>*/}
											{continueSilver}
											{continueGold}
											{continuePlatinum}
											{upgradePlan}
										</div>
									</div>
								</div>
								{/*<p style={{ paddingLeft: '10px', color: '#fff', margin: '30px 0px', fontSize: '14px' }}>
									HD and Ultra HD availability subject to your internet service and device
									capabilities. Not all content available in HD or Ultra HD. See Terms of Use for more
									details.
								</p>
								<p style={{width: 100%', textAlign: center'}}><input type="button" className="cntpln" value="CONTINUE" /></p>*/}
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</Fragment>
	);
};


Plan.propTypes = {
	premiumLevel: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
	premiumLevel: state.auth.premiumLevel,
});

export default connect(mapStateToProps, null)(Plan);
