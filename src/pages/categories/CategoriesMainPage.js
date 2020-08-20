import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import Header from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';
//import CheckUserAccess from '../../utils/checkUserAccess';

import { APIstoreUserMoment } from '../../config/API';
import { APIgetVideoCategories } from '../../config/API';

const Categories = () => {
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
			<Header />

			<section className="newest-classes all-categories">
				<div className="container planbckbtn">
					<div className="breadcrumb-main">
						<ul className="breadcrumb">
							<Link to="./" className="bhome">
								<li className="toolbckpln">
									<i className="fas fa-long-arrow-alt-left" />
									<span className="tooltiptext">Back</span>
								</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className="container">
					<div className="new-class">
						<h2 className="new-class-heading">Video Lessons</h2>
						<div className="new-className">
							<div className="row clas-row"> {CardComponents}</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	);
};

export default Categories;
