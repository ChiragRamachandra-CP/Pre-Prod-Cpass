import React, {Fragment} from "react";
import BeforeLoggedInHeader from '../../components/header/BeforeLoggedInHeader';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';import Footer from "../../components/footer/Footer";
import SliderLandingPage from "../../components/slider/SliderLandingPage";
import Video from "../../components/video/Video";
import Testimonial from "../../components/testimonial/Testimonial";
import LandingPageForm from "../../components/form/LandingPageForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const IBTutoring = ({ auth: { isAuthenticated } }) => {
    let headerComponent = <BeforeLoggedInHeader />;
    if (isAuthenticated) {
        headerComponent = <AfterLoggedInHeader />;
    }
    return (
        <Fragment>
            <div className="satID-2">
            {headerComponent}
                <SliderLandingPage sliderNumber={"IB_TUTORING"} />
                <section className="mainSAT">
                    <div className="container">
                        <section className="single_video">
                            <div className="upcmngls">
                                <div className="frsttxt">
                                    <p className="heddesc">The CollegePass Experience</p>
                                    <h2 className="new-class-heading" style={{textAlign: "left"}}>
                                        IB/IGCSE Masterclasses
                                    </h2>
                                    <li className="fvlnetxt">
                                        CollegePass students have consistently scored 40+ on IB
                                        Exams in 2019/20
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
                <LandingPageForm landingFormText={"IB Tutoring"} />
                <Testimonial />
                <Video landingVideo={"IB_VID"} />
                <Footer />
            </div>
        </Fragment>
    );
};

IBTutoring.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(IBTutoring);