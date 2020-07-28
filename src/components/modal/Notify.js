import React, { Fragment } from 'react';

const Notify = () => {

	return (
		<Fragment>
			<div className="modal fade" id="notify">
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
								<form>
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
												/>
											</div>
										</div>
									</div>
									<button className="lgn-btn" type="submit">
										Log In
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			
		</Fragment>
	);
};

export default Notify;