import React, { Fragment } from 'react';
import BeforeLoggedInHeader from '../../components/header/BeforeLoggedInHeader';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Testimonial from "../../components/testimonial/Testimonial";

const AboutTest = ({ auth: { isAuthenticated } }) => {
	let headerComponent = <BeforeLoggedInHeader />;
	if (isAuthenticated) {
		headerComponent = <AfterLoggedInHeader />;
	}
	return (
		<Fragment>
			{headerComponent}
			<div className="site-wrap">
				<section className="newest-class aboutmain aboutmainTest">
					<div className="container">
						<div className="new-class aboutestw">
							<h2 style={{textAlign: 'center', fontSize: '40px', lineHeight: '0.2'}}>Join Your Dream College</h2>
							<p style={{fontSize: '20px', lineHeight: '1.9rem', color: '#000', fontWeight: '500', opacity: '0.8'}}>CollegePass is making High Quality College Admission Advice, Standardised Test Preparation accessible to High Schoolers worldwide at the click of a button!</p>
                        </div>
                        
                        <div className="new-class aboutestv">
                            <div className="testmenu">
                            <ul>
                                <li><a href="#missionID">Our Mission <i class="fa fa-chevron-right" aria-hidden="true" style={{fontSize: '12px', fontWeight: '200'}}></i></a></li>
                                <li><a href="#">Meet the Team <i class="fa fa-chevron-right" aria-hidden="true" style={{fontSize: '12px', fontWeight: '200'}}></i></a></li>
                                <li><a href="#studentTestimonial">What Students are Saying <i class="fa fa-chevron-right" aria-hidden="true" style={{fontSize: '12px', fontWeight: '200'}}></i></a></li>
                            </ul>
                            </div>
                            <div className="testvideo">
                            <video width="1000px" id="sing_vd" autoplay muted>
                                <source src="../../assets/images/Marketing.mp4" type="video/mp4" />
                            </video>
                            </div>
                        </div>

                        <div className="new-class aboutestw" id="missionID">
							<h2 style={{textAlign: 'center', fontSize: '22px', lineHeight: '0.2', marginTop: '70px'}}>Our Mission</h2>
							<p style={{fontSize: '20px', lineHeight: '1.9rem', color: '#000', fontWeight: '500', opacity: '0.8'}}>We believe World Class, Live Content delivered in a personalised and affordable way using technology is the key to ensuring every child has access to his own virtual private college coach.</p>
                        </div>

                        <section className="single_video">
                            <div className="upcmngls">
                                <div className="frsttxt">
                                    <h2 className="new-class-heading" style={{textAlign: 'left', color: '#000', fontSize: '22px', opacity: '0.9'}}>CollegePass Comprehensive College Preparation includes:</h2>
                                    <li className="fvlnetxt">College Admission Advice from a Global Network of Advisors</li>
                                    <li className="fvlnetxt">Personalised Application: Application Timeline and To Do’s for each School Year</li>
                                    <li className="fvlnetxt">SAT/PSAT/IELTS/ACT Preparation with International Master Tutors</li>
                                    <li className="fvlnetxt">IB/IGCSE Tutoring with Experienced International Curriculum Tutors</li>
                                </div>
                            </div>
                        </section>
                        
					</div>
				</section>
            </div>
				<Testimonial />
			<Footer />
		</Fragment>
	);
};

AboutTest.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(AboutTest);
