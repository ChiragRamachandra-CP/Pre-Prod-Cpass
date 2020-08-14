import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';
import WindowScroll from '../window/WindowScroll';
import Notify from "../modal/Notify";

const AfterLoggedInHeader = ({ logout }) => {
	const onClickLogoutHandler = () => {
		logout();
	};
	return (
		<Fragment>
			<div className="Header">
				<section className="head-sec">
					<header className="header">
						<div className="container">
							<Link to="/" className="logo">
								<img
									alt="logo emblem"
									src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png"
								/>
								<img
									alt="logo"
									src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/chaseivy_logo.svg"
									className="f_logo"
								/>
							</Link>
							<ul className="lgomnulogn">
									{/*<li className="mnuhidemob">
										<Link to="/">
											<p>Home</p>
										</Link>
									</li>*/}
									<li className="hvrdsp mnuicon mnuhidemob">
										<Link to="">
											<p>College Admissions</p>
											<ul className="nav-dropdown">
												<div className="dropheader">
													<li>
														<Link to="/live-sessions">
															<p><i class="fa fa-level-up" aria-hidden="true"></i> Live Sessions</p>
														</Link>
													</li>
													<li>
														<Link to="/college-admission">
															<p><i class="fa fa-address-book-o" aria-hidden="true"></i> Book a free consultation</p>
														</Link>
													</li>
												</div>
											</ul>
										</Link>
									</li>
									<li className="hvrdsp mnuicon mnuhidemob">
										<Link to="">
											<p>Tutoring</p>
											<ul className="nav-dropdown">
												<div className="dropheader">
													<li>
														<Link to="/sat-master-class-pro">
															<p><i class="fa fa-graduation-cap" aria-hidden="true"></i> SAT/PSAT Tutoring</p>
														</Link>
													</li>
													<li>
														<Link to="/ib-tutoring">
															<p><i class="fa fa-book" aria-hidden="true"></i> IB/IGCSE Tutoring</p>
														</Link>
													</li>
												</div>	
											</ul>
										</Link>
									</li>
									<li className="mnuhidemob">
										<a
											style={{textDecoration: "none"}}
											href="https://medium.com/collegepass"
											target="_blank"
											rel="noopener noreferrer"
										>
											<p>Blog</p>
										</a>
									</li>
								</ul>
							<input className="menu-btn" type="checkbox" id="menu-btn" />
							<label className="menu-icon" htmlFor="menu-btn">
								<span className="navicon" />
							</label>
							<ul className="menu">
								<li className="hvrdsp mnufnt">
									<p>MY COLLEGE PLAN</p>
									<p className="clscmingsn">*Coming Soon</p>
									{/*<ul className="nav-dropdown">
										<li>
											<p>MY TO-DO LIST</p>
										</li>
										<li>
											<p>MY COLLEGE READINESS</p>
										</li>
									</ul>*/}
								</li>
								{/*<li className="mnuhideshow">
									<Link to="/">
										<p>Home</p>
									</Link>
								</li>*/}
								<li className="mnuhideshow">
									<Link to="/live-sessions">
										<p>Live Sessions</p>
									</Link>
								</li>
								<li className="mnuhideshow">
									<Link to="/college-admission">
										<p>Book a free consultation</p>
									</Link>
								</li>
								<li className="mnuhideshow">
									<Link to="/sat-master-class-pro">
										<p>SAT/PSAT Tutoring</p>
									</Link>
								</li>
								<li className="mnuhideshow">
									<Link to="/ib-tutoring">
										<p>IB/IGCSE Tutoring</p>
									</Link>
								</li>
								<li className="mnuhideshow">
									<Link to="/my-profile">
										<p>PROFILE</p>
									</Link>
								</li>
								<li className="mnuhideshow">
									<Link to="/account">
										<p>ACCOUNT</p>
									</Link>
								</li>
								<li className="mnuhideshow">
									<Link to="/plan/info">
										<p>UPGRADE</p>
									</Link>
								</li>
								<li className="mnuhideshow hvrdsp">
									<p onClick={onClickLogoutHandler}>LOGOUT</p>
								</li>
								<li className="hvrdsp mnuicon mnuhidemob">
									<p>
										<img
											alt="navbar"
											src="../../assets/images/menu-icon.png"
											className="menu-avatar"
										/>
									</p>
									<ul className="nav-dropdown">
										<div className="dropheader">
											<li>
												<Link to="/my-profile">
													<p><i class="fa fa-users" aria-hidden="true"></i> PROFILE</p>
												</Link>
											</li>
											<li>
												<Link to="/account">
													<p><i class="fa fa-user-circle" aria-hidden="true"></i> ACCOUNT</p>
												</Link>
											</li>
											<li>
												<Link to="/plan/info">
													<p><i class="fa fa-wrench" aria-hidden="true"></i> UPGRADE</p>
												</Link>
											</li>
											<li>
												<p onClick={onClickLogoutHandler}><i class="fa fa-sign-out" aria-hidden="true"></i> LOGOUT</p>
											</li>
										</div>	
									</ul>
								</li>
								<Notify></Notify>
							</ul>
						</div>
					</header>
				</section>
			</div>
			<WindowScroll />
		</Fragment>
	);
};

AfterLoggedInHeader.propTypes = {
	logout: PropTypes.func.isRequired
	// isAuthenticated: PropTypes.bool
};

export default connect(null, { logout })(AfterLoggedInHeader);
