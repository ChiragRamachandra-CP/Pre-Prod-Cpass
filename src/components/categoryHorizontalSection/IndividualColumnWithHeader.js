import React, { Fragment, useEffect } from 'react';
import Card from '../card/Card';
import { Link } from 'react-router-dom';

const IndividualColumnWithHeader = ({ props }) => {
	const categoryID = props[0].cat_id;
	const categoryTitle = props[1].cat_name;
	const videoList = props[2].video_list;

	let CardComponents = videoList.map((video, i) => {
		let videoPlayUrl = '/categories/' + categoryID + '/' + video.URL;
		return <Card key={i} img={video.s3_image} title={video.NAME} text={video.DESC} onclickUrl={videoPlayUrl} />;
	});

	let viewMoreUrl = '/categories/' + categoryID;

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

	return (
		<Fragment>
			<div className="Card">
				<section className="newest-class">
					<div className="container">
						<section className="single_video" id="videoLessonsTop">
							<div className="new-class">
								<div className="mobbtncntrv">
									<h2 className="new-class-heading">{categoryTitle}</h2>

									<span className="catvm">
										<Link to={viewMoreUrl}>View more</Link>
									</span>
								</div>
							</div>
						</section>
						<div className="new-class aftrloginpage">
							<div className="row clas-row">{CardComponents}</div>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default IndividualColumnWithHeader;
