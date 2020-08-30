import React, { Fragment,useState,useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown';
import store from '../../store/store';
import { APIsetMandatoryFields } from '../../config/API';
import { loadUser, loadAccess } from '../../../src/actions/auth';
import { setAlert } from '../../../src/actions/alert';

import { APIgetMandatoryFields } from '../../config/API';


const MandatoryFieldsModal = ({mandatory_field_status}) => {

    //console.log(mandatory_field_status);

    const [selectedCountries, setCountries] = useState([])

    // const  countryHandleOnchange  =  val  => {
    //     console.log('country selcted',val);
    //     setCountries(val)
    // }

    const countryHandleOnchange = function(selectedList, selectedItem) {

        console.log('selectedList',selectedList);
        console.log('selectedItem',selectedItem);
		const countries = [];
		for (let i = 0; i < selectedList.length; i++) {
			countries.push({ 'label':selectedList[i].label,'value':selectedList[i].value});
		}
		console.log('countries', countries);
		setCountries(countries);
    };
    
    const countryHandleOnRemove  = function(selectedList, selectedItem) {

        const index = selectedCountries.findIndex(x => x.value === selectedItem.value);

        //const index = selectedCareer.indexOf('value':selectedItem.value);
        console.log('index',index);
        if (index > -1) {
            selectedCountries.splice(index, 1);
        }

        console.log('country remove', selectedCountries);
    
    };  

    const  CountryOptions  = [
        { label:  'India', value:  1  },
        { label:  'UK', value:  2  },
        { label:  'USA', value:  3  },
        { label:  'Canada', value:  4  },
    ]

    const [selectedCareer, setCareer] = useState([])

    const  careerHandleOnchange  = function(selectedList, selectedItem) {
		const career = [];
		for (let i = 0; i < selectedList.length; i++) {

            career.push({ 'label':selectedList[i].label,'value':selectedList[i].value});

		}
		console.log('career select', career);
		setCareer(career);
    };
    
    const  careerHandleOnRemove  = function(selectedList, selectedItem) {

            const index = selectedCareer.findIndex(x => x.value === selectedItem.value);

            //const index = selectedCareer.indexOf('value':selectedItem.value);
            console.log('index',index);
            if (index > -1) {
                selectedCareer.splice(index, 1);
            }
	
		console.log('career remove', selectedCareer);
		
	};

    const  CareerOptions  = [
        { label:  'Engineering', value:  15  },
        { label:  'Computer Application & IT', value:  16  },
        { label:  'Ethical Hacking', value:  17  },
        { label:  'Aviation', value:  18  },
    ]

    const [ formData, setFormData ] = useState({
		fname: '',
		lname: '',
		phone: ''
	});

    const [ grade, setGrade ] = useState(0);

    const gradeChangeHandler = (event) => {
		event.preventDefault();
		setGrade(parseInt(event.target.value));
		
	};

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });     
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();

        console.log('formData.fname',formData.fname);

        console.log('formData.lname',formData.lname);

        console.log('formData.phone',formData.phone);

        console.log('grade',grade);

        console.log('selectedCareer', selectedCareer);

        const submitCareer = [];
		for (let i = 0; i < selectedCareer.length; i++) {

            submitCareer.push(selectedCareer[i].value);

        }
        
        console.log('submit selectedCareer', submitCareer.join(','));

        console.log('selectedCountries',selectedCountries);

        const submitCountry = [];
		for (let i = 0; i < selectedCountries.length; i++) {

            submitCountry.push(selectedCountries[i].value);

        }
        
        console.log('submitCountry selectedCareer', submitCountry.join(','));

        let body = {
			user_email: localStorage.user,
			fname: formData.fname,
			lname: formData.lname,
			phone: formData.phone,
			grade: grade,
			countryChoices: submitCountry.join(','),
			careerChoices: submitCareer.join(',')
		};

        const fetchData = async () => {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.token}` }
			};
			try {
				 await axios.post(
					APIsetMandatoryFields,
					body,
					config
				);
                
                window.location.reload();
				
			} catch (error) {
                //console.log(error);
                setAlert('Something Went Wrong!!', 'error');
			}
		};
		fetchData();
		store.dispatch(loadUser());
		store.dispatch(loadAccess());

    };

    useEffect(() => {
		const fetchData = async () => {
			const config = {
				headers: { Authorization: `Bearer ${localStorage.token}` }
			};
			try {
				const result = await axios.get(
					`${APIgetMandatoryFields}${localStorage.user}`,
					config
                );

                console.log('result',result);

                setFormData({
					fname: result.data.fname ? result.data.fname : '',
					lname: result.data.lname ? result.data.lname : '',
					phone: result.data.phone ? result.data.phone : ''
                });
                
                setGrade(result.data.grade ? result.data.grade : 0);

                if(result.data.careerChoice.length > 0){

                    let userCareer = [];
                    for (let single_data of result.data.careerChoice) {
                        userCareer.push({ 'label':single_data.TAG_NAME,'value':single_data.TAG_ID});
                    }

                    console.log('userCareer',userCareer);
                    //setCareer(userCareer.join(',')); //setting the user selected career
                    setCareer(userCareer);
                }

                if(result.data.countryChoice.length > 0){

                    let userCountries = [];
                    for (let single_data of result.data.countryChoice) {
                        userCountries.push({ 'label':single_data.TAG_NAME,'value':single_data.TAG_ID});
                        
                    }

                    setCountries(userCountries); //setting the user selected countries

                    console.log('selectedCountries',selectedCountries)

                }


            } catch (error) {
				//console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<Fragment>
           
            <div className="loginM cnt modal-1" style={{marginTop: '80px', background: '#fff'}} >
				<div className="login_modal userdm">
					<div className="head">
						<h4 className="log-title">User Details</h4>
					</div>
					<div className="content">
						<div>
							<form name="mandatory_fields" id="mandatory_fields" onSubmit={onSubmit}>

								<div className="col-md-6">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="email" className="txt-i">
												First Name
											</label>
										</div>
										<div className="col-12">
											<input
												name="fname"
												type="text"
												className="fit"
                                                id="fname"
                                                value={formData.fname}
                                                onChange={onChange}
                                                
											/>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="">
										<div className="col align-self-end">
											<label htmlFor="password" className="txt-i">
												Last Name
											</label>
										</div>
										<div className="col-12">
											<input
												name="lname"
												type="text"
												className="fit"
                                                id="lname"
                                                onChange={onChange}
                                                value={formData.lname}
											/>
										</div>
									</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <div className="col align-self-end">
                                            <label htmlFor="password" className="txt-i">
                                                Phone
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                name="phone"
                                                type="tel"
                                                className="fit"
                                                id="phone"
                                                onChange={onChange}
                                                value={formData.phone}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <div className="col align-self-end">
                                            <label htmlFor="password" className="txt-i">
                                                Grade
                                            </label>
                                        </div>
                                        <div className="col-12">
                                        <select
                                            id="grade"
                                            name="grade"
                                            className="custom-select"
                                            onChange={gradeChangeHandler}
                                            value={grade}
                                        >
                                            <option value={0}>Select Grade</option>
                                            <option value={1}>Grade 8</option>
                                            <option value={2}>Grade 9</option>
                                            <option value={3}>Grade 10</option>
                                            <option value={4}>Grade 11</option>
                                            <option value={5}>Grade 12</option>
                                            <option value={6}>Undergraduate</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <div className="col align-self-end">
                                            <label htmlFor="password" className="txt-i">
                                                Choice of Country
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <Multiselect
                                            options={CountryOptions}
                                            displayValue="label"
                                            selectedValues={selectedCountries}
                                            onSelect={countryHandleOnchange} // Function will trigger on select event
                                            onRemove={countryHandleOnRemove}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <div className="col align-self-end">
                                            <label htmlFor="password" className="txt-i">
                                                Choice of Career
                                            </label>
                                        </div>
                                        <div className="col-12">
                                          <Multiselect
                                            options={CareerOptions}
                                            displayValue="label"
                                            selectedValues={selectedCareer}
                                            onSelect={careerHandleOnchange} // Function will trigger on select event
                                            onRemove={careerHandleOnRemove}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="lgn-btn" type="submit">
                                    Submit
                                </button>
                            </form>
                            <p></p><br/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
	);
};

MandatoryFieldsModal.propTypes = {
    mandatory_field_status: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    mandatory_field_status: state.auth.mandatory_field_status
});

export default connect(mapStateToProps, null)(MandatoryFieldsModal);