import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';

const SmallCard = ({
	img = 'assets/images/7.jpg',
	title = 'Lorum Ipsum',
	text = 'Lorum Ipsum is a dummy text',
	onclickUrl = '/'
}) => {
	return (
		<Fragment>
			<div className="col-md-3 teacher-self-exp">
				<a href={onclickUrl}>
					<div className="title-img-sec">
						<img alt="small collegepass" src={img} />
					</div>
					<div className="title-gradient-bottom" />
					<div className="titlecp">
						<p className="title-text-p">{title}</p>
					</div>
				</a>
			</div>
		</Fragment>
	);
};

export default SmallCard;
