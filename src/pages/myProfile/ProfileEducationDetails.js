import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../../../src/actions/alert';
import PropTypes from 'prop-types';
import { Checkbox } from 'reakit/Checkbox';
import { loadUser, loadAccess } from '../../../src/actions/auth';
import store from '../../store/store';
import { succEdu } from '../../config/success';
import { APIgetEducationSection } from '../../config/API';
import { APIupdateEducationSection } from '../../config/API';


const ProfileEducationDetails = ({ setAlert }) => {
	const [ grade, setGrade ] = useState(0);
	const [ gradeArray, setGradeArray ] = useState([]);
	let gradeComponents = null;
	//let sub = null;
	const [ formData, setFormData ] = useState({
		psat8_9: '',
		psatnmsqt: '',
		sat: '',
		act: '',
		checked: false
	});

	const [ testPlan, setTestPlan ] = useState(false);

	const [ gradeData, setGradeData ] = useState([
		{
			grade_data_8: [
				{
					Grade: 8,
					SchoolName: '',
					SchoolCity: '',
					SchoolCountry: '',
					SchoolCurriculum: '',
					TotalGPA: ''
				}
			],
			grade_data_9: [
				{
					Grade: 9,
					SchoolName: '',
					SchoolCity: '',
					SchoolCountry: '',
					SchoolCurriculum: '',
					TotalGPA: ''
				}
			],
			grade_data_10: [
				{
					Grade: 10,
					SchoolName: '',
					SchoolCity: '',
					SchoolCountry: '',
					SchoolCurriculum: '',
					TotalGPA: ''
				}
			],
			grade_data_11: [
				{
					Grade: 11,
					SchoolName: '',
					SchoolCity: '',
					SchoolCountry: '',
					SchoolCurriculum: '',
					TotalGPA: ''
				}
			],
			grade_data_12: [
				{
					Grade: 12,
					SchoolName: '',
					SchoolCity: '',
					SchoolCountry: '',
					SchoolCurriculum: '',
					TotalGPA: ''
				}
			]
		}
	]);

	const { psat8_9, psatnmsqt, sat, act } = formData;

	useEffect(() => {
		const fetchData = async () => {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.token}` }
			};
			try {
				const result = await axios.get(
					`${APIgetEducationSection}${localStorage.user}`,
					config
				);
				//console.log(result.data);
				//console.log(result.data.test_data[0]);
				//console.log(typeof result.data.grade_data_8[0].SCHOOL_NAME);
				setGradeData([
					{
						grade_data_8: [
							{
								Grade: 8,
								SchoolName:
									result.data.grade_data_8[0].SCHOOL_NAME === null
										? ''
										: result.data.grade_data_8[0].SCHOOL_NAME,
								SchoolCity:
									result.data.grade_data_8[0].SCHOOL_CITY === null
										? ''
										: result.data.grade_data_8[0].SCHOOL_CITY,
								SchoolCountry:
									result.data.grade_data_8[0].SCHOOL_COUNTRY === null
										? ''
										: result.data.grade_data_8[0].SCHOOL_COUNTRY,
								SchoolCurriculum:
									result.data.grade_data_8[0].SCHOOL_CURRICULUM === null
										? ''
										: result.data.grade_data_8[0].SCHOOL_CURRICULUM,
								TotalGPA:
									result.data.grade_data_8[0].TOTAL_GPA === null
										? ''
										: result.data.grade_data_8[0].TOTAL_GPA
							}
						],

						grade_data_9: [
							{
								Grade: 9,
								SchoolName:
									result.data.grade_data_9[0].SCHOOL_NAME === null
										? ''
										: result.data.grade_data_9[0].SCHOOL_NAME,
								SchoolCity:
									result.data.grade_data_9[0].SCHOOL_CITY === null
										? ''
										: result.data.grade_data_9[0].SCHOOL_CITY,
								SchoolCountry:
									result.data.grade_data_9[0].SCHOOL_COUNTRY === null
										? ''
										: result.data.grade_data_9[0].SCHOOL_COUNTRY,
								SchoolCurriculum:
									result.data.grade_data_9[0].SCHOOL_CURRICULUM === null
										? ''
										: result.data.grade_data_9[0].SCHOOL_CURRICULUM,
								TotalGPA:
									result.data.grade_data_9[0].TOTAL_GPA === null
										? ''
										: result.data.grade_data_9[0].TOTAL_GPA
							}
						],
						grade_data_10: [
							{
								Grade: 10,
								SchoolName:
									result.data.grade_data_10[0].SCHOOL_NAME === null
										? ''
										: result.data.grade_data_10[0].SCHOOL_NAME,
								SchoolCity:
									result.data.grade_data_10[0].SCHOOL_CITY === null
										? ''
										: result.data.grade_data_10[0].SCHOOL_CITY,
								SchoolCountry:
									result.data.grade_data_10[0].SCHOOL_COUNTRY === null
										? ''
										: result.data.grade_data_10[0].SCHOOL_COUNTRY,
								SchoolCurriculum:
									result.data.grade_data_10[0].SCHOOL_CURRICULUM === null
										? ''
										: result.data.grade_data_10[0].SCHOOL_CURRICULUM,
								TotalGPA:
									result.data.grade_data_10[0].TOTAL_GPA === null
										? ''
										: result.data.grade_data_10[0].TOTAL_GPA
							}
						],
						grade_data_11: [
							{
								Grade: 11,
								SchoolName:
									result.data.grade_data_11[0].SCHOOL_NAME === null
										? ''
										: result.data.grade_data_11[0].SCHOOL_NAME,
								SchoolCity:
									result.data.grade_data_11[0].SCHOOL_CITY === null
										? ''
										: result.data.grade_data_11[0].SCHOOL_CITY,
								SchoolCountry:
									result.data.grade_data_11[0].SCHOOL_COUNTRY === null
										? ''
										: result.data.grade_data_11[0].SCHOOL_COUNTRY,
								SchoolCurriculum:
									result.data.grade_data_11[0].SCHOOL_CURRICULUM === null
										? ''
										: result.data.grade_data_11[0].SCHOOL_CURRICULUM,
								TotalGPA:
									result.data.grade_data_11[0].TOTAL_GPA === null
										? ''
										: result.data.grade_data_11[0].TOTAL_GPA
							}
						],
						grade_data_12: [
							{
								Grade: 12,
								SchoolName:
									result.data.grade_data_12[0].SCHOOL_NAME === null
										? ''
										: result.data.grade_data_12[0].SCHOOL_NAME,
								SchoolCity:
									result.data.grade_data_12[0].SCHOOL_CITY === null
										? ''
										: result.data.grade_data_12[0].SCHOOL_CITY,
								SchoolCountry:
									result.data.grade_data_12[0].SCHOOL_COUNTRY === null
										? ''
										: result.data.grade_data_12[0].SCHOOL_COUNTRY,
								SchoolCurriculum:
									result.data.grade_data_12[0].SCHOOL_CURRICULUM === null
										? ''
										: result.data.grade_data_12[0].SCHOOL_CURRICULUM,
								TotalGPA:
									result.data.grade_data_12[0].TOTAL_GPA === null
										? ''
										: result.data.grade_data_12[0].TOTAL_GPA
							}
						]
					}
				]);

				//set psat marks etc
				setFormData({
					psat8_9: result.data.test_data[0].PSAT_8_9 ? result.data.test_data[0].PSAT_8_9 : '',
					psatnmsqt: result.data.test_data[0].PSAT_10 ? result.data.test_data[0].PSAT_10 : '',
					sat: result.data.test_data[0].SAT ? result.data.test_data[0].SAT : '',
					act: result.data.test_data[0].ACT ? result.data.test_data[0].ACT : '',
					testPlan: result.data.test_data[0].TEST_PLANNING === 1 ? true : false,
					checked: result.data.test_data[0].TEST_PLANNING !== 0 ? true : false
				});

				setTestPlan(result.data.test_data[0].TEST_PLANNING === 1 ? true : false);

				if (result.data.test_data[0].GRADE) {
					setGrade(result.data.test_data[0].GRADE ? result.data.test_data[0].GRADE : 0);
					setGradesToArray(result.data.test_data[0].GRADE ? result.data.test_data[0].GRADE : 0);
				}
			} catch (error) {
				//console.log(error);
			}
		};
		fetchData();
	}, []);

	const templateGrade = {
		Grade: 12,
		SchoolName: 'asddx',
		SchoolCountry: 'asd',
		SchoolCity: 'asd',
		SchoolCurriculum: 'CBSEcd',
		TotalGPA: 4
	};

	// console.log(gradeData);

	// console.log(Object.values(gradeData)[0]);

	// Object.keys(gradeData).forEach((key, index) => {
	// console.log(gradeData[key]);
	// });

	const gradeChangeHandler = (event) => {
		event.preventDefault();
		setGrade(parseInt(event.target.value));
		//console.log(event.target.value);
		setGradesToArray(event.target.value);
	};

	const setGradesToArray = (value) => {
		switch (value) {
			case '12':
				setGradeArray([ 12, 11, 10, 9, 8 ]);
				setGradeData([ ...gradeData, templateGrade ]);
				return grade;
			case '11':
				setGradeArray([ 11, 10, 9, 8 ]);
				return grade;

			case '10':
				setGradeArray([ 10, 9, 8 ]);
				return grade;

			case '9':
				setGradeArray([ 9, 8 ]);
				return grade;
			case '8':
				setGradeArray([ 8 ]);
				return grade;
			case '1':
				setGradeArray([ 12, 11, 10, 9, 8 ]);
				return grade;

			default:
				setGradeArray(null);
				return grade;
		}
	};

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleChecked = (e) => {
		let new_checked_value = false;
		if (testPlan === true) {
			new_checked_value = false;
		} else if (testPlan === false) {
			new_checked_value = true;
		}
		setTestPlan(new_checked_value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		//console.log(grade);

		let form_grade_data = [];

		form_grade_data[0] = gradeData[0].grade_data_8[0];

		form_grade_data[1] = gradeData[0].grade_data_9[0];

		form_grade_data[2] = gradeData[0].grade_data_10[0];

		form_grade_data[3] = gradeData[0].grade_data_11[0];

		form_grade_data[4] = gradeData[0].grade_data_12[0];

		//console.log(form_grade_data);

		let body = {
			user_email: localStorage.user,
			grade_data: form_grade_data,
			CURRENT_GRADE: grade,
			PSAT8_9: psat8_9,
			PSATNMSQT: psatnmsqt,
			SAT: sat,
			ACT: act,
			TEST_PLANNING: testPlan
		};

		//console.log('body', body);

		const fetchData = async () => {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.token}` }
			};
			try {
				 await axios.post(
					APIupdateEducationSection,
					body,
					config
				);
				//console.log(result);
				setAlert(succEdu, 'success');
			} catch (error) {
				//console.log(error);
			}
		};
		fetchData();

		// login({ email, password });
		store.dispatch(loadUser());
		store.dispatch(loadAccess());
	};

	//const setGradeOnChange = async (e, inputName) => {};

	if (gradeArray) {
		gradeComponents = gradeArray.map((userGrade) => {
			//console.log(userGrade);
			let tempValue = null;

			if (userGrade === 12) {
				tempValue = gradeData[0].grade_data_12[0];
			} else if (userGrade === 11) {
				tempValue = gradeData[0].grade_data_11[0];
			} else if (userGrade === 10) {
				tempValue = gradeData[0].grade_data_10[0];
			} else if (userGrade === 9) {
				tempValue = gradeData[0].grade_data_9[0];
			} else if (userGrade === 8) {
				tempValue = gradeData[0].grade_data_8[0];
			}

			return (
				<div key={userGrade} id={userGrade} className="col-md-12 form-group-custom">
					<label className="gheading">{`Grade ${userGrade}th Details:`}</label>
					<div className="form-group row">
						<label htmlFor={`school${userGrade}`} className="col-md-4 col-form-label">
							School Name
						</label>
						<div className="col-md-8">
							<input
								value={tempValue.SchoolName ? tempValue.SchoolName : ''}
								onChange={(e) => {
									let main_data = [ ...gradeData ];

									if (userGrade === 12) {
										main_data[0].grade_data_12[0].SchoolName = e.target.value;
									} else if (userGrade === 11) {
										main_data[0].grade_data_11[0].SchoolName = e.target.value;
									} else if (userGrade === 10) {
										main_data[0].grade_data_10[0].SchoolName = e.target.value;
									} else if (userGrade === 9) {
										main_data[0].grade_data_9[0].SchoolName = e.target.value;
									} else if (userGrade === 8) {
										main_data[0].grade_data_8[0].SchoolName = e.target.value;
									}

									setGradeData(main_data);
								}}
								name={`schoolName${userGrade}`}
								placeholder="Enter the School Name"
								className="form-control"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor={`school_city${userGrade}`} className="col-md-4 col-form-label">
							School Location
						</label>
						<div className="col-md-4">
							<input
								type="text"
								value={tempValue.SchoolCity ? tempValue.SchoolCity : ''}
								onChange={(e) => {
									let main_data = [ ...gradeData ];

									if (userGrade === 12) {
										main_data[0].grade_data_12[0].SchoolCity = e.target.value;
									} else if (userGrade === 11) {
										main_data[0].grade_data_11[0].SchoolCity = e.target.value;
									} else if (userGrade === 10) {
										main_data[0].grade_data_10[0].SchoolCity = e.target.value;
									} else if (userGrade === 9) {
										main_data[0].grade_data_9[0].SchoolCity = e.target.value;
									} else if (userGrade === 8) {
										main_data[0].grade_data_8[0].SchoolCity = e.target.value;
									}

									setGradeData(main_data);
								}}
								name={`schoolCity${userGrade}`}
								placeholder="Enter City Name"
								className="form-control"
							/>
						</div>
						<div className="col-md-4">
							<input
								type="text"
								value={tempValue.SchoolCountry ? tempValue.SchoolCountry : ''}
								onChange={(e) => {
									let main_data = [ ...gradeData ];

									if (userGrade === 12) {
										main_data[0].grade_data_12[0].SchoolCountry = e.target.value;
									} else if (userGrade === 11) {
										main_data[0].grade_data_11[0].SchoolCountry = e.target.value;
									} else if (userGrade === 10) {
										main_data[0].grade_data_10[0].SchoolCountry = e.target.value;
									} else if (userGrade === 9) {
										main_data[0].grade_data_9[0].SchoolCountry = e.target.value;
									} else if (userGrade === 8) {
										main_data[0].grade_data_8[0].SchoolCountry = e.target.value;
									}

									setGradeData(main_data);
								}}
								name={`schoolCountry${userGrade}`}
								placeholder="Enter Country Name"
								className="form-control"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor={`school_curriculum${userGrade}`} className="col-md-4 col-form-label">
							School Curriculum
						</label>
						<div className="col-md-4">
							<input
								type="text"
								value={tempValue.SchoolCurriculum ? tempValue.SchoolCurriculum : ''}
								onChange={(e) => {
									let main_data = [ ...gradeData ];

									if (userGrade === 12) {
										main_data[0].grade_data_12[0].SchoolCurriculum = e.target.value;
									} else if (userGrade === 11) {
										main_data[0].grade_data_11[0].SchoolCurriculum = e.target.value;
									} else if (userGrade === 10) {
										main_data[0].grade_data_10[0].SchoolCurriculum = e.target.value;
									} else if (userGrade === 9) {
										main_data[0].grade_data_9[0].SchoolCurriculum = e.target.value;
									} else if (userGrade === 8) {
										main_data[0].grade_data_8[0].SchoolCurriculum = e.target.value;
									}

									setGradeData(main_data);
								}}
								name={`schoolCurriculum${userGrade}`}
								placeholder="Enter School Curriculum"
								className="form-control"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor={`gpa${userGrade}`} className="col-md-4 col-form-label">
							Total GPA / Percentage
						</label>
						<div className="col-md-8">
							<input
								type="text"
								value={tempValue.TotalGPA ? tempValue.TotalGPA : ''}
								onChange={(e) => {
									let main_data = [ ...gradeData ];

									if (userGrade === 12) {
										main_data[0].grade_data_12[0].TotalGPA = e.target.value;
									} else if (userGrade === 11) {
										main_data[0].grade_data_11[0].TotalGPA = e.target.value;
									} else if (userGrade === 10) {
										main_data[0].grade_data_10[0].TotalGPA = e.target.value;
									} else if (userGrade === 9) {
										main_data[0].grade_data_9[0].TotalGPA = e.target.value;
									} else if (userGrade === 8) {
										main_data[0].grade_data_8[0].TotalGPA = e.target.value;
									}

									setGradeData(main_data);
								}}
								name={`gpa${userGrade}`}
								placeholder="Enter the Total GPA / Percentage"
								className="form-control"
							/>
						</div>
					</div>
				</div>
			);
		});
	}

	//console.log(gradeComponents);
	//console.log(sub);

	return (
		<Fragment>
			<Fragment>
				<form name="profile_grade_form" id="profile_grade_form" onSubmit={onSubmit}>
					<div className="form-group row">
						<label className="col-md-4 col-form-label">Grade*</label>
						<div className="col-md-8">
							<select
								id="grade"
								name="GRADE"
								className="custom-select"
								onChange={gradeChangeHandler}
								value={grade}
							>
								<option value={0}>Select Grade</option>
								<option value={8}>Grade 8</option>
								<option value={9}>Grade 9</option>
								<option value={10}>Grade 10</option>
								<option value={11}>Grade 11</option>
								<option value={12}>Grade 12</option>
								<option value={1}>Undergraduate</option>
							</select>
						</div>
						{gradeComponents}
					</div>
					<div className="form-group row">
						<label htmlFor="state" className="col-md-4 col-form-label">
							PSAT 8/9 (If Applicable : Score Out of 1440)
						</label>
						<div className="col-md-8">
							<input
								type="number"
								value={psat8_9}
								onChange={onChange}
								name="psat8_9"
								placeholder="Enter the PSAT 8/9 Score"
								max="1440"
								className="form-control"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="state" className="col-md-4 col-form-label">
							PSAT NMSQT/10 (If Applicable : Score Out of 1520)
						</label>
						<div className="col-md-8">
							<input
								type="number"
								value={psatnmsqt}
								onChange={onChange}
								name="psatnmsqt"
								placeholder="Enter the PSAT NMSQT/10 Score"
								max="1520"
								className="form-control"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="state" className="col-md-4 col-form-label">
							SAT (If Applicable : Score Out of 1600)
						</label>
						<div className="col-md-8">
							<input
								type="number"
								value={sat}
								onChange={onChange}
								name="sat"
								placeholder="Enter the SAT Score"
								max="1600"
								className="form-control"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="state" className="col-md-4 col-form-label">
							ACT (If Applicable : Score Out of 36)
						</label>
						<div className="col-md-8">
							<input
								type="number"
								value={act}
								onChange={onChange}
								name="act"
								placeholder="Enter the ACT Score"
								max="36"
								className="form-control"
							/>
						</div>
					</div>
					<div className="custom-control custom-checkbox test-planning">
						<label>
							<Checkbox
								checked={testPlan || false}
								onChange={handleChecked}
								value={testPlan}
								className="custom-input"
								name="testPlan"
							/>
							If you don't have PSAT/SAT/ACT Score, are you planning to give?
						</label>
					</div>
					<div className="form-group row">
						<div className="offset-4 col-md-8" style={{ textAlign: 'right' }}>
							<button name="submit" type="submit" className="btn btn-resume nexttab btn-direction">
								Continue
							</button>
						</div>
					</div>
				</form>
			</Fragment>
		</Fragment>
	);
};
ProfileEducationDetails.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(ProfileEducationDetails);
