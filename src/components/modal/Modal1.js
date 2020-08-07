import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';

const Modal1 = () => {

	return (
		<Fragment>
            <div className="wrapmodal1">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".modal-1">
              modal 1
            </button>
          </div>
           
          <div className="loginM cnt modal-1">
				<div className="login_modal userdm">
					<div className="head">
						<h4 className="log-title">User Details</h4>
					</div>
					<div className="content">
						<div>
							<form>
								<div className="col-md-6">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="email" className="txt-i">
												First Name
											</label>
										</div>
										<div className="col-12">
											<input
												name="fname"
												type="text"
												className="fit"
												id="fname"
											/>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="password" className="txt-i">
												Last Name
											</label>
										</div>
										<div className="col-12">
											<input
												name="lname"
												type="text"
												className="fit"
												id="lname"
											/>
										</div>
									</div>
                </div>
                <div className="col-md-6">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="password" className="txt-i">
												Phone
											</label>
										</div>
										<div className="col-12">
											<input
												name="phone"
												type="tel"
												className="fit"
												id="phone"
											/>
										</div>
									</div>
                </div>
                <div className="col-md-6">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="password" className="txt-i">
												Grade
											</label>
										</div>
										<div className="col-12">
											<input
												name="phone"
												type="tel"
												className="fit"
												id="phone"
											/>
										</div>
									</div>
                </div>
                <div className="col-md-6">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="password" className="txt-i">
												Choice of Country
											</label>
										</div>
										<div className="col-12">
											<input
												name="phone"
												type="tel"
												className="fit"
												id="phone"
											/>
										</div>
									</div>
                </div>
                <div className="col-md-6">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="password" className="txt-i">
												Choice of Career
											</label>
										</div>
										<div className="col-12">
											<input
												name="phone"
												type="tel"
												className="fit"
												id="phone"
											/>
										</div>
									</div>
								</div>
								<button className="lgn-btn" type="submit">
									Submit
								</button>
              </form>
              <p></p><br/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Modal1;