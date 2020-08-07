import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import moment from "moment";
import Notify from "../modal/Notify";

import {APIgetLiveSession} from "../../config/API";

const UpcomingLiveSession = () => {
	const [availableLiveEvents, setAvailableLiveEvents] = useState([]);
	let bodyContent = "Loading";
	let enableButtons = false;

	let curTime = moment();

	let PREMIUM_LEVEL;

	//console.log(curTime.utc().format('YYYY-MM-DD HH:mm'));
	// const Retime = moment().utc().subtract(1, 'hours').format();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(APIgetLiveSession);
				//console.log(result);
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
			//console.log(utcTime);

			//console.log(availableLiveEvents[i].DATE_TIME);
			// console.log(eventTime.format());
			//console.log(enableTime);
			//console.log(stopTime);
			// enableButtons = moment('2020-10-20').isBetween('2020-01-20', '2020-12-25');
			enableButtons = curTime.isBetween(enableTime, stopTime);
			//enableButtons = curTime.isBetween(enableTime.format(formatted), stopTime.format(formatted));

			//console.log(enableButtons);

			return (
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
								JOIN NOW
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
								NOTIFY ME
							</Link>
						)}
					</div>

					<div className="titlecp bimg">
						<h6 className="title-text-h4">{availableLiveEvents[i].NAME}</h6>
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

					{enableButtons === false && (
						<div className="led-box">
							<div className="ledtext">LIVE STREAM</div>
						</div>
					)}

					{/*<div className="led-box liveledbox">
						{availableLiveEvents[i].PREMIUM_LEVEL === 2 && (
							<div className="ledtext silver">Silver</div>
						)}
						{availableLiveEvents[i].PREMIUM_LEVEL === 3 && (
							<div className="ledtext gold">Gold</div>
						)}
						{availableLiveEvents[i].PREMIUM_LEVEL === 4 && (
							<div className="ledtext platinum">Platinum</div>
						)}
						</div>*/}

					<Notify />
				</div>
			);
		});
	}

	return (
		<Fragment>
			<div className="container join_live">
				<section className="single_video" id={`#sectionLive`}>
					<div className="upcmngls">
						<div className="mobbtncntrv" id="upcomigTop">
							<h2
								className="new-class-heading"
								style={{marginLeft: "0px!important"}}
							>
								Upcoming Live Sessions
							</h2>
							<span className="catvm" style={{display: "none"}}>
								<a href="/liveSessions">View All</a>
							</span>
						</div>
					</div>
				</section>

				<div className="new-class">
					<div className="row clas-row">{bodyContent}</div>
				</div>
			</div>
		</Fragment>
	);
};

export default UpcomingLiveSession;
