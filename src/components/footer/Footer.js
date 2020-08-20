import React, {Fragment} from "react";
import ScrollHeader from "../scrollHandler/ScrollHandler";

const Footer = () => {
	return (
		<Fragment>
			<ScrollHeader></ScrollHeader>
			<div className="Footer-main">
				<div className="ftr-sec">
					<div className="container">
						<div className="footer-mainsec">
							<div className="col-md-4 mob-wid-set">
								<div className="ftr-mnu explore">
									<div className="ftr-mnu-h">
										<span>Explore</span>
									</div>
									<div className="ftr-mnu-l">
										<ul>
											<li>
												<a href="#upcomigTop">Live events</a>
											</li>
											<li>
												<a href="#videoLessonsTop">Video Lessons</a>
											</li>
											<li>
												<a href="# ">Sitemap</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-4 mob-wid-set">
								<div className="ftr-mnu about">
									<div className="ftr-mnu-h">
										<span>About</span>
									</div>
									<div className="ftr-mnu-l">
										<ul>
											<li>
												<a href="/about">About Us</a>
											</li>
											<li>
												<a href="/privacy">Privacy</a>
											</li>
											<li>
												<a href="/terms">Terms</a>
											</li>
											<li>
												<a
													href="mailto:support@collegepass.org"
													target="_blank"
													rel="noopener noreferrer"
												>
													Support
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="ftr-mnu social soc-b">
									<div className="ftr-mnu-h">
										<span>Social</span>
									</div>
									<div className="ftr-mnu-l">
										<ul>
											<li>
												<a href="https://twitter.com/CollegePassOne?s=09">
													<i
														className="fa fa-twitter-square"
														aria-hidden="true"
													/>{" "}
													Twitter
												</a>
											</li>
											<li>
												<a href="https://www.instagram.com/_collegepass/">
													<i className="fa fa-instagram" aria-hidden="true" />{" "}
													Instagram
												</a>
											</li>
											<li>
												<a href="https://www.facebook.com/CollegePassPremiere/">
													<i
														className="fa fa-facebook-official"
														aria-hidden="true"
													/>{" "}
													Facebook
												</a>
											</li>
											<li>
												<a href="https://www.linkedin.com/company/collegepass/">
													<i className="fa fa-linkedin" aria-hidden="true" />
													LinkedIn
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="ftr-mnu social soc-s">
									<div className="ftr-mnu-h">
										<span>Social</span>
									</div>
									<div className="ftr-mnu-l">
										<ul>
											<li>
												<a href="https://twitter.com/CollegePassOne?s=09">
													<i
														className="fa fa-twitter-square"
														aria-hidden="true"
													/>
												</a>
											</li>
											<li>
												<a href="https://www.instagram.com/_collegepass/">
													<i className="fa fa-instagram" aria-hidden="true" />
												</a>
											</li>
											<li>
												<a href="https://www.facebook.com/CollegePassPremiere/">
													<i
														className="fa fa-facebook-official"
														aria-hidden="true"
													/>
												</a>
											</li>
											<li>
												<a href="https://www.linkedin.com/company/collegepass/">
													<i className="fa fa-linkedin" aria-hidden="true" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="cpy-wrt">
					<div className="container">
						<div className="row copyright">
							<div
								className="copy-e"
								style={{
									borderRight: "1px solid rgba(255, 255, 255, 0.3)",
									paddingRight: "1.6rem",
								}}
							>
								<a href="# ">
									<img
										alt="logo"
										src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png"
										className="c-logo"
									/>
								</a>
							</div>
							<div className="copy-e ctt">
								<a href="# ">
									<img
										alt="logo"
										src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/chaseivy_logo.svg"
									/>
								</a>
							</div>
							<div className="copy-e ctt">
								<span className="cpy-m-20">&copy; 2019 CollegePass</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*<div id="calendybtn">
				<button data-toggle="tooltip" title="Book Your Free Personal Consultation!" class="clndfeed"><i class="fa fa-calendar" aria-hidden="true"></i></button>
			</div>*/}

			{/*<div className="modal fade" id="free_counselling" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header border-bottom-0 row">
					<div className="col-md-12 mdllgo"><img src="https://www.collegepass.org/assets/images/holo.png" style={{width: '100px', height: '100px'}} /></div>
					<div className="col-md-12 mdlhdng"><h4 className="text-center color_grey mt-3" style={{marginBottom: '1px', color: '#4d5768'}}><center>Applying to the World's Best Colleges!</center></h4></div>
					<button type="button" className="close btnclsm" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div>
					<div className="">
						<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
						<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
						<a href="javascript:void(0)" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/collegepass'});return false;" className="btn btn-main btn-block nomargin mdlppbtn" >Book Your Free Personal Consultation</a>
						
					</div>
				</div>
				</div>
			</div>
			<div id="popupsidebtnfx">
				<button type="button" title="Book Your Free Personal Consultation" className="btn btn-danger fxsde" data-toggle="modal" data-target="#free_counselling">
					<i className="fa fa-calendar" aria-hidden="true" style={{fontSize: '29px'}}></i>
				</button>  
			</div>*/}
		</Fragment>
	);
};

export default Footer;
