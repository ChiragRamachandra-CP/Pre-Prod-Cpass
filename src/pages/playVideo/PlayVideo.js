import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PlayVideo.css';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';
import BottomHorizontal from '../../components/categoryHorizontalSection/BottomHorizontal';
import axios from 'axios';
import CheckUserAccess from '../../utils/checkUserAccess';

//import { APIstoreVideoViews } from '../../config/API';
import { APIstoreUserMoment } from '../../config/API';
import { APIgetVideoBySourceId } from '../../config/API';

const PlayVideo = ({ match, vimeoId }) => {
	useEffect(() => {
		const storeUserMovement = async () => {
			//console.log(window.location.href);
			//console.log(new Date().toLocaleString());
			let body = {
				user_email: localStorage.user,
				page: [ { page: window.location.href }, { date: new Date().toLocaleString() } ]
			};
			try {
				const result = await axios.post(APIstoreUserMoment, body);
				//console.log(result);
			} catch (error) {
				//do nothing for
				//console.log(error);
			}
		};
		storeUserMovement();
	}, []);

	//let onClickHandler = null;

	// useEffect(() => {
	// 	const storeVideoViews = async () => {
	// 		console.log(localStorage.user);
	// 		console.log(match.params.videoId);
	// 		let body = {
	// 			user_email: localStorage.user,
	// 			video_source_id: [ { video_source_id: match.params.videoId } ]
	// 		};
	// 		try {
	// 			const result = await axios.post(APIstoreVideoViews, body);
	// 			console.log(result);
	// 		} catch (error) {
	// 			//do nothing for
	// 			console.log(error);
	// 		}
	// 	};
	// 	storeVideoViews();
	// });

	// console.log(match.params.videoId);
	// console.log(match.params.catId);

	let videoPlayer = null;
	let videoUrl = null;
	// const vimeoUrl = 'https://player.vimeo.com/video/' + match.params.videoId;
	const [ title, setTitle ] = useState('Video');
	const [ desc, setDesc ] = useState('Collegepass video');
	const [ source, setSource ] = useState(null);

	// onClickHandler(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	useEffect(
		() => {
			const fetchData = async () => {
				try {
					const result = await axios.get(APIgetVideoBySourceId + match.params.videoId);
					// console.log(result.data.data[0].SOURCE);
					setSource(result.data.data[0].SOURCE);
					setTitle(result.data.data[0].NAME);
					setDesc(result.data.data[0].DESC);
				} catch (error) {
					//do nothing for now
				}
			};
			fetchData();
		},
		[ match.params.videoId ]
	);

	if (source === 2) {
		videoUrl = 'https://www.youtube.com/embed/' + match.params.videoId + '?rel=0&amp;enablejsapi=1';
		videoPlayer = (
			<iframe
				width="1200"
				height="564"
				src={videoUrl}
				frameBorder="0"
				showinfo="0"
				id="widget2"
				title="collegepass"
			/>
		);
	} else if (source === 1) {
		videoUrl = 'https://player.vimeo.com/video/' + match.params.videoId;
		videoPlayer = (
			<iframe
				src={videoUrl}
				width="1200"
				height="564"
				frameBorder="0"
				id="sing_vd"
				allow="autoplay; fullscreen"
				title="video"
				allowFullScreen
			/>
		);
	} else {
		videoPlayer = <h2> Loading.. </h2>;
	}

	return (
		<Fragment>
			<AfterLoggedInHeader />
			<div className="site-wrap page-id-6">
				<section className="newest-classNamees plyvid">
					<div className="container">
						<section className="single_video">
							<div className="upcmngls">
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

								<div>
									<div className="upcmnglsv">
										<h6 className="title-text-h4 vid-t">{title}</h6>
										{/*<p className="title-text-p vid-t">{desc}</p>*/}
										{videoPlayer}
									</div>
								</div>
							</div>
						</section>

						<div className="new-class related-vid" id="show-menu-sec">
							<h2 className="new-class-heading">Related Videos</h2>
							<BottomHorizontal catID={match.params.catId} />
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</Fragment>
	);
};

export default PlayVideo;
