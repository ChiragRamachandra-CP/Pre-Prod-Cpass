import React, {Fragment, useState} from "react";
import { setAlert } from '../../actions/alert';
import { APILandingPageInfo } from '../../config/API';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { errorFeedback } from '../../config/error';


const LandingPageForm = (landingFormText) => {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		school: "",
		city: "",
	});
	const {fName, lname, email, phone, school, city} = formData;

	const onChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try{
			const config = {
				headers: {
					//Authorization: `Bearer ${localStorage.token}`,
					'Content-Type': 'application/json'
				}
			};
			const result = await axios.post(
				APILandingPageInfo,
				{
					"EMAIL": email,
					"Phone": phone,
					"first_name": fName,
					"last_name": lname,
					"city": city,
					"school": school,
				},
				config
			);
			//console.log('notify me result', result);

			if (result.status === 200) {

				setAlert('Successfully Notification Alert Activated', 'info');

			} else {

				setAlert(errorFeedback, 'danger');

			}
			
		}catch(err){

			if(err.response.status === 409){

				setAlert('Already In Notification list.Thank You', 'info');

			}else {

				setAlert(errorFeedback, 'danger');

			}
		}

		
	};


	let landigFormHeading = (
		<div>
			<p
				style={{
					textAlign: "center",
					color: "#fff",
					opacity: "0.6",
					marginTop: "0.8rem",
					marginBottom: "0.5rem",
				}}
			>
			The CollegePass Experience
			</p>
			<h2
				className="new-class-heading"
				style={{
					marginTop: "-1.5rem!important",
					marginBottom: "2.0rem!important",
					color: '#fff!important',
				}}
			>
			Book Your Free Trial Class
			</h2>
	</div>
	);

	if (landingFormText === "SAT_FORM") {
		landigFormHeading = (
			<div>
				<p
					style={{
						textAlign: "center",
						color: "#fff",
						opacity: "0.6",
						marginTop: "0.8rem",
						marginBottom: "0.5rem",
					}}
				>
				Beat the SAT/PSAT
				</p>
				<h2
					className="new-class-heading"
					style={{
						marginTop: "-1.5rem!important",
						marginBottom: "2.0rem!important",
						color: '#fff!important',
					}}
				>
				Book Your Free Trial Class
				</h2>
			</div>
		);
	}

	if (landingFormText === "IB_FORM") {
		landigFormHeading = (
			<div>
				<p
					style={{
						textAlign: "center",
						color: "#fff",
						opacity: "0.6",
						marginTop: "0.8rem",
						marginBottom: "0.5rem",
					}}
				>
				IB/IGCSE Masterclasses
				</p>
				<h2
					className="new-class-heading"
					style={{
						marginTop: "-1.5rem!important",
						marginBottom: "2.0rem!important",
						color: '#fff!important',
					}}
				>
				Book Your Free Trial Class
				</h2>
			</div>
		);
	}

	if (landingFormText === "CA_FORM") {
		landigFormHeading = (
			<div>
				<p
					style={{
						textAlign: "center",
						color: "#fff",
						opacity: "0.6",
						marginTop: "0.8rem",
						marginBottom: "0.5rem",
					}}
				>
				Join Your Dream College
				</p>
				<h2
					className="new-class-heading"
					style={{
						marginTop: "-1.5rem!important",
						marginBottom: "2.0rem!important",
						color: '#fff!important',
					}}
				>
				Book Your Free Consultation
				</h2>
			</div>
		);
	}



	return (
		<Fragment>
			<section className="bookingformmain" id="gotolandingform">
				<div className="container bkngsec">
					<div className="col-md-12">
						{landigFormHeading}
						<div className="upcmnglsv">
							<div className="bookform">
								<form onSubmit={onSubmit}>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label for="first">First Name</label>
												<input
													name="fName"
													value={fName}
													onChange={onChange}
													type="text"
													className="form-control"
													placeholder=""
													id="first"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="first">Last Name</label>
												<input
													name="lname"
													value={lname}
													onChange={onChange}
													type="text"
													className="form-control"
													placeholder=""
													id="last"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label for="last">Email</label>
												<input
													name="email"
													value={email}
													onChange={onChange}
													type="email"
													class="form-control"
													placeholder=""
													id="email"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="company">Mobile</label>
												<input
													name="phone"
													value={phone}
													onChange={onChange}
													type="tel"
													className="form-control"
													placeholder=""
													id="phone"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label for="phone">School</label>
												<input
													name="school"
													value={school}
													onChange={onChange}
													type="text"
													className="form-control"
													id="school"
													placeholder=""
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="email">City</label>
												<input
													name="city"
													value={city}
													onChange={onChange}
													type="text"
													className="form-control form-control-danger"
													id="city"
													placeholder=""
												/>
											</div>
										</div>
									</div>

									<button onSubmit={onSubmit} className="btn btn-danger booksbmt">
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

LandingPageForm.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(LandingPageForm);
