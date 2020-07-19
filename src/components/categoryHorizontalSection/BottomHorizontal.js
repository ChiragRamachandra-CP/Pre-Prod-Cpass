import React, { Fragment, useEffect, useState } from 'react';
import SmallCard from '../card/SmallCard';
import axios from 'axios';

import { APIgetVideoByCategoryID } from '../../config/API';
 
const BottomHorizontal = ({ catID }) => {
	const [ availableCategories, setAvailableCategories ] = useState([]);
	let CardComponents = null;

	useEffect(
		() => {
			const fetchData = async () => {
				try {
					const result = await axios.get(
						APIgetVideoByCategoryID + catID
					);

					setAvailableCategories(result.data.data);
				} catch (error) {
					//do nothing for now
				}
			};
			fetchData();
		},
		[ catID ]
	);

	

	if (availableCategories) {
		CardComponents = availableCategories.map((availableCategory, i) => {
			let videoPlayUrl = '/categories/' + catID + '/' + availableCategory.URL;

			return (
				<SmallCard
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

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])


	return <Fragment>{CardComponents}</Fragment>;
};


export default BottomHorizontal;
