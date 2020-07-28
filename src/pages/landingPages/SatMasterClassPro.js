import React, { Fragment } from 'react';
import AfterLoggedInHeader from '../../components/header/AfterLoggedInHeader';
import Footer from '../../components/footer/Footer';

const SatMasterClassPro = () => {
	
	return (
		<Fragment>
			<AfterLoggedInHeader />
			<div className="site-wrap page-id-7">
				<h1 style={{textAlign: 'center', padding: '60px 0px', fontSize: '30px', fontWeight: '600'}}>Coming Soon</h1>
			</div>
			<Footer />
		</Fragment>
	);
};


export default SatMasterClassPro;
