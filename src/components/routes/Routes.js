import React, { Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BounceLoader from '../../utils/Loader';
import PrivateRoute from './PrivateRoute';

// const Home = lazy(() => import('./routes/Home'));

const Registration = lazy(() => import('../../pages/auth/Registration.js'));
const Privacy = lazy(() => import('../../pages/privacy/Privacy'));
const Terms = lazy(() => import('../../pages/terms/Terms'));
const AboutUs = lazy(() => import('../../pages/about/AboutUs'));
const Blog = lazy(() => import('../../pages/blog/Blog'));
const Login = lazy(() => import('../../pages/auth/Login'));
const ResetPassword = lazy(() => import('../../pages/auth/ResetPassword'));
const ChangePassword = lazy(() => import('../../pages/auth/ChangePassword'));
const NotFound = lazy(() => import('../../pages/error/NotFound'));
const PaymentExpiry = lazy(() => import('../../pages/error/PaymentExpiry'));
const Upgrade = lazy(() => import('../../pages/error/Upgrade'));

// import Registration from '../pages/auth/Registration.js';
// import Privacy from '../pages/privacy/Privacy';
// import Terms from '../pages/terms/Terms';
// import Login from '../pages/auth/Login';
// import ResetPassword from '../pages/auth/ResetPassword';
// import NotFound from '../pages/error/NotFound';

const CategoriesMainPage = lazy(() => import('../../pages/categories/CategoriesMainPage'));
const Archive = lazy(() => import('../../pages/archive/Archive'));
const CategoryVideosPage = lazy(() => import('../../pages/categories/CategoryVideosPage'));
const PlayVideo = lazy(() => import('../../pages/playVideo/PlayVideo'));
const UpcomingLiveSessionAll = lazy(() => import('../../pages/live/UpcomingLiveSessionAll'));

// import CategoriesMainPage from '../pages/categories/CategoriesMainPage';
// import CategoryVideosPage from '../pages/categories/CategoryVideosPage';
// import PlayVideo from '../pages/playVideo/PlayVideo';

const Zoom = lazy(() => import('../../pages/zoom/ZoomComponent'));
const Feedback = lazy(() => import('../../pages/zoom/Feedback'));
const Vimeo = lazy(() => import('../../pages/vimeo/Vimeo'));

// import Zoom from '../pages/zoom/ZoomComponent';
// import Feedback from '../pages/zoom/Feedback';

const MyProfile = lazy(() => import('../../pages/myProfile/MyProfile'));

// import MyProfile from '../pages/myProfile/MyProfile';

const Plan = lazy(() => import('../../pages/payment/Plan'));
const Notes = lazy(() => import('../../pages/payment/Notes'));
const Payment = lazy(() => import('../../pages/payment/Payment'));
const PaymentUpgrade = lazy(() => import('../../pages/payment/PaymentUpgrade'));
const ThankYou = lazy(() => import('../../pages/payment/ThankYou'));
const Account = lazy(() => import('../../pages/payment/Account'));
const EmailValidate = lazy(() => import('../../pages/emailValidation/EmailValidate'));
const SuccesfullValidate = lazy(() => import('../../pages/emailValidation/SuccesfullValidate'));
const PSATTutoring = lazy(() => import('../../pages/landingPages/PSATTutoring'));
const SatMasterClassPro = lazy(() => import('../../pages/landingPages/SatMasterClassPro'));
const IBTutoring = lazy(() => import('../../pages/landingPages/IBTutoring'));


// import Plan from '../pages/payment/Plan';
// import Notes from '../pages/payment/Notes';
// import Payment from '../pages/payment/Payment';
// import ThankYou from '../pages/payment/ThankYou';

const HomeBeforeLogin = lazy(() => import('../../pages/home/HomeBeforeLogin'));
const HomeAfterLogin = lazy(() => import('../../pages/home/HomeAfterLogin'));

// import HomeBeforeLogin from '../pages/home/HomeBeforeLogin';
// import HomeAfterLogin from '../pages/home/HomeAfterLogin';

const Routes = ({ isAuthenticated }) => {
	//console.log(isAuthenticated);

	return (
		<Fragment>
			<Suspense
				fallback={
					<div>
						<BounceLoader />
					</div>
				}
				>
				<Switch onUpdate={() => window.scrollTo(0, 0)}>
					<Route exact path="/validate" component={EmailValidate} />
					<Route exact path="/successfullyValidate/:valTok" component={SuccesfullValidate} />
					<Route exact path="/" component={isAuthenticated ? HomeAfterLogin : HomeBeforeLogin} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Registration} />
					<Route exact path="/reset/:uniqueID" component={ResetPassword} />
					<PrivateRoute exact path="/categories" component={CategoriesMainPage} />
					<PrivateRoute exact path="/archive" component={Archive} />
					<PrivateRoute exact path="/categories/:catId" component={CategoryVideosPage} />
					<PrivateRoute exact path="/categories/:catId/:videoId" component={PlayVideo} />
					<PrivateRoute exact path="/plan/info" component={Notes} />
					<PrivateRoute exact path="/plan/choose" component={Plan} />
					<PrivateRoute exact path="/plan/payment/:planId" component={Payment} />
					<PrivateRoute exact path="/plan/payment-upgrade/:planId" component={PaymentUpgrade} />
					<PrivateRoute exact path="/plan/completed" component={ThankYou} />
					<PrivateRoute exact path="/live/:sessionId" component={Zoom} />
					<PrivateRoute exact path="/my-profile" component={MyProfile} />
					<PrivateRoute exact path="/feedback/:eventID" component={Feedback} />
					<PrivateRoute exact path="/account" component={Account} />
					<PrivateRoute exact path="/psatTutoring" component={PSATTutoring} />
					<PrivateRoute exact path="/satMasterClassPro" component={SatMasterClassPro} />
					<PrivateRoute exact path="/ibTutoring" component={IBTutoring} />
					<PrivateRoute exact path="/changePassword" component={ChangePassword} />
					<PrivateRoute exact path="/liveSessions" component={UpcomingLiveSessionAll} />
					{/*<PrivateRoute exact path="/readiness" component={MyCollegeReadiness} />*/}
					<Route exact path="/about" component={AboutUs} />
					<Route exacy path="/blog" component={Blog} />
					<Route exact path="/privacy" component={Privacy} />
					<Route exact path="/terms" component={Terms} />
					<PrivateRoute exact path="/expired" component={PaymentExpiry} />
					<PrivateRoute exact path="/upgrade/:eventPremiumLevel" component={Upgrade} />
					<PrivateRoute exact path="/vimeo" component={Vimeo} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Suspense>
		</Fragment>
	);
};

Routes.propTypes = {
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Routes);
