import React, {Fragment} from "react";
import AfterLoggedInHeader from "../../components/header/AfterLoggedInHeader";
import Footer from "../../components/footer/Footer";
import SliderLandingPage from "../../components/slider/SliderLandingPage";
import LandingPageIcon from "../../components/marketBanner/LandingPageIcon";
//import Video from '../../components/video/Video';
import Testimonial from "../../components/testimonial/Testimonial";
import LandingPageForm from "../../components/form/LandingPageForm";

const IBTutoring = () => {
	return (
		<Fragment>
			<div className="satID-2">
				<AfterLoggedInHeader />
				<SliderLandingPage sliderNumber={"IB_TUTORING"} />
				<section className="mainSAT">
					<div className="container">
						<section className="single_video">
							<div className="upcmngls">
								<div className="frsttxt">
									<p className="heddesc">The CollegePass Experience</p>
									<h2 className="new-class-heading" style={{textAlign: "left"}}>
										Join Your Dream College
									</h2>
									<li className="fvlnetxt">
										CollegePass IB Tutoring is committed to helping students
										achieve their target IB Score.
									</li>
									<li className="fvlnetxt">
										CollegePass Tutors are experienced and have taught at
										leading IB Schools.
									</li>
									<li className="fvlnetxt">
										CollegePass Tutors have graduated from leading universities
										worldwide.
									</li>
									<li className="fvlnetxt">
										CollegePass Students have Top Scored in 2019-20 with 40-42.
									</li>
									<li className="fvlnetxt">
										CollegePass Students have a Personal Student Success
										Manager.
									</li>
								</div>
							</div>
						</section>
					</div>
				</section>
				<LandingPageIcon />
				<Testimonial />
				<LandingPageForm />
				<Footer />
			</div>
		</Fragment>
	);
};

export default IBTutoring;
