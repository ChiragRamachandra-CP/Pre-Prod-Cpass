import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardBeforeLogin = ({
	img = 'assets/images/7.jpg',
	title = 'Lorum Ipsum',
	text = 'Lorum Ipsum is a dummy text',
	onclickUrl = '/'
}) => {
	
	return (
		<Fragment>
			<div className="col-md-6 teacher-self-exp">
				<div className="title-img-sec">
					<img src={img} alt="topic" />
				</div>
				<div className="overlay" />
				<Link to={onclickUrl}>
					<div className="vidicncntr">
						<i className="fa fa-play" data-toggle="modal" data-target="#myModal"></i>
					</div>
				</Link>

				<div class="modal" id="myModal">
					<div class="modal-dialog">
					<div class="modal-content">
					
					<div className="head">
						<h4 className="log-title">Log In</h4>
						{/*<button type="button" class="close" data-dismiss="modal">&times;</button>*/}
						<span className=" trigger1">
							<span className="btn-close" />
						</span>
					</div>
					<div className="content">
						<div>
							<form>
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
				</div>

				<div className="titlecp bimg">
					<h6 className="title-text-h4">{title}</h6>
					{/*<p className="title-text-p">{text}</p>*/}
				</div>
			</div>
		</Fragment>
	);
};

export default CardBeforeLogin;
