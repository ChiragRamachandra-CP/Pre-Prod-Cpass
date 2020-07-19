import React, { Fragment } from 'react';

const Testimonial = () => {
	return (
		<Fragment>
			<div className="stdnt-sy">
				<div className="container">
					<div className="student-says">
						<h2 className="new-class-heading">What Students Are Saying</h2>

						<div className="col-sm -6 col-md-4 what-stu-say">
							<div className="wss w_lst">
									<div className="left-img-c">
										<img src="./assets/images/testimonial1.jpg" alt="instructor" />
										<div>
											<h2 className="nme-text">Atthin Chandrashekar</h2>
											<p className="nme-text-small"><strong>High School Senior,</strong> Sreenidhi Int'l School<br/><strong>Founder,</strong> The Pandemic Academic</p>
											<p className="mc-md-txt" style={{opacity: '0.6'}}><strong>The Pandemic Academic</strong> is a think tank founded by Atthin that employs a multidisciplinary approach to understanding pandemics.</p>
										</div>
									</div>
									<p className="mc-md-txt">
									CollegePass has been immensely helpful throughout the college application process. 
									From helping me improve my ACT score to supporting me with my extracurricular activities, the team has been thorough and reliable. 
									I am grateful for the promptness and care the team puts in to ensure the best for their students.
									</p>
							</div>
						</div>

						<div className="col-sm-6 col-md-4 what-stu-say">
							<div className="wss w_2nd">
									<div className="left-img-c">
										<img src="./assets/images/testimonial3.jpg" alt="instructor" />
										<div>
											<h2 className="nme-text">Ansh Gupta</h2>
											<p className="nme-text-small"><strong>Incoming Junior, St. Columba's</strong><br/>Wharton Summer Program (2020)</p>
											<p className="mc-md-txt" style={{opacity: '0.6'}}>The Wharton Summer High School Programs are immersive experiences for students currently enrolled in grades 9–11.</p>
										</div>
									</div>
									<p className="mc-md-txt">
									Collegepass has been a guiding force in my college application profile building and SAT preparation for more than 6 months now. Apart from the fabulous recommendations of courses and their online events, the way they encourage discovering your own passion is exceptional. <br/>
									</p><br/>
							</div>
						</div>

						<div className="col-sm-6 col-md-4 what-stu-say">
							<div className="wss w_3rd">
									<div className="left-img-c">
										<img src="./assets/images/testimonial2.jpg" alt="instructor" />
										<div>
											<h2 className="nme-text">Leher Challuri</h2>
											<p className="nme-text-small"><strong>High School Senior,</strong> Sreenidhi Int'l School<br/>Founder, Biocentric</p>
											<p className="mc-md-txt" style={{opacity: '0.6'}}>Biocentric, A YouTube channel founded by Leher where he discusses all things biology!</p>
									
										</div>
									</div>
									<p className="mc-md-txt">
									The members of CollegePass provide students from around the world with expert feedback and advice to ensure that college applications are well-rounded and convey a meaningful story. They are also friendly and open-minded, considering the circumstances of specific students before advising. I am glad to be working with them!
									</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Testimonial;
