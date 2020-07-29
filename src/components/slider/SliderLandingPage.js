import React, { Fragment } from 'react';

const SliderLandingPage = () => {
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
						<img
							src={'../../assets/images/SATTT.png'}
							alt="Banner" className="satbnner"
						/>
						<div className="container top-bnnr">
							<div className="row">
								<div className="col-md-8 banner-cont">
									<h1>Score 1500+ With SAT Masterclass<span className="bnnrhedsndlne"><br/>COLLEGEPASS STUDENT HAVE CONSISTENTLY SCORED 1500+ ON CONSECUTIVE SAT TESTS IN 2019-20.</span></h1>
									<h5>LEARN FROM TOP RATED, INTERNATIONAL TUTORS!</h5>
									<p className="bannerbtnbl">Book Your Free Consultation</p>
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
