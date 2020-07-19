import React, { Fragment, useEffect } from 'react';
import Header from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';
import ProfilePersonalDetails from './ProfilePersonalDetails';
import ProfileEducationDetails from './ProfileEducationDetails';
import ProfileExtracurricular from './ProfileExtracurricular';
import './MyProfile.css';
import axios from 'axios';

import { APIstoreUserMoment } from '../../config/API';


const MyProfile = () => {

	useEffect( ()=> {
		const storeUserMovement = async () => {
			//console.log(window.location.href);
			//console.log(new Date().toLocaleString());
			let body={"user_email": localStorage.user,
			    "page": [{"page": window.location.href},{"date": new Date().toLocaleString()}]}
			try {
				const result = await axios.post(APIstoreUserMoment, body);
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
			<Header />
			<div className="contact-page ptb100">
				<div className="container">
					<h2 className="new-class-heading">My Profile</h2>

					<ul className="nav nav-tabs" role="tablist">
						<li className="nav-item">
							<a className="nav-link active" data-toggle="tab" href="#home">
								<b>Personal Details</b>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" data-toggle="tab" href="#menu1">
								<b>Education Details</b>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" data-toggle="tab" href="#menu2">
								<b>Extracurricular</b>
							</a>
						</li>
					</ul>

					<div className="tab-content">
						<div id="home" className="container tab-pane active">
							<ProfilePersonalDetails />
						</div>

						<div id="menu1" className="container tab-pane fade">
							<ProfileEducationDetails />
						</div>

						<div id="menu2" className="container tab-pane fade">
							<ProfileExtracurricular />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default MyProfile;
