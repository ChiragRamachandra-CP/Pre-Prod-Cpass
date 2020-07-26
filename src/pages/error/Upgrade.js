import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../payment/Plan.css';
import LoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';



const Upgrade = ({ match }) => {


        var event_premium = match.params.eventPremiumLevel;

        var title_text= null;

        var main_text= null;

        console.log('event_premium',typeof event_premium);

        if(event_premium === '3'){

            title_text =<p className="expupgrade">
            Upgrade to CollegePass Gold for INR 3999 to enjoy 1 month Access to
            </p>;

            main_text=<div className="bdynotes pointsexp">
            <ul className="checkmarknotes">
                <li className="checkdetails">&#10004; All CollegePass LIVE Events</li>
                <li className="checkdetails">
                    &#10004; All MasterClasses
                </li>
                <li className="checkdetails">&#10004; All Video Lessions</li>
            </ul>
            <span id="expnote" className="stepIndicator" style={{color: '#d9bd75'}}>
            Upgrade Today and get CollegePass Gold for INR 3999 only
                </span>
            </div>;

        }else if(event_premium === '4'){


            console.log('jvadhj');

            title_text =<p className="expupgrade">
            Upgrade to CollegePass Platinum for INR 7999 to enjoy 1 month Access to
            </p>;

            main_text=<div className="bdynotes pointsexp">
            <ul className="checkmarknotes">
                <li className="checkdetails">&#10004; All CollegePass LIVE Events</li>
                <li className="checkdetails">
                    &#10004; All MasterClasses
                </li>
                <li className="checkdetails">&#10004; All Video Lessions</li>
            </ul>
            <span id="expnote" className="stepIndicator" style={{color: '#d9bd75'}}>
            Upgrade Today and get CollegePass Gold for INR 7999 only
                </span>
            </div>;

        }else{          }

    return (
        <Fragment>
            <LoggedInHeader />
                <div className="site-wrap page-payment-notes expiredmain">
                    <div className="container-fluid">
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="maincontnotes expwidth">
                                        <div className="stepHeader-container">
                                            <div className="stepHeader">
                                                <h1 className="stepTitle">Dear Customer</h1>
                                                <span id="expnote" className="stepIndicator">
                                                Your current plan does not allow you to view this online event!
                                                </span>
                                                {title_text}
                                            </div>
                                        </div>
                                        {main_text}
                                            <Link to="/plan/choose">
                                                <input type="button" className="seeplannotes expay" value="UPGRADE YOUR COLLEGEPASS PLAN" />
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </Fragment>
    );
};

export default Upgrade;