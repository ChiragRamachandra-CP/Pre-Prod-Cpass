import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../../../src/actions/alert';
import PropTypes from 'prop-types';
import moment from 'moment';
//import { Redirect } from 'react-router-dom';
import { loadUser, loadAccess } from '../../../src/actions/auth';
import store from '../../store/store';
import { error } from '../../config/error';
import { succDel } from '../../config/success';
import { succCurri } from '../../config/success';

import { APIdeleteUserEntries } from '../../config/API';
import { APigetExtraSection } from '../../config/API';
import { APIupdateExtraSection } from '../../config/API';


const ProfileExtracurricular = ({ setAlert }) => {
	/********************************************* Extra Cirricular **********************************************/
	const [ Extrafields, setExtraFields ] = useState([
		{
			extra_cirricular: 0,
			name: null,
			month: '',
			year: '',
			award: ''
		}
	]);

	function handleExtraChange(i, event) {
		const values = [ ...Extrafields ];

		//console.log('name', event.target.name);
		//console.log('value', event.target.value);

		if (event.target.name === 'extra_cirricular') {
			values[i].extra_cirricular = event.target.value;
		} else if (event.target.name === 'name') {
			values[i].name = event.target.value;
		} else if (event.target.name === 'month') {
			values[i].month = event.target.value;
		} else if (event.target.name === 'year') {
			values[i].year = event.target.value;
		} else if (event.target.name === 'award') {
			values[i].award = event.target.value;
		}

		setExtraFields(values);
	}

	function handleExtraAdd() {
		const values = [ ...Extrafields ];
		values.push({
			extra_cirricular: 0,
			name: null,
			month: '',
			year: '',
			award: ''
		});
		setExtraFields(values);
	}

	function handleExtraRemove(i) {
		const values = [ ...Extrafields ];
		values.splice(i, 1);
		setExtraFields(values);
	}

	/**********************************************************************************************************/

	/********************************************* Work Experience **********************************************/

	const [ Workfields, setWorkFields ] = useState([
		{
			work_id: 0,
			company_name: null,
			designation: null,
			job_desc: '',
			company_start_date: '',
			company_end_date: '',
			company_present: false
		}
	]);

	function handleWorkChange(i, event) {
		const values = [ ...Workfields ];

		//console.log('name', event.target.name);
		//console.log('value', event.target.value);

		let new_value = false;

		if (event.target.name === 'work_id') {
			values[i].work_id = event.target.value;
		} else if (event.target.name === 'company_name') {
			values[i].company_name = event.target.value;
		} else if (event.target.name === 'designation') {
			values[i].designation = event.target.value;
		} else if (event.target.name === 'job_desc') {
			values[i].job_desc = event.target.value;
		} else if (event.target.name === 'company_start_date') {
			values[i].company_start_date = event.target.value;
		} else if (event.target.name === 'company_end_date') {
			values[i].company_end_date = event.target.value;
		} else if (event.target.name === 'company_present') {
			if (event.target.value === 'true') {
				new_value = false;
			} else if (event.target.value === 'false') {
				new_value = true;
			}
			values[i].company_present = new_value;
		}

		setWorkFields(values);
	}

	function handleWorkAdd() {
		const values = [ ...Workfields ];
		values.push({
			work_id: 0,
			company_name: null,
			designation: null,
			job_desc: '',
			company_start_date: '',
			company_end_date: '',
			company_present: false
		});
		setWorkFields(values);
	}

	function handleWorkRemove(i) {
		const values = [ ...Workfields ];
		values.splice(i, 1);
		setWorkFields(values);
	}

	/**********************************************************************************************************/

	/********************************************* Projects/Summer School **********************************************/

	const [ Projectfields, setProjectFields ] = useState([
		{
			project_id: 0,
			project_name: null,
			project_month: null,
			project_year: '',
			project_award: ''
		}
	]);

	function handleProjectChange(i, event) {
		const values = [ ...Projectfields ];

		//console.log('name', event.target.name);
		//console.log('value', event.target.value);

		if (event.target.name === 'project_id') {
			values[i].project_id = event.target.value;
		} else if (event.target.name === 'project_name') {
			values[i].project_name = event.target.value;
		} else if (event.target.name === 'project_month') {
			values[i].project_month = event.target.value;
		} else if (event.target.name === 'project_year') {
			values[i].project_year = event.target.value;
		} else if (event.target.name === 'project_award') {
			values[i].project_award = event.target.value;
		}

		setProjectFields(values);
	}

	function handleProjectAdd() {
		const values = [ ...Projectfields ];
		values.push({
			project_id: 0,
			project_name: null,
			project_month: null,
			project_year: '',
			project_award: ''
		});
		setProjectFields(values);
	}

	function handleProjectRemove(i) {
		const values = [ ...Projectfields ];
		values.splice(i, 1);
		setProjectFields(values);
	}

	/**********************************************************************************************************/

	/********************************************* Honor/Awards/Schlorship **********************************************/

	const [ Awardfields, setAwardFields ] = useState([
		{
			award_id: 0,
			honor_name: null,
			honor_date: null
		}
	]);

	function handleAwardChange(i, event) {
		const values = [ ...Awardfields ];

		//console.log('name', event.target.name);
		//console.log('value', event.target.value);

		if (event.target.name === 'award_id') {
			values[i].award_id = event.target.value;
		} else if (event.target.name === 'honor_name') {
			values[i].honor_name = event.target.value;
		} else if (event.target.name === 'honor_date') {
			values[i].honor_date = event.target.value;
		}

		setAwardFields(values);
	}

	function handleAwardAdd() {
		const values = [ ...Awardfields ];
		values.push({
			award_id: 0,
			honor_name: null,
			honor_date: null
		});
		setAwardFields(values);
	}

	function handleAwardRemove(i) {
		const values = [ ...Awardfields ];
		values.splice(i, 1);
		setAwardFields(values);
	}

	/**********************************************************************************************************/

	/********************************************* Community **********************************************/

	const [ Communityfields, setCommunityFields ] = useState([
		{
			community_id: 0,
			community_name: null,
			community_objective: null,
			community_start_date: null,
			community_end_date: null,
			community_present: false
		}
	]);

	function handleCommunityChange(i, event) {
		const values = [ ...Communityfields ];

		//console.log('name', event.target.name);
		//console.log('value', typeof event.target.value);

		let new_value = false;

		if (event.target.name === 'community_id') {
			values[i].community_id = event.target.value;
		} else if (event.target.name === 'community_name') {
			values[i].community_name = event.target.value;
		} else if (event.target.name === 'community_objective') {
			values[i].community_objective = event.target.value;
		} else if (event.target.name === 'community_start_date') {
			values[i].community_start_date = event.target.value;
		} else if (event.target.name === 'community_end_date') {
			values[i].community_end_date = event.target.value;
		} else if (event.target.name === 'community_present') {
			if (event.target.value === 'true') {
				new_value = false;
			} else if (event.target.value === 'false') {
				new_value = true;
			}
			values[i].community_present = new_value;
		}
		//console.log('new value', new_value);
		setCommunityFields(values);
	}

	function handleCommunityAdd() {
		const values = [ ...Communityfields ];
		values.push({
			community_id: 0,
			community_name: null,
			community_objective: null,
			community_start_date: null,
			community_end_date: null,
			community_present: false
		});
		setCommunityFields(values);
	}

	function handleCommunityRemove(i) {
		const values = [ ...Communityfields ];
		values.splice(i, 1);
		setCommunityFields(values);
	}

	/**********************************************************************************************************/

	const [ formData, setFormData ] = useState({
		skills: '',
		languages: '',
		hobbies: '',
		resume_bio: ''
	});

	const { skills, languages, hobbies, resume_bio } = formData;

	const [ selectedCountries, setCountries ] = useState([]);

	const handleChange = function(selectedItems) {
		const countries = [];
		for (let i = 0; i < selectedItems.length; i++) {
			countries.push(selectedItems[i].value);
		}
		//console.log('countries', countries);
		setCountries(countries);
	};

	const [ selectedCareer, setCareer ] = useState([]);

	const handleChangeCareer = function(selectedItems) {
		const career = [];
		for (let i = 0; i < selectedItems.length; i++) {
			career.push(selectedItems[i].value);
		}
		//console.log('career', career);
		setCareer(career);
	};

	useEffect(() => {
		const fetchData = async () => {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.token}` }
			};
			try {
				const result = await axios.get(
					`${APigetExtraSection}${localStorage.user}`,
					config
				);
				//console.log('extra section data', result.data);

				let userCountries = [];
				for (let single_data of result.data.interestedCountry) {
					userCountries.push(single_data.TAG_ID);
				}

				setCountries(userCountries); //setting the user selected countries

				let userCareer = [];
				for (let single_data of result.data.interestedCareer) {
					userCareer.push(single_data.TAG_ID);
				}

				setCareer(userCareer); //setting the user selected career

				setFormData({
					skills: result.data.ExtraUserTable[0].SKILLS ? result.data.ExtraUserTable[0].SKILLS : '',
					languages: result.data.ExtraUserTable[0].LANGUAGE_KNOWN
						? result.data.ExtraUserTable[0].LANGUAGE_KNOWN
						: '',
					hobbies: result.data.ExtraUserTable[0].HOBBIES ? result.data.ExtraUserTable[0].HOBBIES : '',
					resume_bio: result.data.ExtraUserTable[0].RESUME_BIO ? result.data.ExtraUserTable[0].RESUME_BIO : ''
				}); // setting the single fields

				let extraCurricular = [];
				for (let single_data of result.data.extraCirricular) {
					extraCurricular.push({
						extra_cirricular: single_data.ID ? single_data.ID : 0,
						name: single_data.CIRRICULAR_NAME ? single_data.CIRRICULAR_NAME : '',
						month: single_data.CIRRICULAR_MONTH ? single_data.CIRRICULAR_MONTH : '',
						year: single_data.CIRRICULAR_YEAR ? single_data.CIRRICULAR_YEAR : '',
						award: single_data.CIRRICULAR_AWARD ? single_data.CIRRICULAR_AWARD : ''
					});
				}

				setExtraFields(extraCurricular); //setting the user extracurricular

				let workexperience = [];
				for (let single_data of result.data.workData) {
					workexperience.push({
						work_id: single_data.ID ? single_data.ID : 0,
						company_name: single_data.WORK_NAME ? single_data.WORK_NAME : 0,
						designation: single_data.WORK_DESIGNATION ? single_data.WORK_DESIGNATION : 0,
						job_desc: single_data.WORK_DESC ? single_data.WORK_DESC : 0,
						company_start_date: single_data.WORK_START_DATE
							? moment(single_data.WORK_START_DATE).format('YYYY-MM-DD')
							: 0,
						company_end_date: single_data.WORK_END_DATE
							? moment(single_data.WORK_END_DATE).format('YYYY-MM-DD')
							: 0,
						company_present: single_data.PRESENT_JOB ? true : false
					});
				}

				setWorkFields(workexperience);

				let projectdata = [];
				for (let single_data of result.data.projectData) {
					projectdata.push({
						project_id: single_data.ID ? single_data.ID : 0,
						project_name: single_data.PROJECT_NAME ? single_data.PROJECT_NAME : 0,
						project_month: single_data.PROJECT_MONTH ? single_data.PROJECT_MONTH : 0,
						project_year: single_data.PROJECT_YEAR ? single_data.PROJECT_YEAR : 0,
						project_award: single_data.PROJECT_AWARD ? single_data.PROJECT_AWARD : 0
					});
				}

				setProjectFields(projectdata);

				let Awarddata = [];
				for (let single_data of result.data.awardData) {
					Awarddata.push({
						award_id: single_data.ID ? single_data.ID : 0,
						honor_name: single_data.AWARD ? single_data.AWARD : 0,
						honor_date: single_data.DATE_RECEIVED
							? moment(single_data.DATE_RECEIVED).format('YYYY-MM-DD')
							: 0
					});
				}

				setAwardFields(Awarddata);

				let CommunityData = [];
				for (let single_data of result.data.communityData) {
					CommunityData.push({
						community_id: single_data.ID ? single_data.ID : 0,
						community_name: single_data.COMMUNITY_NAME ? single_data.COMMUNITY_NAME : 0,
						community_objective: single_data.COMMUNITY_OBJECTIVE ? single_data.COMMUNITY_OBJECTIVE : 0,
						community_start_date: single_data.COMMUNITY_START_DATE
							? moment(single_data.COMMUNITY_START_DATE).format('YYYY-MM-DD')
							: 0,
						community_end_date: single_data.COMMUNITY_END_DATE
							? moment(single_data.COMMUNITY_END_DATE).format('YYYY-MM-DD')
							: 0,
						community_present: single_data.PRESENT_COMMUNITY ? true : false
					});
				}

				setCommunityFields(CommunityData);

				
			} catch (error) {
				//console.log(error);
			}
		};
		fetchData();
	}, []);

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		/*console.log('Extrafields', Extrafields);
		console.log('Workfields', Workfields);
		console.log('Projectfields', Projectfields);
		console.log('Awardfields', Awardfields);
		console.log('Communityfields', Communityfields);
		console.log('selectedCountries', selectedCountries);
		console.log('selectedCareer', selectedCareer);
		console.log('skills', skills);
		console.log('languages', languages);
		console.log('resume_bio', resume_bio);
		console.log('hobbies', hobbies);*/

		let body = {
			user_email: localStorage.user,
			extra_cirricular: Extrafields,
			work_data: Workfields,
			project_data: Projectfields,
			award_data: Awardfields,
			community_data: Communityfields,
			skills: skills,
			language: languages,
			hobbies: hobbies,
			intrested_country: selectedCountries.join(','),
			intrested_career: selectedCareer.join(','),
			profile: resume_bio
		};

		//console.log('body final', body);

		const fetchData = async () => {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.token}` }
			};
			try {
				 await axios.post(
					APIupdateExtraSection,
					body,
					config
				);
				//console.log(result);
				setAlert(succCurri, 'success');
			} catch (error) {
				//console.log(error);
			}
		};
		fetchData();
		store.dispatch(loadUser());
		store.dispatch(loadAccess());
	};

	// const [ isRedirect, setRedirect ] = useState(false);

	// if (isRedirect) {
	// 	return <Redirect to="" />;
	// }

	const deleteData = async (event, fieldtype, id) => {
		//console.log(event);
		event.preventDefault();

		let body = {
			type: fieldtype,
			id: id
		};

		const config = {
			headers: { Authorization: `Bearer ${localStorage.token}` }
		};

		try {
			const result = await axios.post(
				APIdeleteUserEntries,
				body,
				config
			);
			//console.log(result);

			if ((result.data.status = 200)) {
				setAlert(succDel, 'info');
				window.location.reload();
			} else {
				setAlert(error, 'danger');
			}
		} catch (error) {
			//do nothing for
			//console.log(error);
		}
	};

	return (
		<Fragment>
			<form name="profile_other_form" id="profile_other_form" method="post" onSubmit={onSubmit}>
				{Extrafields.map((field, idx) => {
					//console.log('idx', idx);
					//console.log('length', Extrafields.length);
					return (
						<div className="form-group row" key={`${field}-${idx}`}>
							<label className="col-md-4 col-form-label">Extra Curricular Activities </label>
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-4">
										<input
											value={field.extra_cirricular || ''}
											onChange={(e) => handleExtraChange(idx, e)}
											name="extra_cirricular"
											type="hidden"
										/>
										<input
											value={field.name || ''}
											onChange={(e) => handleExtraChange(idx, e)}
											name="name"
											placeholder="Name"
											type="text"
											className="form-control"
										/>
									</div>
									<div className="col-md-4">
										<select
											name="month"
											onChange={(e) => handleExtraChange(idx, e)}
											value={field.month || ''}
											className="form-control"
										>
											<option value={''}>Month</option>
											<option value={'1'}>January</option>
											<option value={'2'}>February</option>
											<option value={'3'}>March</option>
											<option value={'4'}>April</option>
											<option value={'5'}>May</option>
											<option value={'6'}>June</option>
											<option value={'7'}>July</option>
											<option value={'8'}>August</option>
											<option value={'9'}>September</option>
											<option value={'10'}>October</option>
											<option value={'11'}>November</option>
											<option value={'12'}>December</option>
										</select>
									</div>
									<div className="col-md-4">
										<select
											name="year"
											onChange={(e) => handleExtraChange(idx, e)}
											value={field.year || ''}
											className="form-control"
										>
											<option value={''}>Year</option>
											<option value={'2020'}>2020</option>
											<option value={'2019'}>2019</option>
											<option value={'2018'}>2018</option>
											<option value={'2017'}>2017</option>
											<option value={'2016'}>2016</option>
											<option value={'2015'}>2015</option>
											<option value={'2014'}>2014</option>
											<option value={'2013'}>2013</option>
											<option value={'2012'}>2012</option>
											<option value={'2011'}>2011</option>
											<option value={'2010'}>2010</option>
											<option value={'2009'}>2009</option>
											<option value={'2008'}>2008</option>
											<option value={'2007'}>2007</option>
											<option value={'2006'}>2006</option>
											<option value={'2005'}>2005</option>
											<option value={'2004'}>2004</option>
											<option value={'2003'}>2003</option>
											<option value={'2002'}>2002</option>
											<option value={'2001'}>2001</option>
											<option value={'2000'}>2000</option>
											<option value={'1999'}>1999</option>
											<option value={'1998'}>1998</option>
											<option value={'1997'}>1997</option>
											<option value={'1996'}>1996</option>
											<option value={'1995'}>1995</option>
											<option value={'1994'}>1994</option>
											<option value={'1993'}>1993</option>
											<option value={'1992'}>1992</option>
											<option value={'1991'}>1991</option>
											<option value={'1990'}>1990</option>
										</select>
									</div>
								</div>
								<div className="row">
									<div className="col-md-10">
										<input
											value={field.award || ''}
											onChange={(e) => handleExtraChange(idx, e)}
											name="award"
											placeholder="Award If any"
											type="text"
											className="form-control"
										/>
									</div>
									{Extrafields.length === idx + 1 && (
										<div className="" style={{ textAlign: 'right', marginBottom: '9px' }}>
											<button className="btn-clone clone_award" onClick={() => handleExtraAdd()}>
												{' '}
												<i className="fa fa-plus" aria-hidden="true" />
											</button>
											<button
												className="btn-clone remove_award"
												onClick={() => handleExtraRemove(idx)}
											>
												<i className="fa fa-minus-circle" />
											</button>

											{field.extra_cirricular ? (
												<button
													className="btn-delete"
													onClick={(e) =>
														deleteData(e, 'extracurricular', field.extra_cirricular)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
									{Extrafields.length > idx + 1 && (
										<div className="col-md-6">
											{field.extra_cirricular ? (
												<button
													className="btn-delete"
													onClick={(e) =>
														deleteData(e, 'extracurricular', field.extra_cirricular)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					);
				})}

				{Workfields.map((field, idx) => {
					return (
						<div className="form-group row">
							<label className="col-md-4 col-form-label">Work Experience / Internship </label>
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-6">
										<input
											value={field.work_id || ''}
											onChange={(e) => handleWorkChange(idx, e)}
											name="work_id"
											type="hidden"
										/>
										<input
											value={field.company_name || ''}
											onChange={(e) => handleWorkChange(idx, e)}
											placeholder="Company Name"
											name="company_name"
											type="text"
											className="form-control"
										/>
									</div>
									<div className="col-md-6">
										<input
											value={field.designation || ''}
											onChange={(e) => handleWorkChange(idx, e)}
											placeholder="Job Designation"
											name="designation"
											type="text"
											className="form-control"
										/>
									</div>
									<div className="col-md-12">
										<input
											value={field.job_desc || ''}
											onChange={(e) => handleWorkChange(idx, e)}
											type="text"
											placeholder="Job Description"
											name="job_desc"
											className="form-control"
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<input
											value={field.company_start_date || ''}
											onChange={(e) => handleWorkChange(idx, e)}
											placeholder="Start Date"
											name="company_start_date"
											type="date"
											onfocus="(this.type='date')"
											className="form-control datepicker"
										/>
									</div>
									<div className="col-md-6">
										<input
											value={field.company_end_date || ''}
											onChange={(e) => handleWorkChange(idx, e)}
											placeholder="End Date"
											name="company_end_date"
											type="date"
											onfocus="(this.type='date')"
											className="form-control datepicker"
										/>
									</div>
									<div className="col-md-6">
										<div
											className="custom-control custom-radio custom-control-inline"
											style={{ margin: '15px 0px' }}
										>
											<input
												value={field.company_present || false}
												onChange={(e) => handleWorkChange(idx, e)}
												name="company_present"
												id={'company_present' + idx}
												type="checkbox"
												className="custom-input"
												checked={field.company_present || false}
											/>

											<label
												htmlFor={'company_present' + idx}
												className="custom-control-label"
												style={{ lineHeight: '0.5' }}
											>
												Present
											</label>
										</div>
									</div>
									{Workfields.length === idx + 1 && (
										<div className="col-md-6">
											<button className="btn-clone clone_award" onClick={() => handleWorkAdd()}>
												{' '}
												<i className="fa fa-plus" aria-hidden="true" />
											</button>

											<button
												className="btn-clone remove_award"
												onClick={() => handleWorkRemove(idx)}
											>
												<i className="fa fa-minus-circle" />
											</button>

											{field.work_id ? (
												<button
													className="btn-delete"
													onClick={(e) => deleteData(e, 'work', field.work_id)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
									{Workfields.length > idx + 1 && (
										<div className="col-md-6">
											{field.work_id ? (
												<button
													className="btn-delete"
													onClick={(e) => deleteData(e, 'work', field.work_id)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					);
				})}

				{Projectfields.map((field, idx) => {
					return (
						<div className="form-group row element_project">
							<label className="col-md-4 col-form-label">Projects/Summer School</label>
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-4">
										<input
											onChange={(e) => handleProjectChange(idx, e)}
											value={field.project_id || ''}
											name="project_id"
											type="hidden"
										/>
										<input
											onChange={(e) => handleProjectChange(idx, e)}
											value={field.project_name || ''}
											name="project_name"
											type="text"
											placeholder="Name"
											className="form-control"
										/>
									</div>
									<div className="col-md-4">
										<select
											name="project_month"
											onChange={(e) => handleProjectChange(idx, e)}
											value={field.project_month || ''}
											className="form-control"
										>
											<option value={''}>Month</option>
											<option value={'1'}>January</option>
											<option value={'2'}>February</option>
											<option value={'3'}>March</option>
											<option value={'4'}>April</option>
											<option value={'5'}>May</option>
											<option value={'6'}>June</option>
											<option value={'7'}>July</option>
											<option value={'8'}>August</option>
											<option value={'9'}>September</option>
											<option value={'10'}>October</option>
											<option value={'11'}>November</option>
											<option value={'12'}>December</option>
										</select>
									</div>
									<div className="col-md-4">
										<select
											name="project_year"
											onChange={(e) => handleProjectChange(idx, e)}
											value={field.project_year || ''}
											className="form-control"
										>
											<option value={''}>Year</option>
											<option value={'2020'}>2020</option>
											<option value={'2019'}>2019</option>
											<option value={'2018'}>2018</option>
											<option value={'2017'}>2017</option>
											<option value={'2016'}>2016</option>
											<option value={'2015'}>2015</option>
											<option value={'2014'}>2014</option>
											<option value={'2013'}>2013</option>
											<option value={'2012'}>2012</option>
											<option value={'2011'}>2011</option>
											<option value={'2010'}>2010</option>
											<option value={'2009'}>2009</option>
											<option value={'2008'}>2008</option>
											<option value={'2007'}>2007</option>
											<option value={'2006'}>2006</option>
											<option value={'2005'}>2005</option>
											<option value={'2004'}>2004</option>
											<option value={'2003'}>2003</option>
											<option value={'2002'}>2002</option>
											<option value={'2001'}>2001</option>
											<option value={'2000'}>2000</option>
											<option value={'1999'}>1999</option>
											<option value={'1998'}>1998</option>
											<option value={'1997'}>1997</option>
											<option value={'1996'}>1996</option>
											<option value={'1995'}>1995</option>
											<option value={'1994'}>1994</option>
											<option value={'1993'}>1993</option>
											<option value={'1992'}>1992</option>
											<option value={'1991'}>1991</option>
											<option value={'1990'}>1990</option>
										</select>
									</div>
								</div>
								<div className="row">
									<div className="col-md-10">
										<input
											value={field.project_award || ''}
											onChange={(e) => handleProjectChange(idx, e)}
											name="project_award"
											placeholder="Awards If any"
											type="text"
											className="form-control"
										/>
									</div>
									{Projectfields.length === idx + 1 && (
										<div className="col-md-2">
											<button
												className="btn-clone clone_award"
												onClick={() => handleProjectAdd()}
											>
												{' '}
												<i className="fa fa-plus" aria-hidden="true" />
											</button>

											<button
												className="btn-clone remove_award"
												onClick={() => handleProjectRemove(idx)}
											>
												<i className="fa fa-minus-circle" />
											</button>

											{field.project_id ? (
												<button
													className="btn-delete"
													onClick={(e) => deleteData(e, 'project', field.project_id)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
									{Projectfields.length > idx + 1 && (
										<div className="col-md-6">
											{field.project_id ? (
												<button
													className="btn-delete"
													onClick={(e) => deleteData(e, 'project', field.project_id)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					);
				})}

				{Awardfields.map((field, idx) => {
					return (
						<div className="form-group row element_honor">
							<label className="col-md-4 col-form-label">Honor/Awards/Schlorship</label>
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-4">
										<input
											value={field.award_id || ''}
											onChange={(e) => handleAwardChange(idx, e)}
											name="award_id"
											type="hidden"
										/>

										<input
											value={field.honor_name || ''}
											onChange={(e) => handleAwardChange(idx, e)}
											name="honor_name"
											placeholder="Name"
											type="text"
											className="form-control"
										/>
									</div>
									<div className="col-md-5">
										<input
											value={field.honor_date || ''}
											onChange={(e) => handleAwardChange(idx, e)}
											name="honor_date"
											type="date"
											onfocus="(this.type='date')"
											onblur="(this.type='text')"
											id="date"
											placeholder="Date"
											className="form-control datepicker"
										/>
									</div>
									{Awardfields.length === idx + 1 && (
										<div className="col-md-3">
											<button className="btn-clone clone_award" onClick={() => handleAwardAdd()}>
												{' '}
												<i className="fa fa-plus" aria-hidden="true" />
											</button>

											<button
												className="btn-clone remove_award"
												onClick={() => handleAwardRemove(idx)}
											>
												<i className="fa fa-minus-circle" />
											</button>

											{field.award_id ? (
												<button
													className="btn-delete"
													onClick={(e) => deleteData(e, 'award', field.award_id)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
									{Awardfields.length > idx + 1 && (
										<div className="col-md-6">
											{field.award_id ? (
												<button
													className="btn-delete"
													onClick={(e) => deleteData(e, 'award', field.award_id)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					);
				})}

				{Communityfields.map((field, idx) => {
					return (
						<div className="form-group row element_community">
							<label className="col-md-4 col-form-label">Community Service</label>
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-6">
										<input
											value={field.community_id || ''}
											onChange={(e) => handleCommunityChange(idx, e)}
											name="community_id"
											type="hidden"
										/>

										<input
											value={field.community_name || ''}
											onChange={(e) => handleCommunityChange(idx, e)}
											name="community_name"
											type="text"
											placeholder="Name"
											className="form-control"
										/>
									</div>
									<div className="col-md-6">
										<input
											value={field.community_objective || ''}
											onChange={(e) => handleCommunityChange(idx, e)}
											name="community_objective"
											type="text"
											placeholder="Objective"
											className="form-control"
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<input
											value={field.community_start_date || ''}
											onChange={(e) => handleCommunityChange(idx, e)}
											placeholder="Start Date"
											name="community_start_date"
											type="date"
											onfocus="(this.type='date')"
											className="form-control datepicker"
										/>
									</div>
									<div className="col-md-6">
										<input
											value={field.community_end_date || ''}
											onChange={(e) => handleCommunityChange(idx, e)}
											placeholder="End Date"
											name="community_end_date"
											type="date"
											onfocus="(this.type='date')"
											className="form-control datepicker"
										/>
									</div>
									<div className="col-md-6">
										<div
											className="custom-control custom-radio custom-control-inline"
											style={{ marginTop: '15px' }}
										>
											<input
												value={field.community_present || false}
												onChange={(e) => handleCommunityChange(idx, e)}
												name="community_present"
												type="checkbox"
												id={`community_present_` + idx}
												className="custom-input"
												checked={field.community_present || false}
											/>

											<label
												htmlFor={`community_present_` + idx}
												className="custom-control-label"
												style={{ lineHeight: '0.5' }}
											>
												Present
											</label>
										</div>
									</div>
									{Communityfields.length === idx + 1 && (
										<div className="col-md-6">
											<button
												className="btn-clone clone_award"
												onClick={() => handleCommunityAdd()}
											>
												{' '}
												<i className="fa fa-plus" aria-hidden="true" />
											</button>

											<button
												className="btn-clone remove_award"
												onClick={() => handleCommunityRemove(idx)}
											>
												<i className="fa fa-minus-circle" />
											</button>

											{field.community_id ? (
												<button
													className="btn-delete"
													onClick={(e) => deleteData(e, 'community', field.community_id)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
									{Communityfields.length > idx + 1 && (
										<div className="col-md-6">
											{field.community_id ? (
												<button
													className="btn-delete"
													onClick={(e) => deleteData(e, 'community', field.community_id)}
												>
													<i className="fa fa-trash" aria-hidden="true" />
												</button>
											) : (
												' '
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					);
				})}

				<div className="form-group row">
					<label htmlFor="state" className="col-md-4 col-form-label">
						Skills*
					</label>
					<div className="col-md-8">
						<input
							value={skills}
							onChange={onChange}
							type="text"
							name="skills"
							data-role="tagsinput"
							className="form-control tags-select"
							placeholder="Skill1, Skill2, Skill3"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="state" className="col-md-4 col-form-label">
						Language Proficient*
					</label>
					<div className="col-md-8">
						<input
							type="text"
							value={languages}
							onChange={onChange}
							name="languages"
							data-role="tagsinput"
							className="form-control tags-select"
							placeholder="Language1, Language2, Language3"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="state" className="col-md-4 col-form-label">
						Hobbies*
					</label>
					<div className="col-md-8">
						<input
							type="text"
							value={hobbies}
							onChange={onChange}
							name="hobbies"
							data-role="tagsinput"
							className="form-control"
							placeholder="Hobbies1, Hobbies2, Hobbies3"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="select" className="col-md-4 col-form-label">
						Countries of Interest (multiple selections allowed, press control to select multiple)*
					</label>
					<div className="col-md-8">
						<select
							multiple={true}
							value={selectedCountries}
							onChange={(e) => {
								handleChange(e.target.selectedOptions);
							}}
							className="form-control"
						>
							<option value={'1'}>India</option>
							<option value={'2'}>UK</option>
							<option value={'3'}>USA</option>
							<option value={'4'}>Canada</option>
							<option value={'5'}>Germany</option>
							<option value={'6'}>Singapore</option>
							<option value={'7'}>Japan</option>
							<option value={'8'}>Thailand</option>
							<option value={'9'}>Australia</option>
							<option value={'10'}>Ireland</option>
							<option value={'11'}>HongKong</option>
							<option value={'12'}>Russia</option>
							<option value={'13'}>Switzerland</option>
							<option value={'14'}>France</option>
						</select>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="select" className="col-md-4 col-form-label">
						Career Track of Interest (multiple selections allowed, press control to select multiple)*
					</label>
					<div className="col-md-8 ">
						<select
							multiple={true}
							value={selectedCareer}
							onChange={(e) => {
								handleChangeCareer(e.target.selectedOptions);
							}}
							className="form-control"
						>
							<option value={'15'}>Engineering</option>
							<option value={'16'}>Computer Application & IT</option>
							<option value={'17'}>Ethical Hacking</option>
							<option value={'18'}>Aviation</option>
							<option value={'19'}>Architecture</option>
							<option value={'20'}>Merchant Navy</option>
							<option value={'21'}>Food & Agriculture</option>
							<option value={'25'}>Physical Science</option>
							<option value={'26'}>Life Science & Environment</option>
							<option value={'27'}>Maths & Statistics</option>
							<option value={'28'}>Medicine</option>
							<option value={'29'}>Allied Medicine</option>
							<option value={'30'}>Nutrition & Fitness</option>
							<option value={'31'}>Design</option>
							<option value={'32'}>Animation & Graphics</option>
							<option value={'33'}>Media & Communication</option>
							<option value={'34'}>Applied Arts</option>
							<option value={'35'}>Performing Arts</option>
							<option value={'36'}>Hotel Management</option>
							<option value={'37'}>Civil Services</option>
							<option value={'38'}>Marketing & Advertising</option>
							<option value={'39'}>Sales</option>
							<option value={'40'}>Management</option>
							<option value={'41'}>Entrepreneurship</option>
							<option value={'42'}>Law</option>
							<option value={'43'}>Finance & Banking</option>
							<option value={'44'}>Commerce & Accounts</option>
							<option value={'45'}>Actuarial Sciences</option>
							<option value={'46'}>Economics</option>
							<option value={'47'}>Social Sciences & Humanities</option>
							<option value={'48'}>Education & Training</option>
							<option value={'49'}>Distribution & Logistics</option>
						</select>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="select" className="col-md-4 col-form-label">
						Personal Profile
					</label>
					<div className="col-md-8 ">
						<textarea
							value={resume_bio}
							onChange={onChange}
							name="resume_bio"
							className="form-control"
							placeholder="Example: Friendly and energetic honor-roll student with significant landscaping experience. Teamwork-oriented and reliable. Practiced babysitter able to adapt to working with people of all ages."
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-md-12" style={{ textAlign: 'right' }}>
						<button name="submit" type="submit" className="btn btn-resume nexttab btn-direction">
							Save
						</button>
						{/* <button id="download_resume" className="btn btn-resume">Download Resume</button> */}
					</div>
				</div>
			</form>
		</Fragment>
	);
};
ProfileExtracurricular.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(ProfileExtracurricular);
