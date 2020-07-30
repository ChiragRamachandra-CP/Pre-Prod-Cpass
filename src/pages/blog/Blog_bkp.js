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
			<div className="site-wrap" style={{marginTop: "120px"}}>
				<h1
					style={{
						textAlign: "center",
						color: "#fff",
						padding: "60px 0px",
						fontSize: "30px",
						fontWeight: "600",
					}}
				>
					Coming Soon
				</h1>
				{/*<section className="blogmain">
                    <div className="container">
                        <div className="singleBlog blogspacing">
                            <div className="col-md-12 blogsecdev">
                                <div className="col-md-8">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="doubleBlog blogspacing">
                        <p className="latesthdng">Latest</p>

                            <div className="col-md-6 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                            <div className="col-md-6 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="tripleBlog blogspacing">
                        <p className="latesthdng">Latest</p>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="tripleBlog blogspacing">
                        <p className="latesthdng" style={{visibility: 'hidden'}}>Latest</p>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="tripleBlog blogspacing">
                        <p className="latesthdng" style={{visibility: 'hidden'}}>Latest</p>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="tripleBlog blogspacing">
                        <p className="latesthdng" style={{visibility: 'hidden'}}>Latest</p>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                            <div className="col-md-4 blogsecdev">
                                    <div className="blgimg">
                                    <img
                                    alt="blog Banner"
                                    src="../../assets/images/8.jpg"
                                    className="blgimgbnnr"
                                />
                                </div>
                                    <div className="blgcont">
                                        <h2 className="blghdng">Machine Learning for a Better Developer Experience</h2>
                                        <p className="blgdesc">By Stanislav Kirdey, William High</p>
                                    </div>
                                    <div className="blgftersec">
                                    <p className="blglgo"><img src="https://collegepass-logos.s3.ap-south-1.amazonaws.com/holo.png" /></p>
                                    <p className="blglgotxt"><span className="blgtxt1">CollegePass Blog</span><br/>
                                    <span className="blgtxt2">July 25 .6 min read</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
    </section>*/}
			</div>
			<Footer />
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
