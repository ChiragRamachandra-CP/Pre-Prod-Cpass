import React, { Fragment } from 'react';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';

const Vimeo = () => {

	return (
		<Fragment>
            <AfterLoggedInHeader />

            <h2>Vimeo Section</h2>

            <Footer />
		</Fragment>
	);
};

export default Vimeo;