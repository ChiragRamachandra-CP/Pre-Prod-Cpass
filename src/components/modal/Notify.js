import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import {setAlert} from "../../actions/alert";
import {APInotify} from "../../config/API";
import {errorFeedback} from "../../config/error";

const Notify = ({setAlert}) => {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
	});

	const {fname, lname, email, phone} = formData;

	const onChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const config = {
				headers: {
					//Authorization: `Bearer ${localStorage.token}`,
					"Content-Type": "application/json",
				},
			};
			const result = await axios.post(
				APInotify,
				{
					EMAIL: email,
					Phone: phone,
					first_name: fname,
					last_name: lname,
				},
				config
			);
			
			//console.log("notify me result", result);

			if (result.status === 200) {
				setAlert("Thanks for registering! You will receive an alert on the day of the event!", "info");
			} else {
				setAlert(errorFeedback, "danger");
			}
		} catch (err) {
			if (err.response.status === 409) {
				setAlert("You are already registered. You will receive an alert on the day of the event!", "info");
			} else {
				setAlert(errorFeedback, "danger");
			}
		}
	};

	return (
		<Fragment>
			<div style={{zIndex: "auto"}} className="modal fade" id="notify">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="head">
							<h4 className="log-title">Notify Me</h4>
							<button
								type="button"
								className="close imgpopup"
								data-dismiss="modal"
							>
								&times;
							</button>
						</div>
						<div className="content">
							<div>
								<form onSubmit={onSubmit}>
									<div className="">
										<div className="">
											<div className="col align-self-end">
												<label htmlFor="firstName" className="txt-i">
													First Name
												</label>
											</div>
											<div className="col-12">
												<input
													name="fname"
													type="text"
													className="fit"
													value={fname}
													onChange={onChange}
													required
												/>
											</div>
										</div>
									</div>
									<div className="">
										<div className="">
											<div className="col align-self-end">
												<label htmlFor="lastName" className="txt-i">
													Last Name
												</label>
											</div>
											<div className="col-12">
												<input
													name="lname"
													type="text"
													className="fit"
													value={lname}
													onChange={onChange}
												/>
											</div>
										</div>
									</div>
									<div className="">
										<div className="">
											<div className="col align-self-end">
												<label htmlFor="email" className="txt-i">
													Email
												</label>
											</div>
											<div className="col-12">
												<input
													name="email"
													type="email"
													className="fit"
													value={email}
													onChange={onChange}
												/>
											</div>
										</div>
									</div>
									<div className="">
										<div className="">
											<div className="col align-self-end">
												<label htmlFor="phone" className="txt-i">
													Phone
												</label>
											</div>
											<div className="col-12">
												<input
													name="phone"
													type="tel"
													className="fit"
													value={phone}
													onChange={onChange}
												/>
											</div>
										</div>
									</div>
									<button className="lgn-btn" onSubmit={onSubmit}>
										Submit
									</button>
									<p></p>
									<br />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Notify.propTypes = {
	setAlert: PropTypes.func.isRequired,
};

export default connect(null, {setAlert})(Notify);
