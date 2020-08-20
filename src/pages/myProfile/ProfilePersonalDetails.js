import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../../../src/actions/alert';
import PropTypes from 'prop-types';
import { loadUser, loadAccess } from '../../../src/actions/auth';
import store from '../../store/store';
import { succPersonal } from '../../config/success';

import { APIupdatePersonalSection } from '../../config/API';
import { APIgetPersonalSection } from '../../config/API';
import { APIGetCountry } from '../../config/API';
import { APIGetCirriculam } from '../../config/API';
import { APIGetStateByCountryID } from '../../config/API';
import { APIGetStateByCountryIDinside } from '../../config/API';
import { APIGetStateByCountryIDhundret } from '../../config/API';
import { APIGetCityByStateID } from '../../config/API';
import { APIGetCityByStateIDseventeen } from '../../config/API';
import { APIGetCityByStateIDinside } from '../../config/API';

const ProfilePersonalDetails = ({ setAlert }) => {
	const [ formData, setFormData ] = useState({
		fName: '',
		lname: '',
		emailId: '',
		phone: '',
		altPhone: '',
		gender: 'male',
		curriculum: 1,
		schooName: '',
		country: 101,
		city: 1558,
		state: 17
	});

	const [ countryArr, setCountry ] = useState([]);
	const [ stateArr, setState ] = useState([]);
	const [ cityArr, setCity ] = useState([]);
	const [ curr, setCurr ] = useState([]);

	let countryComponent = null;
	let currComponent = null;
	let stateComponent = null;
	let cityComponent = null;

	const { fName, lname, emailId, phone, altPhone, gender, curriculum, schooName, country, city, state } = formData;

	useEffect(() => {
		const fetchData = async () => {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.token}` }
			};
			try {
				const result = await axios.get(`${APIgetPersonalSection}${localStorage.user}`, config);

				await setFormData({
					fName: result.data.data[0].FIRSTNAME ? result.data.data[0].FIRSTNAME : '',
					lname: result.data.data[0].LASTNAME ? result.data.data[0].LASTNAME : '',
					emailId: result.data.data[0].EMAIL ? result.data.data[0].EMAIL : '',
					phone: result.data.data[0].PHONENUMBER ? result.data.data[0].PHONENUMBER : '',
					altPhone: result.data.data[0].ALTERNATECONTACT ? result.data.data[0].ALTERNATECONTACT : '',
					gender: result.data.data[0].GENDER ? result.data.data[0].GENDER : 'male',
					curriculum: result.data.data[0].CURRICULUM ? result.data.data[0].CURRICULUM : '',
					schooName: result.data.data[0].SCHOOL ? result.data.data[0].SCHOOL : '',
					city: result.data.data[0].CITY ? result.data.data[0].CITY : 1558,
					state: result.data.data[0].STATE ? result.data.data[0].STATE : 17,
					country: result.data.data[0].COUNTRY ? result.data.data[0].COUNTRY : 101
				});

				const countryArr = await axios.get(APIGetCountry, config);
				await setCountry(countryArr.data.data);

				const curr = await axios.get(APIGetCirriculam, config);
				await setCurr(curr.data.data);

				if (result.data.data[0].COUNTRY) {
					const stateArray = await axios.get(
						`${APIGetStateByCountryID}${result.data.data[0].COUNTRY}`,
						config
					);
					await setState(stateArray.data.data);
				} else {
					const stateArray = await axios.get(APIGetStateByCountryIDhundret, config);
					await setState(stateArray.data.data);
				}

				if (result.data.data[0].STATE) {
					const cityArray = await axios.get(`${APIGetCityByStateID}${result.data.data[0].STATE}`, config);
					await setCity(cityArray.data.data);
				} else {
					const cityArray = await axios.get(APIGetCityByStateIDseventeen, config);
					await setCity(cityArray.data.data);
				}
			} catch (error) {
				//console.log(error);
			}
		};
		fetchData();
	}, []);

	const onChangeHandler = async (e) => {
		e.persist();

		if (e.target.name === 'country') {
			//fetch state details
			const fetchData = async () => {
				let countryInside = e.target.value;
				//setFormData({ ...formData, country: e.target.value });
				const config = {
					headers: { Authorization: `Bearer ${localStorage.token}` }
				};
				try {
					const stateArray = await axios.get(`${APIGetStateByCountryIDinside}${countryInside}`, config);
					//console.log(stateArray.data.data[0].id);
					setState(stateArray.data.data);

					//console.log(stateArray.data.data[0].id);

					let stateInside = stateArray.data.data[0].id;

					const cityArray = await axios.get(`${APIGetCityByStateIDinside}${stateInside}`, config);
					// console.log(countryArr.data.data);
					setCity(cityArray.data.data);
					let cityInside = cityArray.data.data[0].id;

					setFormData({ ...formData, city: cityInside, state: stateInside, country: countryInside });
				} catch (error) {
					//console.log(error);
				}
			};
			fetchData();
			return;
		} else if (e.target.name === 'state') {
			let stateInside = e.target.value;
			//fetch state details
			const fetchData = async () => {
				const config = {
					headers: { Authorization: `Bearer ${localStorage.token}` }
				};
				try {
					const cityArray = await axios.get(`${APIGetCityByStateIDinside}${stateInside}`, config);
					// console.log(countryArr.data.data);
					setCity(cityArray.data.data);

					let cityInside = cityArray.data.data[0].id;
					setFormData({ ...formData, city: cityInside, state: stateInside });
				} catch (error) {
					//console.log(error);
				}
			};
			fetchData();
			return;
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	// const updateCity = (city) => {
	// 	setFormData({ ...formData, city: city });
	// };

	const onSubmit = async (e) => {
		e.preventDefault();
		const config = {
			headers: { Authorization: `Bearer ${localStorage.token}` }
		};
		const body = {
			user_email: localStorage.user,
			profile_data: {
				user_type: 'STUDENT',
				fName: fName,
				lname: lname,
				emailId: localStorage.user,
				phone: phone,
				altPhone: altPhone,
				gender: gender,
				curriculum: curriculum ? curriculum : 1,
				schooName: schooName,
				country: country,
				state: state,
				city: city
			}
		};

		try {
			 await axios.post(APIupdatePersonalSection, body, config);

			//console.log(res);
			setAlert(succPersonal, 'success');
		} catch (err) {
			//console.log(err);
		}
		store.dispatch(loadUser());
		store.dispatch(loadAccess());
	};

	if (countryArr) {
		countryComponent = countryArr.map((count) => {
			return (
				<option key={count.id} value={count.id}>
					{count.name}
				</option>
			);
		});
	}

	if (curr) {
		let currOptions = curr.map((count) => {
			return (
				<option key={count.ID} value={count.ID} name={count.NAME}>
					{count.NAME}
				</option>
			);
		});
		currComponent = (
			<div className="form-group row">
				<label htmlFor="curriculum" className="col-md-2 col-form-label">
					Curriculum*
				</label>
				<div className="col-md-10">
					<select
						id="curriculum"
						onChange={onChangeHandler}
						name="curriculum"
						className="custom-select"
						required="required"
						value={curriculum}
					>
						{currOptions}
					</select>
				</div>
			</div>
		);
	}

	if (country) {
		//fetch state details
		// const fetchData = async () => {
		// 	const config = {
		// 		headers: { Authorization: `Bearer ${localStorage.token}` }
		// 	};
		// 	try {
		// 		const stateArray = await axios.get(
		// 			`https://api.collegepass.org/api/v1/profile/GetStateByCountryID/${country}`,
		// 			config
		// 		);
		// 		// console.log(countryArr.data.data);
		// 		setState(stateArray.data.data);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// };
		// fetchData();
	}

	if (state) {
		// const fetchData = async () => {
		// 	const config = {
		// 		headers: { Authorization: `Bearer ${localStorage.token}` }
		// 	};
		// 	try {
		// 		const cityArray = await axios.get(
		// 			`https://api.collegepass.org/api/v1/profile/GetCityByStateID/${state}`,
		// 			config
		// 		);

		// 		setCity(cityArray.data.data);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// };
		// fetchData();

		let stateOptions = stateArr.map((count) => {
			return (
				<option key={count.id} value={count.id}>
					{count.name}
				</option>
			);
		});
		stateComponent = (
			<div className="form-group row">
				<label htmlFor="state" className="col-md-2 col-form-label">
					State
				</label>
				<div className="col-md-10">
					<select id="state" onChange={onChangeHandler} name="state" className="custom-select" value={state}>
						{stateOptions}
					</select>
				</div>
			</div>
		);
	}

	if (city) {
		let cityOptions = cityArr.map((count) => {
			return (
				<option key={count.id} value={count.id}>
					{count.name}
				</option>
			);
		});
		cityComponent = (
			<div className="form-group row">
				<label htmlFor="city" className="col-md-2 col-form-label">
					City
				</label>
				<div className="col-md-10">
					<select id="city" onChange={onChangeHandler} name="city" className="custom-select" value={city}>
						{cityOptions}
					</select>
				</div>
			</div>
		);
	}

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<div className="form-group row">
					<label htmlFor="select" className="col-md-2 col-form-label">
						I am
					</label>
					<div className="col-md-10">
						<select id="user_type" name="user_type" className="custom-select" disabled="disabled">
							<option value="Student">Student</option>
						</select>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="first_name" className="col-md-2 col-form-label">
						First Name*
					</label>
					<div className="col-md-10">
						<input
							type="text"
							value={fName}
							onChange={onChangeHandler}
							name="fName"
							placeholder="Enter The First Name"
							className="form-control"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="text1" className="col-md-2 col-form-label">
						Last Name*
					</label>
					<div className="col-md-10">
						<input
							type="text"
							value={lname}
							onChange={onChangeHandler}
							name="lname"
							placeholder="Enter The Last Name"
							className="form-control"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="text2" className="col-md-2 col-form-label">
						Email*
					</label>
					<div className="col-md-10">
						<input
							type="email"
							value={emailId}
							onChange={onChangeHandler}
							name="emailId"
							placeholder="Enter The Email"
							className="form-control"
							required="required"
							disabled={true}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="text2" className="col-md-2 col-form-label">
						Phone*
					</label>
					<div className="col-10">
						<input
							type="tel"
							value={phone}
							onChange={onChangeHandler}
							name="phone"
							placeholder="Enter The Phone Number"
							pattern="[0-9]{10}"
							className="form-control"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="text2" className="col-md-2 col-form-label">
						Alternate Phone
					</label>
					<div className="col-md-10">
						<input
							type="tel"
							value={altPhone}
							onChange={onChangeHandler}
							name="altPhone"
							placeholder="Enter The Alternate Number"
							pattern="[0-9]{10}"
							className="form-control"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-md-2">Gender*</label>
					<div className="col-md-10">
						<div className="custom-control custom-radio custom-control-inline">
							<input
								type="radio"
								value="male"
								onChange={onChangeHandler}
								name="gender"
								id="gender_m"
								className="custom-input"
								checked={gender === 'male'}
							/>
							<label htmlFor="gender_m" className="custom-control-label personallheightlab">
								Male
							</label>
						</div>
						<div className="custom-control custom-radio custom-control-inline">
							<input
								type="radio"
								value="female"
								onChange={onChangeHandler}
								name="gender"
								id="gender_f"
								className="custom-input"
								checked={gender === 'female'}
							/>
							<label htmlFor="gender_f" className="custom-control-label personallheightlab">
								Female
							</label>
						</div>
						<div className="custom-control custom-radio custom-control-inline">
							<input
								type="radio"
								value="none"
								onChange={onChangeHandler}
								name="gender"
								id="gender_other"
								className="custom-input"
								checked={gender === 'none'}
							/>
							<label htmlFor="gender_other" className="custom-control-label personallheightlab">
								Don't Wish To Disclose
							</label>
						</div>
					</div>
				</div>
				{currComponent}

				<div className="form-group row">
					<label htmlFor="school_name" className="col-md-2 col-form-label">
						School Name*
					</label>
					<div className="col-md-10">
						<input
							type="text"
							value={schooName}
							onChange={onChangeHandler}
							name="schooName"
							placeholder="Enter The School Name"
							className="form-control"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="country" className="col-md-2 col-form-label">
						Country*
					</label>
					<div className="col-md-10">
						<select
							id="country"
							onChange={onChangeHandler}
							name="country"
							className="custom-select"
							required="required"
							value={country}
						>
							{countryComponent}
						</select>
					</div>
				</div>

				{stateComponent}
				{cityComponent}

				<div className="form-group row">
					<div className="offset-4 col-md-8" style={{ textAlign: 'right' }}>
						<input type="submit" value="Continue" className="btn btn-resume nexttab btn-direction" />
					</div>
				</div>
			</form>
		</Fragment>
	);
};
ProfilePersonalDetails.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(ProfilePersonalDetails);
