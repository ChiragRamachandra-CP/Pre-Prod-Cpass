import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import moment from "moment";
//import Notify from "../modal/Notify";
//import Modal from "../modal/Modal";
//import TimeZone from "../live/TimeZone"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {APIgetLiveClass} from "../../config/API";

const UpcomingLiveClasses = ({timezone,utc_offset}) => {
	const [availableLiveEvents, setAvailableLiveEvents] = useState([]);
	let bodyContent = "Loading";
	let enableButtons = false;

	let curTime = moment();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(APIgetLiveClass);
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
			moment.utc(availableLiveEvents[i].DATE_TIME).format();
			const enableTime = moment
				.utc(availableLiveEvents[i].DATE_TIME)
				.subtract(15, "minute")
				.format();

			const stopTime = moment
				.utc(availableLiveEvents[i].DATE_TIME)
				.add(2, "h")
				.format();
			
			const local_time = moment.utc(availableLiveEvents[i].DATE_TIME).utcOffset(utc_offset).format("hh:mm A");

			
			enableButtons = curTime.isBetween(enableTime, stopTime);
		
			return (
				<div key={i} className="col-md-6 teacher-self-exp">
					<div className="title-img-sec">
						<img src={availableLiveEvents[i].s3_image} alt="live Session" />
					</div>
					<div className="overlay" />

					<div className="vidicncntrlve timesec">
						<div className="container live-time-zome">
							<section className="time-zone">
								{/*<div className="time-logo">
								</div>
								<div className="time-date">
								</div>*/}
								<div className="time-heading">
									<h6>{availableLiveEvents[i].NAME}</h6>
								</div>
								
								<div className="time-desc">
									<h6>{availableLiveEvents[i].DESC}</h6> 
								</div>

								<div className="time-main">
								<h6>{local_time} {timezone}</h6>
								</div>
							</section>
						</div>
					</div>

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
							<div className="ledtext">LIVE CLASS</div>
						</div>
					)}

					{/* {enableButtons === false && (
						<div className="led-box">
							<div className="ledtext">LIVE CLASS</div>
						</div>
					)} */}
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
				</div>
			);
		});
	}

	return (
		<Fragment>
			<div className="container join_live">
				<section className="single_video">
					<div className="upcmngls">
						<div className="mobbtncntrv">
							<h2
								className="new-class-heading"
								style={{marginLeft: "0px!important"}}
							>
								Upcoming Live Classes
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

UpcomingLiveClasses.propTypes = {
    timezone: PropTypes.string.isRequired,
    utc_offset: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    timezone: state.auth.timezone,
    utc_offset: state.auth.utc_offset
});

export default connect(mapStateToProps, null)(UpcomingLiveClasses);