import React, { Fragment } from 'react';

const ForgetModel = () => {
	return (
		<Fragment>
			<div className="modal-wrapup forgetM cnt">
				<div className="modal_main mod-forgot forget_model">
					<div className="head">
						<h4 className="log-title">Reset Password</h4>
						<span className=" trigger3">
							<span className="btn-close" />
						</span>
					</div>
					<div className="content">
						<div>
							<div>
								<div>
									<form noValidate="">
										<div>
											<div>
												<div>
													<label htmlFor="email" className="txt-i">
														Email
													</label>
												</div>
												<div>
													<input name="email" type="email" className="fit" />
												</div>
											</div>
										</div>
										<button className="lgn-btn" type="submit">
											Send Email
										</button>
									</form>
									<p className="sign-up-need">
										Remember your password?
										<span className="sign-l trigger3 trigger1">Log in</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ForgetModel;
