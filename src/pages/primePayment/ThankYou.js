import React, { Fragment, useEffect } from 'react';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import './ThankYou.css';
import axios from 'axios';

import { APIstoreUserMoment } from '../../config/API';

const ThankYou = (message) => {

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
					<div className="container thnkyumain">
						<div className="row">
							<div className="col-12">
								<div className="maincontnotes">
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
												Thank You!
											</span>
										</div>
									</div>
									<div className="bdynotes">
										<p style={{color: '#fff', opacity: '0.8', padding: '20px 0px'}}>
										Your Payment is successfully processed. <br/>
										Thanks for subscribing to  <span style={{color:'#efdf93',opacity: '1', fontSize: '18px', fontWeight: '600'}}>CollegePass</span>
										</p>
									</div>
									<div className="submitBtnContainer">
									<Link to="/"><input
											type="button"
											className="seeplannotes"
											value="Homepage"
											style={{ width: '40%', maxWidth: '100%' }}
										/></Link>
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

export default ThankYou;
