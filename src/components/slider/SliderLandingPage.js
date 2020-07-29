import React, {Fragment} from "react";

const SliderLandingPage = ({sliderNumber}) => {
	let imageComponent = (
		<img
			src={"../../../public/assets/images/SAT.png"}
			alt="Banner"
			className="satbnner"
		/>
	);

	if (sliderNumber === "SAT_MASTER_PRO") {
		imageComponent = (
			<img src={"https://collegepass-slider.s3.ap-south-1.amazonaws.com/banner3.jpg"} alt="Banner" className="satbnner" />
		);
	}
	if (sliderNumber === "IB_TUTORING") {
		imageComponent = (
			<img src={"https://collegepass-slider.s3.ap-south-1.amazonaws.com/banner1.jpg"} alt="Banner" className="satbnner" />
		);
	}
	if (sliderNumber === "PSAT") {
		imageComponent = (
			<img src={"https://collegepass-slider.s3.ap-south-1.amazonaws.com/banner2.jpg"} alt="Banner" className="satbnner" />
		);
	}

	return (
		<Fragment>
			<div className="Sliders">
				<section className="sliders-secs">
					<div className="heros-sections">
						<div className="mobile-banner">
							<div className="col-md-8 banner-cont">
								{/*<h1>Join Your Dream College.<br/><span className="bnnrhedsndlne">Learn from Global College Admission Advisors</span></h1>
								<h5>100+ Live Online Sessions Annually Video Lessons</h5>
    <p className="bannerbtnbl" data-toggle="modal" data-target="#myModal">Create Your Free Account</p>*/}
							</div>
						</div>

						{imageComponent}
						<div className="container top-bnnr">
							<div className="row">
								<div className="col-md-8 banner-cont">
									<h1>
										Score 1500+ With SAT Masterclass
										<span className="bnnrhedsndlne">
											<br />
											CollegePass Students have Consistently Scored 1500+ on
											Consecutive SAT Tests in 2019-20.
										</span>
									</h1>
									<h5>Learn from top Rated, International Tutors!</h5>
									<p className="bannerbtnbl"><a href="#gotolandingform">Book Your Free Consultation</a></p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default SliderLandingPage;
