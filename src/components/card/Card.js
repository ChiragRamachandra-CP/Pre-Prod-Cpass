import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { login, socialLogin } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';

const Card = ({
	img = 'assets/images/7.jpg',
	title = 'Lorum Ipsum',
	text = 'Lorum Ipsum is a dummy text',
	onclickUrl = '/',
}) => {



	return (
		<Fragment>
			<div className="col-md-6 teacher-self-exp">
				<div className="title-img-sec">
					<img src={img} alt="topic" />
				</div>
				<div className="overlay" />
				<Link to={onclickUrl}>
					<div className="vidicncntr">
						<i className="fa fa-play" data-toggle="modal" data-target="#myModal"></i>
					</div>
				</Link>

				<Modal />

				<div className="titlecp">
					<h6 className="title-text-h4">{title}</h6>
					{/*<p className="title-text-p">{text}</p>*/}
				</div>
			</div>
		</Fragment>
	);
};


Card.propTypes = {
	login: PropTypes.func.isRequired,
	socialLogin: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { login, socialLogin })(Card);
