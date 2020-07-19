import React, { Fragment } from 'react';
import $ from 'jquery';
import queue from 'queue';
import * as topojson from 'topojson';
import * as d3 from 'd3';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/readliness.css';
import './MyCollegeReadiness.css';



const MyCollegeReadiness = () => {
		
	return (
		<Fragment>
			<div className="contact-page bg-white ptb100 readiness_D">
				<div className="container">
					<div className="row" style={{padding: '15px 15px', background: '#f7f7f7', margin: '40px 0px'}}>
						<div className="vertical-tab" role="tabpanel" id="show-menu-sec">
							<div className="col-md-6" style={{background: '#ffffff', paddingBottom: '37px', height: '850px', maxWidth: '100%', maxHeight: '100%', padding: '20px 0px 20px 0px'}}>
								<h3 style={{textAlign: 'left', marginLeft: '15px'}}>Your College Readiness</h3>
								<div id="half-donut"></div>
								<h3 style={{marginTop: '-70px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Room for<br/> Improvement</h3>

								<h3 style={{marginTop: '55px', marginBottom: '30px', textAlign: 'center', fontWeight: '600'}}>College List Health</h3>

								<ul className="nav nav-tabs" role="tablist">
									<li role="presentation" className=""><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab" className="active">College 1</a></li>
									<li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">College 2</a></li>
									<li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">College 3</a></li>
									<li role="presentation"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">College 4</a></li>
								</ul>
								
							</div>

							<div className="col-md-6" style={{background: '#000000', height: '850px', maxWidth: '100%', maxHeight: '100%', overflow: 'scroll', paddingLeft: '60px'}}>
								<div className="tab-content tabs">
									<div role="tabpanel" className="tab-pane fade in active show" id="Section1">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut1"></div>
										<h3 style={{marginTop: '-40px', color: '#ffffff', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>Extracirricular</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

											</ul>
										</div>
										<div className="col-md-12">
											<h5>GPA</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>Test Score</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section2">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut2"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section3">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut3"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section4">
										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut4"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>

										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container td-lst-cntr readiness_M">
				<div className="accordion-container">
					<ul className="td-lst expanded">
						<li className="td-lst-lesson set">

							
							
							<a><h2 className="td-lst-title">College 1</h2></a>
							
								
							<div className="bgcv td-vid readiness_b">
								<div className="tab-content tabs">
									<div role="tabpanel" className="tab-pane fade in active show" id="Section1">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut1"></div>
										<h3 style={{marginTop: '-40px', color: '#ffffff', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>Extracirricular</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

											</ul>
										</div>
										<div className="col-md-12">
											<h5>GPA</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>Test Score</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section2">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut2"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section3">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut3"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section4">
										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut4"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>

										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

						</li>
						<li className="td-lst-lesson set">
							
							<a>
								<h2 className="td-lst-title">College 2</h2>
							</a>

							<div className="bgcv td-vid readiness_b">
								<div className="tab-content tabs">
									<div role="tabpanel" className="tab-pane fade in active show" id="Section1">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut1"></div>
										<h3 style={{marginTop: '-40px', color: '#ffffff', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>Extracirricular</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

											</ul>
										</div>
										<div className="col-md-12">
											<h5>GPA</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>Test Score</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section2">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut2"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section3">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut3"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section4">
										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut4"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>

										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

						</li>
						<li className="td-lst-lesson set">
							
							<a>
								<h2 className="td-lst-title">College 3</h2>
							</a>

							<div className="bgcv td-vid readiness_b">
								<div className="tab-content tabs">
									<div role="tabpanel" className="tab-pane fade in active show" id="Section1">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut1"></div>
										<h3 style={{marginTop: '-40px', color: '#ffffff', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>Extracirricular</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

											</ul>
										</div>
										<div className="col-md-12">
											<h5>GPA</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>Test Score</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section2">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut2"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section3">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut3"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section4">
										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut4"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>

										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

						</li>
						<li className="td-lst-lesson set">
							
							<a>
								<h2 className="td-lst-title">College 4</h2>
							</a>

							<div className="bgcv td-vid readiness_b">
								<div className="tab-content tabs">
									<div role="tabpanel" className="tab-pane fade in active show" id="Section1">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut1"></div>
										<h3 style={{marginTop: '-40px', color: '#ffffff', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>Extracirricular</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

											</ul>
										</div>
										<div className="col-md-12">
											<h5>GPA</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>Test Score</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section2">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut2"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section3">

										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut3"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="Section4">
										<h5 style={{textAlign: 'left', marginLeft: '15px'}}>How Competitive are you for...</h5>
										<div id="half-donut4"></div>
										<h3 style={{marginTop: '-40px', marginBottom: '40px', textAlign: 'center', fontWeight: '600'}}>Admissions Profile Strength </h3>
										<div className="col-md-12">
											<h5>GOAL 1</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>

										<div className="col-md-12">
											<h5>GOAL 2</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
										<div className="col-md-12">
											<h5>GOAL 3</h5>
											<div className="frst">

											</div>

											<div className="sec">

											</div>
											<div className="sec">

											</div>
										</div>
										<div className="col-md-12 list">
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

						</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
};


        var dataset = [{
            label: "Abulia",
            count: 50,
            color: "#ce2a2a"
        }, {
            label: "Betelguese",
            count: 40,
            color: "#000000"
        }, {
            label: "Cantaloupe",
            count: 10,
            color: "#000000"
        }, ];

        var width = 300;
        var height = 180;
        var radius = Math.min(width, height) * 0.80;
        var thickness = 50;

        var color = d3.scaleBand(d3.schemeCategory20);

        var svg = d3
            .select("#half-donut")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width * 0.5 + "," + height * 1.0 + ")");

        var arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - thickness);

        var pie = d3.pie()
            .value(function(d) {
                return d.count;
            })
            .sort(null)
            .startAngle(-90 * (Math.PI / 180))
            .endAngle(90 * (Math.PI / 180))
            .padAngle(0.01);

        var chart = svg
            .selectAll("path")
            .data(pie(dataset))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", function(d, i) {
                return d.data.color;
            })
            .transition()
            .duration(1000)
            .attrTween("d", tweenPie)
            .ease();

        function tweenPie(b) {
            var i = d3.interpolate({
                    startAngle: -90 * (Math.PI / 180),
                    endAngle: -90 * (Math.PI / 180)
                },
                b
            );
            return function(t) {
                return arc(i(t));
            };
        }

        var dataset = [{
            label: "Abulia",
            count: 30,
            color: "#ce2a2a"
        }, {
            label: "Betelguese",
            count: 40,
            color: "#ffffff"
        }, {
            label: "Cantaloupe",
            count: 30,
            color: "#ffffff"
        }, ];

        var width = 300;
        var height = 180;
        var radius = Math.min(width, height) * 0.80;
        var thickness = 50;

        var color = d3.scaleOrdinal(d3.schemeCategory20);

        var svg = d3
            .select("#half-donut1")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width * 0.5 + "," + height * 1.0 + ")");

        var arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - thickness);

        var pie = d3.pie()
            .value(function(d) {
                return d.count;
            })
            .sort(null)
            .startAngle(-90 * (Math.PI / 180))
            .endAngle(90 * (Math.PI / 180))
            .padAngle(0.01);

        var chart = svg
            .selectAll("path")
            .data(pie(dataset))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", function(d, i) {
                return d.data.color;
            })
            .transition()
            .duration(1000)
            .attrTween("d", tweenPie)
            .ease();

        function tweenPiee(b) {
            var i = d3.interpolate({
                    startAngle: -90 * (Math.PI / 180),
                    endAngle: -90 * (Math.PI / 180)
                },
                b
            );
            return function(t) {
                return arc(i(t));
            };
        }

        var dataset = [{
            label: "Abulia",
            count: 30,
            color: "#ce2a2a"
        }, {
            label: "Betelguese",
            count: 40,
            color: "#ffffff"
        }, {
            label: "Cantaloupe",
            count: 30,
            color: "#ffffff"
        }, ];

        var width = 300;
        var height = 180;
        var radius = Math.min(width, height) * 0.80;
        var thickness = 50;

        var color = d3.scaleBand(d3.schemeCategory20);

        var svg = d3
            .select("#half-donut2")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width * 0.5 + "," + height * 1.0 + ")");

        var arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - thickness);

        var pie = d3.pie()
            .value(function(d) {
                return d.count;
            })
            .sort(null)
            .startAngle(-90 * (Math.PI / 180))
            .endAngle(90 * (Math.PI / 180))
            .padAngle(0.01);

        var chart = svg
            .selectAll("path")
            .data(pie(dataset))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", function(d, i) {
                return d.data.color;
            })
            .transition()
            .duration(1000)
            .attrTween("d", tweenPie)
            .ease();

        function tweenPie2(b) {
            var i = d3.interpolate({
                    startAngle: -90 * (Math.PI / 180),
                    endAngle: -90 * (Math.PI / 180)
                },
                b
            );
            return function(t) {
                return arc(i(t));
            };
        }

        var dataset = [{
            label: "Abulia",
            count: 30,
            color: "#ce2a2a"
        }, {
            label: "Betelguese",
            count: 40,
            color: "#ffffff"
        }, {
            label: "Cantaloupe",
            count: 30,
            color: "#ffffff"
        }, ];

        var width = 300;
        var height = 180;
        var radius = Math.min(width, height) * 0.80;
        var thickness = 50;

        var color = d3.scaleBand(d3.schemeCategory20);

        var svg = d3
            .select("#half-donut3")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width * 0.5 + "," + height * 1.0 + ")");

        var arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - thickness);

        var pie = d3.pie()
            .value(function(d) {
                return d.count;
            })
            .sort(null)
            .startAngle(-90 * (Math.PI / 180))
            .endAngle(90 * (Math.PI / 180))
            .padAngle(0.01);

        var chart = svg
            .selectAll("path")
            .data(pie(dataset))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", function(d, i) {
                return d.data.color;
            })
            .transition()
            .duration(1000)
            .attrTween("d", tweenPie)
            .ease();

        function tweenPie3(b) {
            var i = d3.interpolate({
                    startAngle: -90 * (Math.PI / 180),
                    endAngle: -90 * (Math.PI / 180)
                },
                b
            );
            return function(t) {
                return arc(i(t));
            };
        }

        var dataset = [{
                label: "Abulia",
                count: 30,
                color: "#ce2a2a"
            }, {
                label: "Betelguese",
                count: 40,
                color: "#ffffff"
            }, {
                label: "Cantaloupe",
                count: 30,
                color: "#ffffff"
            },

        ];

        var width = 300;
        var height = 180;
        var radius = Math.min(width, height) * 0.80;
        var thickness = 20;

        var color = d3.scaleBand(d3.schemeCategory20);

        var svg = d3
            .select("#half-donut4")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width * 0.5 + "," + height * 1.0 + ")");

        var arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - thickness);

        var pie = d3.pie()
            .value(function(d) {
                return d.count;
            })
            .sort(null)
            .startAngle(-90 * (Math.PI / 180))
            .endAngle(90 * (Math.PI / 180))
            .padAngle(0.01);

        var chart = svg
            .selectAll("path")
            .data(pie(dataset))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", function(d, i) {
                return d.data.color;
            })
            .transition()
            .duration(1000)
            .attrTween("d", tweenPie)
            .ease();

        function tweenPie4(b) {
            var i = d3.interpolate({
                    startAngle: -90 * (Math.PI / 180),
                    endAngle: -90 * (Math.PI / 180)
                },
                b
            );
            return function(t) {
                return arc(i(t));
            };
        }


        $(document).ready(function() {

            $('nav').removeClass('hide-top');

            $(window).scroll(function() {

                var scroll = $(window).scrollTop();

                //console.log('scroll value', scroll);

                var objectSelect = $('#show-menu-sec');

                var objectPosition = objectSelect.offset().top;

                //console.log('object value', objectPosition);

                if (scroll > objectPosition) {
                    $('nav').addClass('hide-top');
                } else {
                    $('nav').removeClass('hide-top');
                }
            });
        });

        $(document).ready(function() {
          $(".set > a").on("click", function() {
            if ($(this).hasClass("active")) {
              $(this).removeClass("active");
              $(this)
                .siblings(".td-vid")
                .slideUp(200);
              $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            } else {
              $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
              $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
              $(".set > a").removeClass("active");
              $(this).addClass("active");
              $(".content").slideUp(200);
              $(this)
                .siblings(".td-vid")
                .slideDown(200);
            }
          });
        });


export default MyCollegeReadiness;