import React, { Fragment } from 'react';

const Faq = () => {
	return (
		<Fragment>
			<div className="container faq">
				<h2 className="new-class-heading">Frequently asked questions</h2>
				<div className="faqfixed">
					<div className="panel-group" id="accordion">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<p
										className="accordion-toggle collapsed"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapse1"
									>
										What is CollegePass? <i className="fa fa-chevron-down" aria-hidden="true" />
									</p>
								</h4>
							</div>
							<div id="collapse1" className="panel-collapse collapse">
								<div className="panel-body">
									<p>
										CollegePass has been founded to help students and parents access high quality, reliable college advice and test preparation at the click of a button.
										CollegePass has been founded to help students and parents access high quality,
										reliable college advice and test preparation at the click of a button.
									</p>
									<p className="free-cunsultation">
										<a
											href="https://www.calendly.com/collegepass"
											target="_blank"
											rel="noopener noreferrer"
										>
											Book a Free CollegePass Consultation.
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="panel-group" id="accordion">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<p
										className="accordion-toggle collapsed"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapse2"
									>
										Does CollegePass prepare students for the SAT or PSAT? <i className="fa fa-chevron-down" aria-hidden="true"></i>
										Does CollegePass prepare students for the SAT or PSAT?{' '}
									</p>
								</h4>
							</div>
							<div id="collapse2" className="panel-collapse collapse">
								<div className="panel-body">
									<p>
										CollegePass offers PSAT & SAT Preparation. Students can sign up for SAT/PSAT
										Masterclass Livestream or SAT Masterclass Pro. All CollegePass Classes are
										taught by Internationally Experienced, Expert Tutors.
									</p>
									<p className="free-cunsultation">
										<a
											href="https://www.calendly.com/collegepass"
											target="_blank"
											rel="noopener noreferrer"
										>
											Book a Free SAT/PSAT Consultation.
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="panel-group" id="accordion">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<p
										className="accordion-toggle collapsed"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapse3"
									>
										Does CollegePass prepare students for IELTS?{' '}
										<i className="fa fa-chevron-down" aria-hidden="true" />
									</p>
								</h4>
							</div>
							<div id="collapse3" className="panel-collapse collapse">
								<div className="panel-body">
									<p>
										CollegePass offers IELTS Preparation. Students can sign up for IELTS Masterclass
										Livestream. All CollegePass Classes are taught by Internationally Experienced,
										Expert Tutors.
									</p>
									<p className="free-cunsultation">
										<a
											href="https://www.calendly.com/collegepass"
											target="_blank"
											rel="noopener noreferrer"
										>
											Book a Free IELTS Consultation.
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="panel-group" id="accordion">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h4 className="panel-title">
									<p
										className="accordion-toggle collapsed"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapse4"
									>
										Does CollegePass offer College Admission Advice?{' '}
										<i className="fa fa-chevron-down" aria-hidden="true" />
									</p>
								</h4>
							</div>
							<div id="collapse4" className="panel-collapse collapse">
								<div className="panel-body">
									<p>
										Students & Parents can learn about applying and getting admitted to the World's
										Best Colleges via CollegePass Live Sessions and Video Lessons round the year.
										CollegePass hosts 100+ Live Online Session with Expert College Advisors.<br />
										<br />
										Students applying to the World's Most Selective Universities can also sign up
										Personalised College Coaching by Expert College Coaches.
									</p>
									<p className="free-cunsultation">
										<a
											href="https://www.calendly.com/collegepass"
											target="_blank"
											rel="noopener noreferrer"
										>
											Book a Free Personal Consultation.
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Faq;
