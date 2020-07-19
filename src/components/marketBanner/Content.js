import React, { Fragment } from 'react';

const Content = () => {
	return (
		<Fragment>
			<div className="Content">
				<div className="site-wrap page-id-2">
					<section className="mob-h-m">
						<div className="container">
							<h2 className="new-class-heading">Learn from the best in the world.</h2>
							<a href="# " className="mob-h-m-btn">
								Get Started
							</a>
						</div>
					</section>

					<section className="client" id="show-menu-sec">
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<div className="cls_top">
										<h2 className="">100+ Live Online Sessions </h2>
										<p className="">From College Admission Advisors</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="cls_top">
										<h2 className="">80+ Hours of Tutoring</h2>
										<p className="">SAT/IELTS Masterclasses</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="cls_top">
										<h2 className="">100+ Video Lessons</h2>
										<p className="">From Ivy League College Advisors</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</Fragment>
	);
};


export default Content;

