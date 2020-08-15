import React, { Fragment } from 'react';
import Modal from '../modal/Modal';

const Slider = () => {
	return (
		<Fragment>
			<div className="Sliders slidev2l">
				<section className="sliders-secs">
					<div className="heros-sections">
							

						<div className="container top-bnnr">
							<div className="row">
								<div className="col-md-5 banner-cont">
									<h1>Join Your <br/>Dream College</h1>
									<h5>Learn from Global College Admission Advisors</h5>
									<div className="sldbtnv2">
									<p className="bannerbtnbl" data-toggle="modal" data-target="#myModal">Create Your Free Account</p>
									<h5 className="btntxtv2">100+ Live Online Sessions Annually</h5>
									</div>
								</div>
								<Modal />
							</div>
						</div>

									
						</div>
				</section>
			</div>

			<div className="Sliders slidev2r">
				<section className="sliders-secs">
					<div className="heros-sections">
							<div className="carousel slide" id="main-carousel" data-ride="carousel">
								{/*<ol className="carousel-indicators">
									<li data-target="#main-carousel" data-slide-to="0" className="active"></li>
									<li data-target="#main-carousel" data-slide-to="1"></li>
									<li data-target="#main-carousel" data-slide-to="2"></li>
								</ol>*/}
								
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block img-fluid" src="https://collegepass-slider.s3.ap-south-1.amazonaws.com/banner1.jpg"
										 alt="Banner" />
										 

										{/*<div className="container top-bnnr">
											<div className="row">
												<div className="col-md-8 banner-cont">
													<h1>Join Your Dream College<br/><span className="bnnrhedsndlne">Learn from Global College Admission Advisors</span></h1>
													<h5>100+ Live Online Sessions Annually</h5>
													<p className="bannerbtnbl" data-toggle="modal" data-target="#myModal">Create Your Free Account</p>
												</div>
												<Modal />
											</div>
										</div>*/}

									</div>
									<div className="carousel-item">
										<img className="d-block img-fluid" src="https://collegepass-slider.s3.ap-south-1.amazonaws.com/banner2.jpg" alt="" />
										
										{/*<div className="container top-bnnr">
											<div className="row">
												<div className="col-md-8 banner-cont">
													<h1>Your Path to the Ivy League<br/><span className="bnnrhedsndlne">Learn from Ivy League College Admission Advisors</span></h1>
													<h5>100+ Live Online Sessions Annually</h5>
													<p className="bannerbtnbl" data-toggle="modal" data-target="#myModal">Create Your Free Account</p>
												</div>
												<Modal />
											</div>
										</div>*/}

									</div>
									<div className="carousel-item">
										<img className="d-block img-fluid" src="https://collegepass-slider.s3.ap-south-1.amazonaws.com/banner3.jpg" alt="" />
										
										{/*<div className="container top-bnnr">
											<div className="row">
												<div className="col-md-8 banner-cont">
													<h1>SAT/IELTS/IB Masterclasses <br/><span className="bnnrhedsndlne">Learn from Internationally Experienced Tutors</span></h1>
													<h5>80 Hrs+ Live Online Classes Annually</h5>
													<p className="bannerbtnbl" data-toggle="modal" data-target="#myModal">Create Your Free Account</p>
												</div>
												<Modal />
											</div>
										</div>*/}
										
									</div>
								</div>
								
								{/*<a href="#main-carousel" className="carousel-control-prev" data-slide="prev">
									<span className="carousel-control-prev-icon"></span>
									<span className="sr-only" aria-hidden="true">Prev</span>
								</a>
								<a href="#main-carousel" className="carousel-control-next" data-slide="next">
									<span className="carousel-control-next-icon"></span>
									<span className="sr-only" aria-hidden="true">Next</span>
								</a>*/}
								
							</div>
						</div>
				</section>
			</div>
		</Fragment>
	);
};

export default Slider;
