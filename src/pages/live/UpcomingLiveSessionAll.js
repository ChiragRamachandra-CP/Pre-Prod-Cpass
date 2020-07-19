import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';

import { APIgetLiveSession } from '../../config/API';


const UpcomingLiveSessionAll = () => {
	const [ availableLiveEvents, setAvailableLiveEvents ] = useState([]);
	//let CardComponents = null;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(APIgetLiveSession);
				setAvailableLiveEvents(result.data.data);
			} catch (error) {
				//do nothing for now
			}
		};
		fetchData();
	}, []);

	//console.log('availableLiveEvents', availableLiveEvents);

	if (availableLiveEvents) {
		//let event_date;
		return (
			<Fragment>
				<AfterLoggedInHeader />
				<div className="container join_live upcoming_live">
					<section className="single_video">
						<div className="upcmngls">
							<div className="upcoming_live_heading">
								<h2 className="new-class-heading" style={{ marginLeft: '0px!important' }}>
									Upcoming Live Sessions
								</h2>
							</div>
						</div>
					</section>

					<div className="new-class">
						<div className="row clas-row">
							{availableLiveEvents.map((availableCategory, i) => (
								<div key={i} className="col-md-6 teacher-self-exp">
									<div className="title-img-sec">
										<img src={availableLiveEvents[i].s3_image} alt="live Session" />
									</div>
									<div className="overlay" />
									<div className="vidicncntrlve">
										
										{availableLiveEvents[i].is_live === 1 && (
											<Link to={`/live/${availableLiveEvents[i].ZOOMID}`} className="vidlivebtnn">
											Join Now
											</Link>
										)}
									</div>

									<div className="vidicncntr">
										{availableLiveEvents[i].is_live === 0 && (
											<a
												href={`${availableLiveEvents[i].CALLENDER_LINK}`}
												target="_BLANK"
												rel="noopener noreferrer"
											>
												<i className="fa fa-calendar" aria-hidden="true" />
											</a>
										)}
									</div>

									<div className="titlecp bimg">
										<h6 className="title-text-h4">{availableLiveEvents[i].NAME}</h6>

										{/* <p className="title-text-p">{ (new Date(availableLiveEvents[i].DATE_TIME)).toString()}</p> */}
									</div>

									<div className="led-box">
										<div className="led-red" /><div className="ledtext">LIVE</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<Footer />
			</Fragment>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default UpcomingLiveSessionAll;
