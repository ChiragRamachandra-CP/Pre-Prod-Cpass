import React, { Fragment, useState } from 'react';
import Header from '../../components/header/BeforeLoggedInHeader';
import Footer from '../../components/footer/Footer';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import { login, socialLogin } from '../../../src/actions/auth';
import { setAlert } from '../../actions/alert';
import { errorLogin } from '../../config/error';

import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated, socialLogin, setAlert }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});
	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	const responseFacebook = (response) => {
		let source = 'FACEBOOK';
		try {
			socialLogin(response.email, source);
		} catch (err) {
			setAlert(errorLogin, 'danger');
		}
	};

	const responseGoogle = (response) => {
		let source = 'GOOGLE';
		try {
			socialLogin(response.profileObj.email, source);
		} catch (err) {
			setAlert(errorLogin, 'danger');
		}
	};

	return (
		<Fragment>
			<Header />
			<div className="loginM cnt">
				<div className="modal_main login_modal loginpg">
					<div className="head">
						<h4 className="log-title">Log In</h4>
					</div>
					<div className="content">
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
								<div>
									<div>
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
								className="btn-gf googlemdl lgnpge"
							/>

							<FacebookLogin
								appId="885829888561207"
								autoLoad={false}
								fields="name,email,picture"
								callback={(event) => {
									responseFacebook(event);
								}}
								className="btn-gf facebookmdl lgnpge"
								icon="fa-facebook"
							/>
							<p className="sign-up-need">
								Need an account?
								<Link className="sign-l" to="/register">
									Sign up
								</Link>
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

			<Footer />
		</Fragment>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	socialLogin: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, socialLogin, setAlert })(Login);
//export default Login;
