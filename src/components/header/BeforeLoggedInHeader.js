import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import WindowScroll from '../window/WindowScroll';
import Modal from '../modal/Modal';

const BeforeLoggedInHeader = () => {
	return (
		<Fragment>
			<div className="Header">
				<section className="head-sec">
					<header className="header">
						<div className="container">
							<div className="logo">
								<Link to="/">
									<img
										alt="logo emblem"
										src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png"
									/>
								</Link>
								<Link to="/">
									<img
										alt="logo"
										src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/chaseivy_logo.svg"
										className="f_logo"
									/>
								</Link>
							</div>

							<input className="menu-btn" type="checkbox" id="menu-btn" />
							<label className="menu-icon" htmlFor="menu-btn">
								<span className="navicon" />
							</label>
							<ul className="menu">
								<li className="top_login">
									<i className="icon-user" style={{ color: 'black', fontWeight: '900' }} />
									<p className="trigger1" data-toggle="modal" data-target="#myModal">Log in</p>
								</li>
								<Modal />
							</ul>
						</div>
					</header>
				</section>
			</div>
			<WindowScroll />
		</Fragment>
	);
};

export default BeforeLoggedInHeader;
