import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import Header from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';
//import CheckUserAccess from '../../utils/checkUserAccess';

import { APIstoreUserMomentVideo } from '../../config/API';
import { APIgetVideoByCategoryID } from '../../config/API';

const CategoryVideosPage = ({ match }) => {
	useEffect(() => {
		const storeUserMovement = async () => {
			//console.log(window.location.href);
			//console.log(new Date().toLocaleString());
			let body = {
				user_email: localStorage.user,
				page: [ { page: window.location.href }, { date: new Date().toLocaleString() } ]
			};
			try {
				 await axios.post(APIstoreUserMomentVideo, body);
				//console.log(result);
			} catch (error) {
				//do nothing for
				//console.log(error);
			}
		};
		storeUserMovement();
	}, []);

	const [ availableCategories, setAvailableCategories ] = useState([]);
	const [ title, setTitle ] = useState('Category Videos');
	let CardComponents = null;

	useEffect(
		() => {
			const fetchData = async () => {
				const config = {
					headers: { Authorization: `Bearer ${localStorage.token}` }
				};
				const url = APIgetVideoByCategoryID + match.params.catId;
				try {
					const result = await axios.get(url, config);
					//console.log(result);
					setAvailableCategories(result.data.data);
					setTitle(result.data.title);
				} catch (error) {
					//do nothing for now
				}
			};
			fetchData();
		},
		[ match.params.catId ]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (availableCategories) {
		CardComponents = availableCategories.map((availableCategory, i) => {
			let videoPlayUrl = '/categories/' + match.params.catId + '/' + availableCategory.URL;

			return (
				<Card
					key={i}
					img={availableCategories[i].s3_image}
					title={availableCategories[i].NAME}
					text={availableCategories[i].DESC}
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
			<section className="newest-classes all-categories allcatids">
				<div className="container planbckbtn">
					<div className="breadcrumb-main">
						<ul className="breadcrumb">
							<Link to="/categories" className="bhome">
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
						<h2 className="new-class-heading">{title}</h2>
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

export default CategoryVideosPage;
