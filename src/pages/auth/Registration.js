import React, { Fragment, useState } from 'react';
import Header from '../../components/header/BeforeLoggedInHeader';
import Footer from '../../components/footer/Footer';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, socialLogin } from '../../../src/actions/auth';
import { setAlert } from '../../../src/actions/alert';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { errorLogin } from '../../config/error';

const Registration = ({ register, isAuthenticated, socialLogin, setAlert }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});
	const { email, password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		register(email, password);
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
			<div className="SignM cnt">
				<div className="modal_main mod-create signup_modal rgstrpg">
					<div className="head">
						<h4 className="log-title">Create Account</h4>
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
										<span>or </span>
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
									className="btn-gf facebookmdl"
									icon="fa-facebook"
								/>
								<p className="sign-up-need">
									Already have an account?
									<Link to="/login" className="sign-l">
										Sign in
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
			</div>

			<Footer />
		</Fragment>
	);
};

Registration.propTypes = {
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
	socialLogin: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, socialLogin, setAlert })(Registration);
//export default Registration;
