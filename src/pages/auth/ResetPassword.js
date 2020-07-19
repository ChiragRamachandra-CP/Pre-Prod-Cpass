import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/header/BeforeLoggedInHeader';
import Footer from '../../components/footer/Footer';

import { setAlert } from '../../../src/actions/alert';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { notComplete } from '../../config/error';
import { succComplete } from '../../config/success';
import { notMatch } from '../../config/error';

import { APIresetPassword } from '../../config/API';


const ResetPassword = ({ match, setAlert, isAuthenticated }) => {	
const [ formData, setFormData ] = useState({
		new_password: '',
		confirm_password: ''
	});

	const [ isRedirect, setRedirect ] = useState(false);

	const { new_password, confirm_password } = formData;

	const guid = match.params.uniqueID;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	if (isRedirect) {
		return <Redirect to="/" />;
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		//const user_email = localStorage.user;
		if (new_password === confirm_password) {
			try {
				const config = {
					headers: {
						'Content-Type': 'application/json'
					}
				};

				const body = {
					guid: guid,
					new_pass: new_password
				};

				const result = await axios.post(APIresetPassword, body, config);

				//console.log('result', result);

				if ((result.data.status === 200)) {
					setAlert(succComplete, 'info');
					setRedirect(true);
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
															<label htmlFor="new_password" className="txt-i">
																New password
															</label>
														</div>
														<div className="col-12">
															<div className="">
																<input
																	name="new_password"
																	value={new_password}
																	onChange={onChange}
																	type="password"
																	className="fit"
																	pattern=".{5,}" title="Enter atleast 5 characters"
																/>
															</div>
														</div>
													</div>
												</div>
												<div className="">
													<div className="">
														<div className="col align-self-end">
															<label htmlFor="password" className="txt-i">
																Re-enter password
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
																	pattern=".{5,}" title="Enter atleast 5 characters"
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

ResetPassword.propTypes = {
	setAlert: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert })(ResetPassword);
