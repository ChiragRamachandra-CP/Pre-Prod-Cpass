import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import WindowScroll from "../window/WindowScroll";
import Modal from "../modal/Modal";
import Notify from "../modal/Notify";

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
								<ul className="lgomnu ipadvmenu">
									{/*<li className="mnuhidemob">
										<Link to="/">
											<p>Home</p>
										</Link>
									</li>*/}
									<li className="hvrdsp mnuicon mnuhidemob">
										<Link to="">
											<p>College Admissions</p>
											<ul className="nav-dropdown">
												<li>
													<Link to={`/#sectionLive`}>
														<p>Live Sessions</p>
													</Link>
												</li>
												<li>
													<Link to="/college-admission">
														<p>Book a free consultation</p>
													</Link>
												</li>
											</ul>
										</Link>
									</li>
									<li className="hvrdsp mnuicon mnuhidemob">
										<Link to="">
											<p>Tutoring</p>
											<ul className="nav-dropdown">
												<li>
													<Link to="/sat-master-class-pro">
														<p>SAT/PSAT Tutoring</p>
													</Link>
												</li>
												<li>
													<Link to="/ib-tutoring">
														<p>IB/IGCSE Tutoring</p>
													</Link>
												</li>
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
							</div>

							<input className="menu-btn" type="checkbox" id="menu-btn" />
							<label className="menu-icon" htmlFor="menu-btn">
								<span className="navicon" />
							</label>
							<ul className="menu ipadvlogin">
								<li className="top_login mnuhidemob">
									<i
										className="icon-user"
										style={{color: "black", fontWeight: "900"}}
									/>
									<p className="lgncontct">
										<a href="tel:+918802216273">
											<i class="fa fa-phone" aria-hidden="true"></i> +91
											88022-16273
										</a>
									</p>
									<p
										className="trigger1"
										data-toggle="modal"
										data-target="#myModal"
									>
										Log in
									</p>
								</li>

								<li className="top_login mnuhideshow">
									<i
										className="icon-user"
										style={{color: "black", fontWeight: "900"}}
									/>
									<p className="lgncontct">
										<a href="tel:+918802216273">
											<i class="fa fa-phone" aria-hidden="true"></i> +91
											88022-16273
										</a>
									</p>
								</li>
								{/*<li className="mnuhideshow">
									<Link to="/">
										<p>Home</p>
									</Link>
								</li>
								<li className="mnuhideshow">
									<Link to="/#upcomigTop">
										<p>Live Sessions</p>
									</Link>
								</li>*/}
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
								<li className="top_login mnuhideshow">
									<p
										className="trigger1"
										data-toggle="modal"
										data-target="#myModal"
									>
										Log in
									</p>
								</li>
								<Modal />
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

export default BeforeLoggedInHeader;
