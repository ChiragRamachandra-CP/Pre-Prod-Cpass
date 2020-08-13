import React, { Fragment } from 'react';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/testimonial/Testimonial';



const PurchasePlan = () => {
	
	return (
		<Fragment>
			<div className="satID-1 purchasemain">
				<AfterLoggedInHeader />
				<div className="Sliders">
				<section className="sliders-secs">
					<div className="heros-sections">
						<div className="mobile-banner">
							<div className="col-md-8 banner-cont">
							</div>
						</div>
						<img src={"/assets/images/SAT.png"} alt="Banner" className="satbnner" />
						<div className="container top-bnnr">
							<div className="row">
                                <div className="col-md-8 banner-cont">
                                    <h1>
                                    Score 1500+ on the SAT
                                        <span className="bnnrhedsndlne">
                                            <br />
                                            Learn from Top Rated, Experienced Tutors
                                        </span>
                                    </h1>
                                    <h5>80+ Live Classes</h5>
                                    <p className="bannerbtnbl"><a href="#">Purchase</a></p>
                                </div>
							</div>
						</div>
					</div>
				</section>
			</div>
				<section className="mainSAT">
					<div className="container">
						<section className="single_video">
							<div className="upcmngls">
								<div className="frsttxt">
									<p className="heddesc">The CollegePass Experience</p>
									<h2 className="new-class-heading" style={{textAlign: "left"}}>
										Beat the SAT/PSAT
									</h2>
									<li className="fvlnetxt">
										CollegePass students have consistently scored 1500+ in
										consecutive test dates across 2019-20
									</li>
									<li className="fvlnetxt">
										Learn from Top Rated, Internationally Experienced Tutors
									</li>
									<li className="fvlnetxt">Classes Every Week</li>
									<li className="fvlnetxt">10+ Practice Tests</li>
									<li className="fvlnetxt">Personalised Tutor Feedback</li>
								</div>
							</div>
						</section>
					</div>
				</section>
				<Testimonial />
				<section class="landingVideo">
                <div class="container upcmngls">
                    <div className="upcmnglsv">
                    <iframe
                    src="https://player.vimeo.com/video/409699040"
                    width="1200"
                    //height="564"
                    frameBorder="0"
                    id="sing_vd"
                    allow="autoplay"
                    title="video"
                    allowFullScreen
                />
                    </div>
                </div>
            </section>
            <div className="purchasebtn"><a href="#">Purchase</a></div>
				<Footer />
			</div>
		</Fragment>
	);
};

export default PurchasePlan;
