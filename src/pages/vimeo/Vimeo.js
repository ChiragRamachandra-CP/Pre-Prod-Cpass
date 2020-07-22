import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
//import Header from '../../components/header/AfterLoggedInHeader';
//import Footer from '../../components/footer/Footer';
//import CheckUserAccess from '../../utils/checkUserAccess';

import { APIstoreUserMoment } from '../../config/API';
import { APIgetVideoCategories } from '../../config/API';

const Vimeo = () => {
	useEffect(() => {
		const storeUserMovement = async () => {
			//console.log(window.location.href);
			//console.log(new Date().toLocaleString());
			let body = {
				user_email: localStorage.user,
				page: [ { page: window.location.href }, { date: new Date().toLocaleString() } ]
			};
			try {
				//console.log(APIstoreUserMoment);
				const result = await axios.post(APIstoreUserMoment, body);
				//console.log(result);
			} catch (error) {
				//do nothing for
				//console.log(error);
			}
		};
		storeUserMovement();
	}, []);

	const [ availableCategories, setAvailableCategories ] = useState([]);
	let CardComponents = null;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(APIgetVideoCategories);
				setAvailableCategories(result.data.data);
			} catch (error) {
				//do nothing for now
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (availableCategories) {
		CardComponents = availableCategories.map((availableCategory, i) => {
			let videoPlayUrl = '/categories/' + availableCategory.ID;
			return (
				<Card
					key={i}
					img={availableCategories[i].s3_image}
					title={availableCategories[i].NAME}
					text={availableCategories[i].NAME}
					onclickUrl={videoPlayUrl}
				/>
			);
		});
	} else {
		CardComponents = <div>Loading...</div>;
	}

	return (
        <Fragment>
        <h1 style={{textAlign: 'center', color: '#fff', margin: '3%', fontSize: '30px'}}>Vimeo Session</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-8">
					<div style={{padding: '56.25% 0 0 0', position: 'relative'}}><iframe src="https://player.vimeo.com/video/440595304" frameBorder="0" allow="autoplay; fullscreen" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe></div>
					</div>
					<div className="col-md-4">
					<iframe src="https://vimeo.com/live-chat/440595304/" width="400" height="100%" frameBorder="0"></iframe>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Vimeo;
