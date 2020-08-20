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

const CollegeAdmission = ({ auth: { isAuthenticated } }) => {
    let headerComponent = <BeforeLoggedInHeader />;
    if (isAuthenticated) {
        headerComponent = <AfterLoggedInHeader />;
    }
    return (
        <Fragment>
            <div className="satID-1">
                {headerComponent}
                <SliderLandingPage sliderNumber={"COLLEGE_ADMISSION"} />
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
                                        Learn from Ivy League/OxBridge Admission Advisors
                                    </li>
                                    <li className="fvlnetxt">
                                        Get your Personalised College Application Timeline
                                    </li>
                                    <li className="fvlnetxt">
                                        Craft Your College Application Strategy
                                    </li>
                                    <li className="fvlnetxt">Choose Your Extracurriculars</li>
                                    <li className="fvlnetxt">Prepare for SAT/ACT/BMAT/APs</li>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <LandingPageForm landingFormText={"CA_FORM"} />
                <Testimonial />
                <Video landingVideo={"COLLEGE_ADMISSION_VID"} />
                <Footer />
            </div>
        </Fragment>
    );
};

//export default CollegeAdmission;
CollegeAdmission.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(CollegeAdmission);