import React, {Fragment} from "react";

const SliderLandingPage = ({sliderNumber}) => {
	let imageComponent = (
		<img
			src={"../../../public/assets/images/SAT.png"}
			alt="Banner"
			className="satbnner"
		/>
	);

	let sliderTextLanding = '';

	if (sliderNumber === "SAT_MASTER_PRO") {
		imageComponent = (
			<img src={"/assets/images/SAT.png"} alt="Banner" className="satbnner" />
		);

		sliderTextLanding = <div className="col-md-8 banner-cont">
		<h1>
		Score 1500+ on the SAT
			<span className="bnnrhedsndlne">
				<br />
				Learn from Top Rated, Experienced Tutors
			</span>
		</h1>
		<h5>80+ Live Classes</h5>
		<p className="bannerbtnbl"><a href="#gotolandingform">Book Your Free Trial Class</a></p>
	</div>
	}


	if (sliderNumber === "IB_TUTORING") {
		imageComponent = (
			<img src={"/assets/images/IBTutoring.png"} alt="Banner" className="satbnner" />
		);
		sliderTextLanding = <div className="col-md-8 banner-cont">
		<h1>
		IB/IGCSE Masterclasses
			<span className="bnnrhedsndlne">
				<br />
				Learn from Top Rated, Experienced IB/IGCSE Tutors
			</span>
		</h1>
		<h5>IB/IGCSE Tutoring</h5>
		<p className="bannerbtnbl"><a href="#gotolandingform">Book Your Free Trial Class</a></p>
	</div>
	}

	if (sliderNumber === "COLLEGE_ADMISSION") {
		imageComponent = (
			<img src={"/assets/images/CollegeAdmission.png"} alt="Banner" className="satbnner" />
		);
		sliderTextLanding = <div className="col-md-8 banner-cont">
		<h1>
		Join Your Dream College
			<span className="bnnrhedsndlne">
				<br />
				Learn from Ivy League/Oxbridge Admission Advisors
			</span>
		</h1>
		<h5>100+ Live Online Sessions</h5>
		<p className="bannerbtnbl"><a href="#gotolandingform">Book Your Free Consultation</a></p>
	</div>
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
								{sliderTextLanding}
							</div>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default SliderLandingPage;
