import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from "moment";
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';

import { APIgetLiveSession } from '../../config/API';


const UpcomingLiveSessionAll = () => {
	const [availableLiveEvents, setAvailableLiveEvents] = useState([]);
	let bodyContent = "Loading";
	let enableButtons = false;
	let curTime = moment();


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
		bodyContent = availableLiveEvents.map((availableCategory, i) => {
			const utcTime = moment.utc(availableLiveEvents[i].DATE_TIME).format();
			const enableTime = moment
				.utc(availableLiveEvents[i].DATE_TIME)
				.subtract(15, "minute")
				.format();

			const stopTime = moment
				.utc(availableLiveEvents[i].DATE_TIME)
				.add(2, "h")
				.format();
			enableButtons = curTime.isBetween(enableTime, stopTime);
		});
	}

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
										{enableButtons === true && (
											<Link
												to={`/live/${availableLiveEvents[i].ZOOMID}`}
												className="vidlivebtnn"
											>
												Join Now
											</Link>
										)}
									</div>

									<div className="vidicncntrlve">
										{enableButtons === false && (
											<Link
												to=""
												className="vidlivebtnn"
												data-toggle="modal"
												data-target="#notify"
											>
												Notify Me
											</Link>
										)}
									</div>

								<div className="titlecp bimg">
									<h6 className="title-text-h4">{availableLiveEvents[i].NAME}</h6>

									{/* <p className="title-text-p">{ (new Date(availableLiveEvents[i].DATE_TIME)).toString()}</p> */}
								</div>

								{enableButtons === true && (
									<div class="led-box">
										<div class="led-red"></div>
										<div class="ledtext">LIVE</div>
									</div>
								)}
								{enableButtons === false && (
									<div className="led-box">
										<div className="ledtext">LIVE STREAM</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default UpcomingLiveSessionAll;
