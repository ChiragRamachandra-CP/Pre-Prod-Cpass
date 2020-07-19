import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const TopHeaderWarning = ({ logout }) => {
	const onClickLogoutHandler = () => {
		logout();
	};

	return (
		<Fragment>
			<div className="warning-sec">
				<p className="title-text-p">
					<Link to="/my-profile">PLEASE FILL BASIC DETAILS TO GET A BETTER-PERSONALIZED RESULT.</Link>
				</p>
			</div>
			<div className="Header">
				<section className="head-sec">
					<header className="header tripscss">
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
							<input className="menu-btn" type="checkbox" id="menu-btn" />
							<label className="menu-icon" htmlFor="menu-btn">
								<span className="navicon" />
							</label>
							<ul className="menu desktopmenu">
								<li className="hvrdsp mnufnt">
									<p className="caret">MY COLLEGE PLAN</p>
									{/*<ul className="nav-dropdown">
										<li>
											<p>MY TO-DO LIST</p>
										</li>
										<li>
											<p>MY COLLEGE READINESS</p>
										</li>
									</ul>*/}
								</li>
								<li className="hvrdsp mnuicon">
									<p className="caret">
										<img
											alt="navbar"
											src="../../assets/images/menu-icon.png"
											className="menu-avatar"
										/>
									</p>
									<ul className="nav-dropdown">
										<li>
											<Link to="/my-profile">
												<p>PROFILE</p>
											</Link>
										</li>
										<li>
											<Link to="/account">
												<p>ACCOUNT</p>
											</Link>
										</li>
										<li>
											<Link to="/plan/info">
												<p>UPGRADE</p>
											</Link>
										</li>
										<li>
											<p onClick={onClickLogoutHandler}>LOGOUT</p>
										</li>
									</ul>
								</li>
							</ul>

							<ul className="menu mobilemenu">
								<li className="hvrdsp mnufnt">
									<p className="caret">MY COLLEGE PLAN</p>
									{/*<ul className="nav-dropdown">
										<li>
											<p>MY TO-DO LIST</p>
										</li>
										<li>
											<p>MY COLLEGE READINESS</p>
										</li>
									</ul>*/}
								</li>
								<li className="hvrdsp mnufnt">
									<Link to="/my-profile">
										<p>PROFILE</p>
									</Link>
								</li>
								<li className="hvrdsp mnufnt">
									<Link to="/account">
										<p>ACCOUNT</p>
									</Link>
								</li>
								<li className="hvrdsp mnufnt">
									<Link to="/plan/info">
										<p>UPGRADE</p>
									</Link>
								</li>
								<li className="hvrdsp mnufnt">
									<p onClick={onClickLogoutHandler}>LOGOUT</p>
								</li>
							</ul>
						</div>
					</header>
				</section>
			</div>
		</Fragment>
	);
};

TopHeaderWarning.propTypes = {
	logout: PropTypes.func.isRequired
	// isAuthenticated: PropTypes.bool
};

export default connect(null, { logout })(TopHeaderWarning);
