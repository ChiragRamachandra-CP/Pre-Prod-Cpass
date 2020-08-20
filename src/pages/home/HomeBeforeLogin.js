import React, {Fragment, Suspense} from "react";
import "./HomeBeforeLogin.css";
// import axios from 'axios';

//import Header from '../../header/BeforeLoggedInHeader';
import BounceLoader from "../../utils/Loader";
import ScrollHandler from "../../components/scrollHandler/ScrollHandler";

// import Slider from '../../slider/Slider';
// import Content from '../../marketBanner/Content';
//import UpcomingLiveSession from '../../live/UpcomingLiveSession';
//import CategoryHorizontalSection from '../../categoryHorizontalSection/CategoryHorizontalSection';
//import Testimonial from '../../testimonial/Testimonial';
// import Faq from '../../feedback/Faq';
// import Footer from '../../footer/Footer';

const Header = React.lazy(() =>
	import("./../../components/header/BeforeLoggedInHeader")
);
const Slider = React.lazy(() => import("./../../components/slider/Slider"));
const Content = React.lazy(() =>
	import("./../../components/marketBanner/Content")
);
const UpcomingLiveSession = React.lazy(() =>
	import("./../../components/live/UpcomingLiveSession")
);
const UpcomingLiveClass = React.lazy(() =>
	import("./../../components/live/UpcomingLiveClasses")
);
const CategoryHorizontalSection = React.lazy(() =>
	import(
		"./../../components/categoryHorizontalSection/CategoryHorizontalSection"
	)
);
const Testimonial = React.lazy(() =>
	import("./../../components/testimonial/Testimonial")
);
const Faq = React.lazy(() => import("./../../components/feedback/Faq"));
const Footer = React.lazy(() => import("./../../components/footer/Footer"));

const HomeBeforeLogin = () => {
	return (
		<Fragment>
			<div className={"text-center"}>
				<Suspense fallback={<BounceLoader />}>
					<ScrollHandler></ScrollHandler>
					<Header />
					<Slider />
					<Content />
					<UpcomingLiveSession />
					<UpcomingLiveClass />
					<CategoryHorizontalSection />
					<Testimonial />
					<Faq />
					<Footer />
				</Suspense>
			</div>
		</Fragment>
	);
};

export default HomeBeforeLogin;
