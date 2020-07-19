import React, { Fragment } from 'react';
//import BeforeLoggedInHeader from '../../header/BeforeLoggedInHeader';
//import Footer from '../../footer/Footer';
import axios from 'axios';
import { setAlert } from '../../../src/actions/alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { succSent } from '../../config/success';
import { tryAgain } from '../../config/error';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

import { APIsendEmailVerification } from '../../config/API';

const EmailValidate = ({ setAlert }) => {
	const onSubmitValidate = async (e) => {
		if (localStorage.user) {
			e.preventDefault();
			try {
				const config = {
					headers: {
						'Content-Type': 'application/json'
					}
				};
				const result = await axios.get(`${APIsendEmailVerification}${localStorage.user}`, config);

				//console.log('result', result);

				if (result.status === 200) {
					setAlert(succSent, 'info');
				} else {
					setAlert(tryAgain, 'danger');
				}
			} catch (err) {
				//console.log(err);
				setAlert(tryAgain, 'danger');
			}
		}
	};

	return (
		<Fragment>
			<div className="Header">
				<section className="head-sec">
					<header className="header">
						<div className="container">
							<Link to="/" className="logo">
								<img
									alt="logo emblem"
									src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png"
								/>
								<img
									alt="logo"
									src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/chaseivy_logo.svg"
									className="f_logo"
								/>
							</Link>
							<input className="menu-btn" type="checkbox" id="menu-btn" />
							<label className="menu-icon" htmlFor="menu-btn">
								<span className="navicon" />
							</label>
							<ul className="menu">
								<li className="hvrdsp mnufnt">
									<Link to="/">
										<p style={{ color: '#fff' }}>HOME</p>
									</Link>
								</li>
							</ul>
						</div>
					</header>
				</section>
			</div>

			<div className="container validmain">
				<div class="container planbckbtn">
					<div class="breadcrumb-main">
						<ul class="varifybrdcrmb">
							<a class="bhome" href="/">
								<li class="toolbckpln">
									<i class="fas fa-long-arrow-alt-left" aria-hidden="true" />
									<span class="tooltiptext">BACK</span>
								</li>
							</a>
						</ul>
					</div>
				</div>
				<div className="validfix">
					<a href="/">
						<p className="varimg smlvrf">
							<img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" alt="logo-1" />
						</p>
						<p className="varimg">
							<img
								src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/chaseivy_logo.svg"
								alt="logo-2"
							/>
						</p>
					</a>
					<p className="varicn">
						<i class="fa fa-exclamation" aria-hidden="true" />
					</p>
					<h1>Verify Your Email</h1>
					<p>We have sent you an email link to verify your email, please follow the instructions on the email to validate your account.<br/>
					In case you do not see the email in your inbox, please check your spam folder.</p>
					<form onSubmit={onSubmitValidate}>
						<button type="submit" className="varbtn" name="submit">
							Resend Email
						</button>
					</form>
				</div>
			</div>

			<Footer />
		</Fragment>
	);
};

EmailValidate.propTypes = {
	setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setAlert })(EmailValidate);
