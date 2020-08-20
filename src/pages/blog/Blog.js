import React, {Fragment} from "react";
import BeforeLoggedInHeader from "../../components/header/BeforeLoggedInHeader";
import AfterLoggedInHeader from "../../components/header/AfterLoggedInHeader";
import Footer from "../../components/footer/Footer";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Blog = ({auth: {isAuthenticated}}) => {
	let headerComponent = <BeforeLoggedInHeader />;
	if (isAuthenticated) {
		headerComponent = <AfterLoggedInHeader />;
	}
	return (
		<Fragment>
			{headerComponent}
			<h1>HEllo</h1>
			<div
				style={{zIndex: 999}}
				id="retainable-rss-embed"
				data-rss="https://medium.com/feed/retainable,
     https://medium.com/feed/js-dojo,                https://medium.com/feed/vue-mastery"
				data-maxcols="4"
				data-layout="slider"
				data-poststyle="modal"
				data-readmore="Read the rest"
				data-buttonclass="btn btn-primary"
				data-offset="-200"
			>
				&#160;
			</div>
			<Footer></Footer>
		</Fragment>
	);
};

Blog.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Blog);
