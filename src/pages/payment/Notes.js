import React, { Fragment, useEffect } from 'react';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { APIstoreUserMoment } from '../../config/API';

import './Plan.css';

const Notes = () => {

	useEffect( ()=> {
		const storeUserMovement = async () => {
			//console.log(window.location.href);
			//console.log(new Date().toLocaleString());
			let body={"user_email": localStorage.user,
			    "page": [{"page": window.location.href},{"date": new Date().toLocaleString()}]}
			try {
				 await axios.post(APIstoreUserMoment, body);
				//console.log(result);
				
			} catch (error) {
				//do nothing for 
				//console.log(error);
			}
		};
		storeUserMovement()
	},[])

	return (
		<Fragment>
			<AfterLoggedInHeader />
			<div className="site-wrap page-payment-notes">
				<div className="container-fluid">
					<div className="container planbckbtn">
						<div className="breadcrumb-main">
							<ul className="breadcrumb">
								<Link to="/" className="bhome">
									<li className="toolbckpln">
										<i className="fas fa-long-arrow-alt-left" />
										<span className="tooltiptext">Back</span>
									</li>
								</Link>
							</ul>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="maincontnotes">
									<div className="stepLogoContainer">
										<span className="stepLogo planStepLogo">
											<img
												src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/Checkmark.png"
												alt="checkmark"
											/>
										</span>
									</div>
									<div className="stepHeader-container">
										<div className="stepHeader">
											<span id="" className="stepIndicator">
												STEP <b>1</b> OF <b>3</b>
											</span>
											<h1 className="stepTitle">Choose your plan.</h1>
										</div>
									</div>
									<div className="bdynotes">
										<ul className="checkmarknotes">
											<li className="checkdetails">&#10004; No commitments, cancel anytime.</li>
											<li className="checkdetails">
												&#10004; Everything on CollegePass for one low price.
											</li>
											<li className="checkdetails">&#10004; No ads and no extra fees. Ever.</li>
										</ul>
									</div>
									<div className="submitBtnContainer">
										<Link to="/plan/choose">
											<input type="button" className="seeplannotes" value="SEE THE PLANS" />
										</Link>
									</div>
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

export default Notes;
