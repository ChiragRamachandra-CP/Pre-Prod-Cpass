import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SliderAfterLogin = () => {
	return (
		<Fragment>
			<div className="Slider">
				<section className="slider-sec">
					<div className="hero-section afterlgnbnnr">
					<div className="mobile-banner afterloginbnnr">
							<div className="col-md-8 banner-cont mobbnrh">
								<h1>Your Path to the Ivy League<br/><span className="bnnrhedsndlne">Learn from Ivy League College Admission Advisors</span></h1>
								<h5>100+ Live Online Sessions Annually</h5>
								<Link to="/plan/info"><p className="bannerbtnbl">UPGRADE NOW</p></Link>
							</div>
						</div>
						<img
							src={'https://collegepass-slider.s3.ap-south-1.amazonaws.com/slider_Collegepass_3+(1).jpg'}
							alt="Banner" className="dbanners"
						/>

						<div className="container top-bnnr">
							<div className="row">
								<div className="col-md-8 banner-cont">
									<h1>Your Path to the Ivy League<br/><span className="bnnrhedsndlne">Learn from Ivy League College Admission Advisors</span></h1>
									<h5>100+ Live Online Sessions Annually<br/></h5>
									<Link to="/plan/info"><p className="bannerbtnbl">UPGRADE NOW</p></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default SliderAfterLogin;
