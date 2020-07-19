import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';

import { setAlert } from '../../../src/actions/alert';
import axios from 'axios';
import { notComplete } from '../../config/error';
import { succComplete } from '../../config/success';
import { notMatch } from '../../config/error';
//import { Redirect } from 'react-router-dom';

import { APIresetUserPassword } from '../../config/API';

const ChangePassword = ({ match, setAlert, isAuthenticated }) => {
	const [ formData, setFormData ] = useState({
		password: '',
		confirm_password: ''
	});

	const { password, confirm_password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		//const user_email = localStorage.user;
		if (password === confirm_password) {
			try {
				const config = {
					headers: {
						Authorization: `Bearer ${localStorage.token}`,
						'Content-Type': 'application/json'
					}
				};

				const body = {
					user_email: localStorage.user,
					new_pass: password
				};

				const result = await axios.post(APIresetUserPassword, body, config);

				//console.log('result', result);

				if ((result.data.status = 200)) {
					setAlert(succComplete, 'info');
				} else {
					setAlert(notComplete, 'danger');
				}
			} catch (err) {
				// if any error occurs while performing axios request
				//console.log(err);
				setAlert(notComplete, 'danger');
			}

			//let res= resetPassword({ new_pass , guid });
		} else {
			//console.log('password not matched');
			setAlert(notMatch, 'danger');
		}
	};

	return (
		<Fragment>
			<Header />
			<div className="site-wrap page-resetPass">
				<div className="container">
					<div className="row">
						<div className="modal_main login_modal resetpass">
							<div className="head">
								<h4 className="log-title">Create new password</h4>
								<p className="passtag">We'll ask for this password whenever you Sign-In.</p>
							</div>
							<div className="content">
								<div className="">
									<div className="">
										<div>
											<form onSubmit={onSubmit}>
												<div>
													<div>
														<div className="col align-self-end">
															<label htmlFor="password" className="txt-i">
																New password
															</label>
														</div>
														<div className="col-12">
															<div className="">
																<input
																	name="password"
																	value={password}
																	onChange={onChange}
																	type="password"
																	className="fit"
																	pattern=".{5,}"
																	title="Enter atleast 5 characters"
																/>
															</div>
														</div>
													</div>
												</div>
												<div className="">
													<div className="">
														<div className="col align-self-end">
															<label htmlFor="confirm_password" className="txt-i">
																Confirm Password
															</label>
														</div>
														<div className="col-12">
															<div className="">
																<input
																	name="confirm_password"
																	value={confirm_password}
																	onChange={onChange}
																	type="password"
																	className="fit"
																	pattern=".{5,}"
																	title="Enter atleast 5 characters"
																/>
															</div>
														</div>
													</div>
												</div>
												<input
													type="submit"
													value="Save Changes"
													className="rtngbtn"
													name="submit"
												/>
											</form>
										</div>
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

ChangePassword.propTypes = {
	setAlert: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert })(ChangePassword);
