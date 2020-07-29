import React, {Fragment, useState} from "react";

const LandingPageForm = () => {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		school: "",
		city: "",
	});
	const {fName, lName, email, phone, school, city} = formData;

	const onChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// login(email, password);
	};
	return (
		<Fragment>
			<section className="bookingformmain">
				<div className="container bkngsec">
					<div className="col-md-12">
						<p
							style={{
								textAlign: "center",
								color: "#000",
								opacity: "0.6",
								marginTop: "0.8rem",
								marginBottom: "0.5rem",
							}}
						>
							The CollegePass SAT Masterclass Pro Experience
						</p>

						<h2
							className="new-class-heading"
							style={{
								marginTop: "-1.5rem!important",
								marginBottom: "2.0rem!important",
							}}
						>
							Book Your Free 30 Minute Trial Class
						</h2>
						<div className="upcmnglsv">
							<div className="bookform">
								<form>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label for="first">First Name</label>
												<input
													name="fName"
													value={fName}
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
													name="lName"
													value={lName}
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
													type="email"
													class="form-control"
													placeholder=""
													id="Email"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="company">Mobile</label>
												<input
													name="phone"
													value={phone}
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
													type="text"
													className="form-control form-control-danger"
													id="city"
													placeholder=""
												/>
											</div>
										</div>
									</div>

									<button type="submit" className="btn btn-danger booksbmt">
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

export default LandingPageForm;
