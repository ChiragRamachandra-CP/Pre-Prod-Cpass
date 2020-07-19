import React, { Fragment, useEffect, Suspense } from 'react';
// import LoggedInHeader from './../../components/header/AfterLoggedInHeader';
// import SliderAfterLogin from '../../components/slider/SliderAfterLogin';
// import Footer from './../../components/footer/Footer';
// import CategoryHorizontalAfterLogin from './../../components/categoryHorizontalSection/CategoryHorizontalAfterLogin';
// //import Content from './../../components/marketBanner/Content';
// import UpcomingLiveSession from './../../components/live/UpcomingLiveSession';
// import UpcomingLiveClasses from './../../components/live/UpcomingLiveClasses';
import axios from 'axios';
// import UserAccess from '../../utils/checkUserAccess';

import { APIstoreUserMoment } from '../../config/API';

const LoggedInHeader = React.lazy(() => import('./../../components/header/AfterLoggedInHeader'));
const SliderAfterLogin = React.lazy(() => import('../../components/slider/SliderAfterLogin'));
const Footer = React.lazy(() => import('./../../components/footer/Footer'));
const CategoryHorizontalAfterLogin = React.lazy(() =>
	import('./../../components/categoryHorizontalSection/CategoryHorizontalAfterLogin')
);
const UpcomingLiveSession = React.lazy(() => import('./../../components/live/UpcomingLiveSession'));
const UpcomingLiveClasses = React.lazy(() => import('./../../components/live/UpcomingLiveClasses'));

const HomeAfterLogin = () => {
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

	return (
		<Fragment>
			<Suspense fallback={<p>Loading</p>}>
				<LoggedInHeader />
				<SliderAfterLogin />
				{/*<Content />*/}
				<UpcomingLiveSession />
				<UpcomingLiveClasses />
				<CategoryHorizontalAfterLogin />
				<Footer />
			</Suspense>
		</Fragment>
	);
};

export default HomeAfterLogin;
