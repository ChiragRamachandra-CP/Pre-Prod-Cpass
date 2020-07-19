import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, socialLogin } from '../../actions/auth';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const SignupModel = ({ register, isAuthenticated, socialLogin }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});
	const { email, password } = formData;

	const responseFacebook = (response) => {
		// console.log(response.email);
		let source = 'FACEBOOK';
		socialLogin(response.email, source);
	};

	const responseGoogle = (response) => {
		// console.log(response.profileObj.email);
		let source = 'GOOGLE';
		socialLogin(response.profileObj.email, source);
	};

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		register({ email, password });
	};

	return (
		<Fragment>
			<div className="modal-wrapup SignM cnt">
				<div className="modal_main mod-create signup_modal">
					<div className="head">
						<h4 className="log-title">Create Account</h4>
						<span className=" trigger2">
							<span className="btn-close" />
						</span>
					</div>
					<div className="content">
						<div>
							<div>
								<form onSubmit={onSubmit}>
									<div>
										<div>
											<div className="col align-self-end">
												<label htmlFor="email" className="txt-i">
													Email
												</label>
											</div>
											<div className="col-12">
												<div>
													<input
														name="email"
														type="email"
														className="fit"
														value={email}
														onChange={onChange}
													/>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div>
											<div className="col align-self-end">
												<label htmlFor="password" className="txt-i">
													Password
												</label>
											</div>
											<div className="col-12">
												<div>
													<input
														name="password"
														type="password"
														className="fit"
														value={password}
														onChange={onChange}
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
										<span>or </span>
									</p>
								</div>
								{/* <div className="btn-gf googlemdl">
									<p>
										<img
											src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/icons8-google-50.png"
											alt="google"
											className="modelicoimg"
										/>
										Sign up with Google
									</p>
								</div> */}
								<GoogleLogin
									clientId="1071445360547-59950ri9aon82iojeouvtrvi3ao9iu7t.apps.googleusercontent.com"
									buttonText="Login With Google"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={'single_host_origin'}
									className="btn-gf googlemdl"
								/>
								{/* <div className="btn-gf facebookmdl">
									<p>
										<img
											src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/icons8-facebook-circled-50.png"
											alt="facebook"
											className="modelicoimg"
										/>
										Sign up with Facebook
									</p>
								</div> */}

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
									<span className="sign-l showSingle trigger2 trigger1" target="2">
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
		</Fragment>
	);
};

SignupModel.propTypes = {
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	socialLogin: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, socialLogin })(SignupModel);
