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
								
								{/*<Link to="/">
									<img
										alt="logo"
										src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/chaseivy_logo.svg"
										className="f_logo"
									/>
								</Link>
								<ul className="lgomnu">
									<li className="mnuhidemob">
										<Link to="/">
											<p>Home</p>
										</Link>
									</li>
									<li className="hvrdsp mnuicon mnuhidemob">
										<Link to="">
											<p>College Admissions</p>
											
											<ul className="nav-dropdown">
												<div className="dropheader">
													<li>
														Made Changes here to scroll to live class Button
														<Link to={`/#sectionLive`}>
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
									<li className="mnuhidemob">
										
										<p className="lgncontct">
											<a href="tel:+918802216273">
												<i class="fa fa-phone" aria-hidden="true"></i> +91
												88022-16273
											</a>
										</p>
									</li>
									<li className="top_login lgomnulogn">
									
									<p
										className="trigger1"
										data-toggle="modal"
										data-target="#myModal"
									>
										Log in
									</p>
								</li>
								</ul>*/}
							</div>

							<input className="menu-btn" type="checkbox" id="menu-btn" />
							<label className="menu-icon" htmlFor="menu-btn">
								<span className="navicon" />
							</label>
							<ul className="menu">
								<div className="headerv2">
								<li className="hvrdsp mnuicon mnuhidemob">
								<Link to="/">
									<img
										alt="logo emblem"
										src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png"
									/>
								</Link>
								</li>
								<li className="hvrdsp mnuicon mnuhidemob">
										<Link to="">
											<p>College Admissions</p>
											
											<ul className="nav-dropdown">
												<div className="dropheader">
													<li>
														{/* Made Changes here to scroll to live class Button */}
														<Link to={`/#sectionLive`}>
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
									<li className="top_login lgomnulogn">
									<i
										className="icon-user"
										style={{color: "black", fontWeight: "900"}}
									/>
									
									<p
										className="trigger1 lgnv2"
										data-toggle="modal"
										data-target="#myModal"
									>
										Log in
									</p>
								</li>
								<li className="mnuhidemob cntmenuv2">
									<a
										style={{textDecoration: "none"}}
										href="tel:+918802216273"
										target="_blank"
										rel="noopener noreferrer"
									>
										<p><i class="fa fa-phone" aria-hidden="true"></i> +91 88022-16273</p>
									</a>
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
								</li>*/}
								</div>
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
