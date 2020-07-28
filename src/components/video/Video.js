import React, { Fragment } from 'react';

const Video = () => {
	return (
		<Fragment>
            <section class="landingVideo">
                <div class="container upcmngls">
                    <h2 className="new-class-heading">CollegePass SAT Masterclass </h2>
                    <p className="heddesc" style={{marginBottom: '1.5rem', marginTop: '-1rem'}}>Class Preview</p>
                    <div className="upcmnglsv">
                        <video width="1200px" id="sing_vd" autoplay muted>
                            <source src="../../assets/images/Marketing.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
		</Fragment>
	);
};

export default Video;
