import React, {Fragment} from "react";
import BeforeLoggedInHeader from '../../components/header/BeforeLoggedInHeader';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from "../../components/footer/Footer";
import SliderLandingPage from "../../components/slider/SliderLandingPage";
import Video from "../../components/video/Video";
import Testimonial from "../../components/testimonial/Testimonial";
import LandingPageForm from "../../components/form/LandingPageForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SatMasterClassPro = ({ auth: { isAuthenticated } }) => {
    let headerComponent = <BeforeLoggedInHeader />;
    if (isAuthenticated) {
        headerComponent = <AfterLoggedInHeader />;
    }
    return (
        <Fragment>
            <div className="satID-1">
            {   headerComponent}

                {/* Based on sliderNumber we are changing the images in sliderNumber component */}
                <SliderLandingPage sliderNumber={"SAT_MASTER_PRO"} />
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
                <LandingPageForm landingFormText={"SAT Master Class PRO"} />
                <Testimonial />
                <Video landingVideo={"SAT_VID"} />
                <Footer />
            </div>
        </Fragment>
    );
};

//export default SatMasterClassPro;
SatMasterClassPro.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(SatMasterClassPro);