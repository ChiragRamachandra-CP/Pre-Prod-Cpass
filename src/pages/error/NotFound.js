import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Error.css';


const NotFound = () => {
	return (
		<Fragment>
			<div className="site-wrap">
				<section className="fzfm">
					<div className="container">
						<div className="row">
							<div>
								<span className="thspg">
									<h4 className="thspgh">this page does not exist</h4>
									<h1 className="forerr">404 Error</h1><br/>
									<p className="pratxtl">did you know...</p>
									<h3 className="nxttxt" style={{ color: '#fff', opacity: '0.9' }}>
										Picasso's first word was "pencil"
									</h3>
									<p className="pratxt">
										Picasso's first word was "piz," short of "lápiz" the Spanish word for "pencil."
										His father Ruiz, an artist and art professor, gave him a formal education in art
										starting from the age of 7. By 13, Ruiz vowed to give up painting as he felt
										that Pablo had surpassed him.
									</p>
									<p className="pratxtw">
										WE HOPE YOU LEARNED SOMETHING NEW TODAY... EVEN IF IT WASN'T THE THING YOU
										PLANNED TO LEARN.
									</p>
									<div className="learnmr">
										<Link to="/">Go to Home Page</Link>
									</div>
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default NotFound;
