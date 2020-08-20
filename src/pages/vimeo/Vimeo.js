import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
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
				 await axios.post(APIstoreUserMoment, body);
				//console.log(result);
			} catch (error) {
				//do nothing for
				//console.log(error);
			}
		};
		storeUserMovement();
	}, []);

	const [ availableCategories, setAvailableCategories ] = useState([]);
	

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

	let CardComponents = null;
	
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
        <h1 style={{textAlign: 'center', color: '#fff', marginTop: '10%', fontSize: '30px'}}>Vimeo Page</h1>
			{/*<Header />
			{}
            <Footer />*/}
			{CardComponents}
		</Fragment>
	);
};

export default Vimeo;
