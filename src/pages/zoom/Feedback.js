import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../components/header/AfterLoggedInHeader';
import { Redirect } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Feedback.css';
import axios from 'axios';
import { setAlert } from '../../../src/actions/alert';
import { succFeedback } from '../../config/success';
import { errorFeedback } from '../../config/error';

import { APIstoreUserFeedback } from '../../config/API';
import { APIstoreUserMoment } from '../../config/API';

const Feedback = ({ match, feedbackSubmit, isAuthenticated, setAlert }) => {
	useEffect(() => {
		const storeUserMovement = async () => {
			//console.log(window.location.href);
			//console.log(new Date().toLocaleString());
			let body = {
				user_email: localStorage.user,
				page: [ { page: window.location.href }, { date: new Date().toLocaleString() } ]
			};
			try {
				 await axios.post(APIstoreUserMoment, body);
				//console.log(result);
			} catch (error) {
				//do nothing for
				//console.log(error);
			}
		};
		storeUserMovement();
	}, []);

	const [ redirect, setRedirect ] = useState(false);

	//console.log(match.params.sessionId);
	const [ formData, setFormData ] = useState({
		rating: '',
		review: ''
	});

	const { rating, review } = formData;

	const event_id = match.params.eventID;
	if (redirect) {
		return <Redirect to="/" />;
	}

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		//const user_email = localStorage.user;

		try {
			const config = {
				headers: {
					Authorization: `Bearer ${localStorage.token}`,
					'Content-Type': 'application/json'
				}
			};
			 await axios.post(
				APIstoreUserFeedback,
				{
					user_email: localStorage.user,
					rating: rating,
					review: review,
					event_id: event_id
				},
				config
			);
			//console.log('Feedback completed', result);
			setAlert(succFeedback, 'success');

			setRedirect(true);
		} catch (err) {
			setAlert(errorFeedback, 'danger');
			//
		}
	};
	return (
		<Fragment>
			<Header />
			<div className="site-wrap page-feedback">
				<div className="container-fluid">
					<div className="container feedback">
						<div className="mainfeed">
							<div className="row" style={{ textAlign: 'center' }}>
								<h1
									className="new-class-heading headsecdiff"
									style={{
										fontSize: '1.8rem',
										width: '100%',
										textAlign: 'center',
										color: '#fff',
										paddingBottom: '15px'
									}}
								>
									Please share your feedback!
									{/*<span className="suggbugs">
										Do you have a suggestion or found some bugs?<br /> let us know in the field
										bellow.
								</span>*/}
								</h1>
								<form onSubmit={onSubmit}>
									<div className="form-sec">
										{/* <p id="ratingVal">How was your experience?</p> */}
										<div className="row rating">
											<form id="form">
												<fieldset class="rating">
													<input
														type="radio"
														id="star5"
														name="rating"
														value="5"
														onChange={onChange}
													/>
													<label class="full" for="star5" title="Awesome - 5 stars" />
													<input
														type="radio"
														id="star4half"
														name="rating"
														value="4.5"
														onChange={onChange}
													/>
													<label
														class="half"
														for="star4half"
														title="Pretty good - 4.5 stars"
													/>
													<input
														type="radio"
														id="star4"
														name="rating"
														value="4"
														onChange={onChange}
													/>
													<label class="full" for="star4" title="Pretty good - 4 stars" />
													<input
														type="radio"
														id="star3half"
														name="rating"
														value="3.5"
														onChange={onChange}
													/>
													<label class="half" for="star3half" title="Meh - 3.5 stars" />
													<input
														type="radio"
														id="star3"
														name="rating"
														value="3"
														onChange={onChange}
													/>
													<label class="full" for="star3" title="Meh - 3 stars" />
													<input
														type="radio"
														id="star2half"
														name="rating"
														value="2.5"
														onChange={onChange}
													/>
													<label class="half" for="star2half" title="Kinda bad - 2.5 stars" />
													<input
														type="radio"
														id="star2"
														name="rating"
														value="2"
														onChange={onChange}
													/>
													<label class="full" for="star2" title="Kinda bad - 2 stars" />
													<input
														type="radio"
														id="star1half"
														name="rating"
														value="1.5"
														onChange={onChange}
													/>
													<label class="half" for="star1half" title="Meh - 1.5 stars" />
													<input
														type="radio"
														id="star1"
														name="rating"
														value="1"
														onChange={onChange}
													/>
													<label class="full" for="star1" title="Sucks big time - 1 star" />
													<input
														type="radio"
														id="starhalf"
														name="rating"
														value="0.5"
														onChange={onChange}
													/>
													<label
														class="half"
														for="starhalf"
														title="Sucks big time - 0.5 stars"
													/>
												</fieldset>

												<div className="review">
													<label>Please leave your comments below</label>
													<textarea
														rows="8"
														cols="100"
														name="review"
														className="review_area"
														value={review}
														onChange={onChange}
														placeholder="Share your review."
													/>
												</div>

												<div className="submit_rating">
													<input
														type="submit"
														className="rtngbtn"
														name="submit"
														value="Submit"
													/>
												</div>
											</form>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</Fragment>
	);
};
Feedback.propTypes = {
	isAuthenticated: PropTypes.bool,
	setAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert })(Feedback);
