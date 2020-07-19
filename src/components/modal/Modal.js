import React, { Fragment, useState } from 'react';
import { login, register, socialLogin } from '../../actions/auth';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { setAlert } from '../../actions/alert';
import axios from 'axios';
import { succSent } from '../../config/success';
import { errorResetPass } from '../../config/error';

import { APIforgotPassword } from '../../config/API';

//import { NotificationManager } from 'react-notifications';

const Modal = ({ login, register, forgetpassword, isAuthenticated, socialLogin, setAlert }) => {
	const [ formData, setFormData ] = useState({
		emailLogin: '',
		passwordLogin: '',
		emailRegister: '',
		passwordRegister: ''
	});

	const { emailLogin, passwordLogin, emailRegister, passwordRegister } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const responseFacebook = (response) => {
		let source = 'FACEBOOK';
		socialLogin(response.email, source);
	};

	const responseGoogle = (response) => {
		let source = 'GOOGLE';
		socialLogin(response.profileObj.email, source);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		login(emailLogin, passwordLogin);
	};

	/* ------------Register---------- */

	const onSubmitReg = (e) => {
		e.preventDefault();
		register(emailRegister, passwordRegister);
	};

	/* -------- Forget ------------ */

	const [ formDataForget, setFormDataForget ] = useState({
		forgetemail: ''
	});

	const { forgetemail } = formDataForget;

	const onChangeForget = (e) => {
		setFormDataForget({ ...formDataForget, [e.target.name]: e.target.value });
	};

	const onSubmitForget = async (e) => {
		e.preventDefault();
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
		const result = await axios.get(`${APIforgotPassword}${forgetemail}`, config);

			//console.log('result', result);
			setAlert(succSent, 'info fpsm');
		} catch (err) {
			// if any error occurs while performing axios request

			//console.log(err);
			setAlert(errorResetPass, 'danger');
		}
	};

	return (
		<Fragment>
			<div className="modal fade" id="myModal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="head">
							<h4 className="log-title">Log In</h4>
							<button type="button" className="close imgpopup" data-dismiss="modal">
								&times;
							</button>
						</div>
						<div className="content">
							<div>
								<form onSubmit={onSubmit}>
									<div className="">
										<div className="">
											<div className="col align-self-end">
												<label htmlFor="emailLogin" className="txt-i">
													Email
												</label>
											</div>
											<div className="col-12">
												<input
													name="emailLogin"
													type="email"
													className="fit"
													// id="emailLogin"
													value={emailLogin}
													onChange={onChange}
													required
												/>
											</div>
										</div>
									</div>
									<div className="">
										<div className="">
											<div className="col align-self-end">
												<label htmlFor="passwordLogin" className="txt-i">
													Password
												</label>
											</div>
											<div className="col-12">
												<input
													name="passwordLogin"
													type="password"
													className="fit"
													// id="passwordLogin"
													value={passwordLogin}
													onChange={onChange}
													pattern=".{5,}" title="Enter atleast 5 characters"
												/>
											</div>
										</div>
									</div>
									<button className="lgn-btn" type="submit">
										Log In
									</button>
								</form>
								<div className="or">
									<p>
										<span>or</span>
									</p>
								</div>

								<GoogleLogin
									clientId="1071445360547-59950ri9aon82iojeouvtrvi3ao9iu7t.apps.googleusercontent.com"
									buttonText="Login With Google"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={'single_host_origin'}
									className="btn-gf googlemdl"
								/>

								<FacebookLogin
									appId="885829888561207"
									autoLoad={false}
									fields="name,email,picture"
									callback={(event) => {
										responseFacebook(event);
									}}
									className="btn-gf facebookmdl"
									icon="fa-facebook"
								/>

								<p className="sign-up-need">
									Need an account?
									<span
										className="sign-l showSingle trigger1 trigger2"
										data-toggle="modal"
										data-target="#myModal2"
										data-dismiss="modal"
									>
										Sign up
									</span>
								</p>
								<span className="Forgot-pass">
									<p
										className="showSingle trigger1 trigger3"
										data-toggle="modal"
										data-target="#myModal3"
										data-dismiss="modal"
									>
										Forgot your password?
									</p>
								</span>
								<p className="privacy">
									By logging in, you agree to our
									<span className="">
										<Link className="" to="/privacy">
											Privacy Policy
										</Link>
										and
										<Link className="" to="/terms">
											Terms of Service
										</Link>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="myModal2">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="head">
							<h4 className="log-title">Create Account</h4>
							<button type="button" className="close imgpopup" data-dismiss="modal">
								&times;
							</button>
						</div>
						<div className="content">
							<div>
								<form onSubmit={onSubmitReg}>
									<div>
										<div>
											<div className="col align-self-end">
												<label htmlFor="emailRegister" className="txt-i">
													Email
												</label>
											</div>
											<div className="col-12">
												<div>
													<input
														name="emailRegister"
														type="email"
														className="fit"
														value={emailRegister}
														onChange={onChange}
													/>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div>
											<div className="col align-self-end">
												<label htmlFor="passwordRegister" className="txt-i">
													Password
												</label>
											</div>
											<div className="col-12">
												<div>
													<input
														name="passwordRegister"
														type="password"
														className="fit"
														value={passwordRegister}
														onChange={onChange}
														pattern=".{5,}" title="Enter atleast 5 characters"
													/>
												</div>
											</div>
										</div>
									</div>
									<button className="lgn-btn" type="submit">
										Create Account
									</button>
								</form>
								<div className="or">
									<p>
										<span>or</span>
									</p>
								</div>

								<GoogleLogin
									clientId="1071445360547-59950ri9aon82iojeouvtrvi3ao9iu7t.apps.googleusercontent.com"
									buttonText="Login With Google"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={'single_host_origin'}
									className="btn-gf googlemdl"
								/>

								<FacebookLogin
									appId="885829888561207"
									autoLoad={false}
									fields="name,email,picture"
									callback={(event) => {
										responseFacebook(event);
									}}
									className="btn-gf facebookmdl"
									icon="fa-facebook"
								/>

								<p className="sign-up-need">
									Already have an account?{' '}
									<span
										className="sign-l showSingle trigger2 trigger1"
										data-toggle="modal"
										data-target="#myModal"
										data-dismiss="modal"
									>
										Sign in
									</span>
								</p>
								<p className="privacy">
									By logging in, you agree to our
									<span>
										<Link className="" to="/privacy">
											Privacy Policy
										</Link>
										and
										<Link className="" to="/terms">
											Terms of Service
										</Link>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="myModal3">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="head">
							<h4 className="log-title">Reset Password</h4>
							<button type="button" className="close imgpopup" data-dismiss="modal">
								&times;
							</button>
						</div>
						<div className="content">
							<div>
								<form onSubmit={onSubmitForget}>
									<div>
										<div>
											<div>
												<label htmlFor="emailForgot" className="txt-i">
													Email
												</label>
											</div>
											<div>
												<input
													name="forgetemail"
													value={forgetemail}
													type="email"
													onChange={onChangeForget}
													className="fit"
												/>
											</div>
										</div>
									</div>
									<input
										type="submit"
										className="lgn-btn frgtpssbtn"
										name="submit"
										value="Send Email"
									/>
								</form>
								<p className="sign-up-need">
									Remember your password?
									<span
										className="sign-l trigger3 trigger1"
										data-toggle="modal"
										data-target="#myModal"
										data-dismiss="modal"
									>
										Log in
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Modal.propTypes = {
	login: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	socialLogin: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, register, socialLogin, setAlert })(Modal);