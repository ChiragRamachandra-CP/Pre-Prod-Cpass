import React, {Fragment} from "react";
import AfterLoggedInHeader from "../../components/header/AfterLoggedInHeader";
import Footer from "../../components/footer/Footer";
import SliderLandingPage from "../../components/slider/SliderLandingPage";
//import LandingPageIcon from "../../components/marketBanner/LandingPageIcon";
import Video from "../../components/video/Video";
import Testimonial from "../../components/testimonial/Testimonial";
import LandingPageForm from "../../components/form/LandingPageForm";

const PSATTutoring = () => {
	return (
		<Fragment>
			<div className="satID-1">
				<AfterLoggedInHeader />
				<SliderLandingPage sliderNumber={"PSAT"} />
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
										CollegePass Tutors are Internationally, Experienced Tutors!
									</li>
									<li className="fvlnetxt">
										CollegePass Tutors have graduated from leading universities
										worldwide.
									</li>
									<li className="fvlnetxt">
										CollegePass Students have consistently scored 1500+ in
										Consecutive SAT Test Dates in 2019-20
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
				{/*<LandingPageIcon />*/}
				<LandingPageForm />
				<Testimonial />
				<Video />
				<Footer />
			</div>
		</Fragment>
	);
};

export default PSATTutoring;