import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../payment/Plan.css';
import LoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';



const PaymentExpiry = () => {
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
                                                You have completed your free Access to CollegePass LIVE Online Events!
                                                </span>
                                                <p className="expupgrade">
                                                Upgrade to CollegePass Silver for INR 999 to enjoy 1 month Access to
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bdynotes pointsexp">
                                            <ul className="checkmarknotes">
                                                <li className="checkdetails">&#10004; All CollegePass LIVE Events</li>
                                                <li className="checkdetails">
                                                    &#10004; IELTS MasterClasses
                                                </li>
                                                <li className="checkdetails">&#10004; All Video Lessions</li>
                                            </ul>
                                            <span id="expnote" className="stepIndicator" style={{color: '#d9bd75'}}>
                                            Upgrade Today and get CollegePass Silver for INR 999 only
                                                </span>
                                        </div>
                                            <Link to="/plan/choose">
                                                <input type="button" className="seeplannotes expay" value="PAY NOW & UPGRADE TO COLLEGEPASS SILVER" />
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

export default PaymentExpiry;