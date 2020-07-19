import React, { Fragment, useState } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { login, socialLogin } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const LoginModel = ({ login, isAuthenticated, socialLogin }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});
	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

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

	const onSubmit = (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<Fragment>
			<div className="modal-wrapup loginM cnt">
				<div className="modal_main login_modal">
					<div className="head">
						<h4 className="log-title">Log In</h4>
						<span className=" trigger1">
							<span className="btn-close" />
						</span>
					</div>
					<div className="content">
						<div>
							<form onSubmit={onSubmit}>
								<div className="">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="email" className="txt-i">
												Email
											</label>
										</div>
										<div className="col-12">
											<input
												name="email"
												type="email"
												className="fit"
												id="email"
												value={email}
												onChange={onChange}
											/>
										</div>
									</div>
								</div>
								<div className="">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="password" className="txt-i">
												Password
											</label>
										</div>
										<div className="col-12">
											<input
												name="password"
												type="password"
												className="fit"
												id="pass"
												value={password}
												onChange={onChange}
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
								<span className="sign-l showSingle trigger1 trigger2 " target="1">
									Sign up
								</span>
							</p>
							<span className="Forgot-pass">
								<p className="showSingle trigger1 trigger3">Forgot your password?</p>
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
		</Fragment>
	);
};

$(document).ready(function() {
	$('.trigger1').click(function() {
		$('.loginM').toggleClass('open');
		$('.SignM').toggleClass('hide');
		$('.forgetM').toggleClass('hide');
		return false;
	});
	$('.trigger2').click(function() {
		$('.SignM').toggleClass('open');
		$('.loginM').toggleClass('hide');
		$('.forgetM').toggleClass('hide');
		return false;
	});
	$('.trigger3').click(function() {
		$('.forgetM').toggleClass('open');
		$('.SignM').toggleClass('hide');
		$('.loginM').toggleClass('hide');
		return false;
	});
});

LoginModel.propTypes = {
	login: PropTypes.func.isRequired,
	socialLogin: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, socialLogin })(LoginModel);
