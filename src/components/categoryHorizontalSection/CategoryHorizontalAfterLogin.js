import React, { Fragment, useEffect, useState } from 'react';
import IndividualColumn from './IndividualColumnWithHeader';
import axios from 'axios';

import { APIgetUserTrackList } from '../../config/API';

const CategoryHorizontalAfterLogin = () => {
	const [ availableCategories, setAvailableCategories ] = useState([]);
	let CardComponents = null;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const url = `${APIgetUserTrackList}${localStorage.user}`;

		const config = {
			headers: { Authorization: `Bearer ${localStorage.token}` }
		};

		const fetchData = async () => {
			try {
				const result = await axios.get(url, config);

				setAvailableCategories(result.data.data);
				//console.log(result);
			} catch (error) {
				//do nothing for now
			}
		};
		fetchData();
	}, []);

	if (availableCategories) {
		// console.log(availableCategories);
		CardComponents = availableCategories.map((nested, i) => <IndividualColumn key={i} props={nested} />);
		// (function(subarray) {
		// 	return subarray.map(function(number) {
		// 		return <IndividualColumn key={number.cat_id} title={number.cat_name} />;
		// 	});
		// });
		//<IndividualColumn key={j.cat_id} title={j.cat_name} />
	} else {
		CardComponents = <div>Loading...</div>;
	}

	return <Fragment>{CardComponents}</Fragment>;
};

export default CategoryHorizontalAfterLogin;
