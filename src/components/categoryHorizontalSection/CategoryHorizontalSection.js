import React, { Fragment, useEffect, useState, Suspense, lazy } from 'react';

import axios from 'axios';
import Loader from '../../utils/Loader';

import { APIgetVideoCategories } from '../../config/API';

//import Card from '../card/Card';
const Card = lazy(() => import('../card/Card'));

const CategoryHorizontalSection = () => {
	const [ availableCategories, setAvailableCategories ] = useState([]);
	let CardComponents = null;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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

	if (availableCategories) {
		CardComponents = availableCategories.map((availableCategory, i) => {
			return (
				<Suspense key={i} fallback={<Loader />}>
					<Card
						key={i}
						img={availableCategories[i].s3_image}
						title={availableCategories[i].NAME}
						text={availableCategories[i].NAME}
					/>
				</Suspense>
			);
		});
	} else {
		CardComponents = <Loader />;
	}

	return (
		<Fragment>
			<div className="Card">
				<section className="newest-classNamees">
					<div className="container">
						<section className="single_video">
							<div className="new-class" id="videoLessonsTop">
								<div>
									<h2 className="new-class-heading" style={{ marginLeft: '0px!important' }}>
										Explore Our Video Lessons
									</h2>
								</div>
							</div>
						</section>
						<div className="new-className">
							<div className="row clas-row"> {CardComponents}</div>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default CategoryHorizontalSection;
