import React, { Fragment,useEffect, useState } from 'react';
//import BeforeLoggedInHeader from '../../header/BeforeLoggedInHeader';
//import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import '../payment/ThankYou.css';
//import { setAlert } from '../../../actions/alert';
import axios from 'axios';

import { APIverifyUserEmail } from '../../config/API';

const SuccesfullValidate = ({ match, setAlert, isAuthenticated }) => {

    const valTok = match.params.valTok;
    const [check, setCheck] = useState(false);
    let mainContent = 
    <div className="maincontnotes varsuccesp">
        <div className="stepLogoContainer">
            <span className="stepLogo planStepLogo">
                <i class="fa fa-check" aria-hidden="true"></i>
            </span>
        </div>
        <div className="stepHeader-container">
            <div className="stepHeader">
                <span
                    style={{ color: '#ffffff', fontSize: 30, fontWeight: '600' }}
                    id=""
                    className="stepIndicator"
                >
                    Verified!
                </span>
            </div>
        </div>
        <div className="bdynotes">
            <p style={{color: '#fff', opacity: '0.8', padding: '20px 0px'}}>
                You have <span style={{color:'#efdf93',opacity: '1', fontSize: '18px', fontWeight: '600'}}>Successfully.</span> varified the Email account. 
            </p>
        </div>
        <div className="submitBtnContainer">
        <Link to="/"><input
                type="button"
                className="seeplannotes"
                value="Go to Homepage"
                style={{ width: '40%', maxWidth: '100%' }}
            /></Link>
        </div>
    </div>

    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    };

                    const result = await axios.get(
                        `${APIverifyUserEmail}${valTok}`, config
                    );

                    //console.log('result', result);

                    if (result.status === 200) {
                        setCheck(false);
                    } else {
                        setCheck(true);
                    }

                } catch (error) {
                    //do nothing for now
                }
            };
            fetchData();
        },
        [ valTok ]
    );

    if(check === true){
        mainContent = <div className="maincontnotes">
                            <div className="stepLogoContainer">
                                <span className="stepLogo planStepLogo">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="stepHeader-container">
                                <div className="stepHeader">
                                    <span
                                        style={{ color: '#ffffff', fontSize: 30, fontWeight: '600' }}
                                        id=""
                                        className="stepIndicator"
                                    >
                                        Something went wrong, Please contact support@collegepass.org
                                    </span>
                                </div>
                            </div>
                            <div className="submitBtnContainer">
                                <Link to="/">
                                    <input
                                        type="button"
                                        className="seeplannotes"
                                        value="Go to Homepage"
                                        style={{ width: '40%', maxWidth: '100%' }}
                                    />
                                </Link>
                            </div>
                      </div>
            }else{
                mainContent = <div className="maincontentp varsucessbrd">
					<div class="breadcrumb-main">
                        <ul class="varifybrdcrmb">
                            <a class="bhome" href="/">
                                <li class="toolbckpln">
                                    <i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i>
                                    <span class="tooltiptext">Home</span>
                                </li>
                            </a>
                        </ul>
                    </div>
					<div class="container planbckbtn">
                    
                </div>
                            <div className="stepHeader-container validfix">
							<a href="/">
							<p className="varimg smlvrf">
                            <img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" alt="Logo1" /></p>
                <p className="varimg">
                <img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/chaseivy_logo.svg" alt="Logo2" /></p>
								</a>
								<div className="stepLogoContainer">
									<span className="varicn">
										<i class="fa fa-check" aria-hidden="true"></i>
									</span>
								</div>

                                <div className="stepHeader">
                                    <h1 className="stepIndicator">
                                        Congratulations!!
                                    </h1>
									<p className="stepIndicator">
                                        Email has been successfully verified. Please log in to continue.
                                    </p>
                                </div>
								
								<div className="submitBtnContainer">
									<Link to="/">
										<input
											type="button"
											className="seeplannotes"
											value="Go to Homepage"
											style={{ width: '40%', maxWidth: '100%' }}
										/>
									</Link>
                            	</div>

                            </div>
                      </div>
            }

            return (
                <Fragment>

                    <div className="site-wrap page-payment-notes">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        {mainContent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        };

export default SuccesfullValidate;