import React, { Fragment } from 'react';
import BeforeLoggedInHeader from '../../components/header/BeforeLoggedInHeader';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AboutUs = ({ auth: { isAuthenticated } }) => {
	let headerComponent = <BeforeLoggedInHeader />;
	if (isAuthenticated) {
		headerComponent = <AfterLoggedInHeader />;
	}
	return (
		<Fragment>
			{headerComponent}
			<div className="site-wrap">
				<section className="newest-class aboutmain">
					<div className="container">
						<div className="new-className">
							<h2>ABOUT US</h2>
							<p>
							CollegePass has been founded to help students and parents access high quality, reliable college and career advice at the click of a button.
							</p>
							<p>
							"A college education is more important now than ever before, for both tangible and intangible reasons. A college degree is still the surest way to increase wage potential. In addition, with the rise of artificial intelligence and the consistent call for multi-talented and flexible critical thinkers in our workplaces, college is — and will increasingly be — the best way to prepare for an uncertain future."
							</p>
							<p>Mark A Heckler, Chicago Tribune</p>

							<h3>Vision</h3>
							<p>
							 "Every student worldwide should have access to High Quality, College & Career Counselling."
							</p>
							<p>
							At CollegePass, our mission is connecting students to Colleges & Careers by leveraging artificial intelligence and expert advisors worldwide.
							</p>
							<p>
							We believe World Class Original & Curated Content delivered in a personalised and affordable way using technology is the key to ensuring every child has access to his own virtual private college and career counsellor.
							</p>

							<h3>Mission 2025</h3>
							<p>Enable 15 Million Higher Education Decisions!</p>
							<p>
							If our vision inspires you, contribute (part time) or join our international team committed to making high quality college and career advice accessible to every student worldwide. Please email us your interest at{' '}
								<a href="mailto:support@collegepass.org" target="_blank" rel="noopener noreferrer">
									support@collegepass.org
								</a>
							</p>

							<p>Aakash Abraham Aaron</p>

							<p>
								Founder & CEO<br />CollegePass
							</p>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</Fragment>
	);
};

AboutUs.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(AboutUs);
