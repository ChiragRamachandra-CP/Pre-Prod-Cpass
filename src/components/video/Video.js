import React, { Fragment } from 'react';

const Video = ({landingVideo}) => {

    let landingVideoComponent = (
        <video width="1200px" id="sing_vd" autoplay muted>
            <source src="../../assets/images/Marketing.mp4" type="video/mp4" />
        </video>
    );

    let videoTextComponent = '';

    if (landingVideo === "SAT_VID") {
		landingVideoComponent = (
			<iframe
                src="https://player.vimeo.com/video/408877583"
                width="1200"
                height="564"
                frameBorder="0"
                id="sing_vd"
                allow="autoplay"
                title="video"
                allowFullScreen
            />
        );

        videoTextComponent = 
        <div className="vidtext">
            <h2 className="new-class-heading">SAT Masterclass</h2>
            <p className="heddesc" style={{marginBottom: '1.5rem', marginTop: '-1rem'}}>A Preview</p>
        </div>
    }
    
    if (landingVideo === "IB_VID") {
			landingVideoComponent = (
                <iframe
                    src="https://player.vimeo.com/video/409699040"
                    width="1200"
                    height="564"
                    frameBorder="0"
                    id="sing_vd"
                    allow="autoplay"
                    title="video"
                    allowFullScreen
                />
        );
        videoTextComponent = 
        <div className="vidtext">
            <h2 className="new-class-heading">CollegePass - Your Personal College Coach</h2>
            <p className="heddesc" style={{marginBottom: '1.5rem', marginTop: '-1rem'}}>A Preview</p>
        </div>
    }
    
    if (landingVideo === "COLLEGE_ADMISSION_VID") {
		landingVideoComponent = (
                <iframe
                    src="https://player.vimeo.com/video/409699040"
                    width="1200"
                    height="564"
                    frameBorder="0"
                    id="sing_vd"
                    allow="autoplay"
                    title="video"
                    allowFullScreen
                />
        );
        videoTextComponent = 
        <div className="vidtext">
            <h2 className="new-class-heading">CollegePass Admission Advising </h2>
            <p className="heddesc" style={{marginBottom: '1.5rem', marginTop: '-1rem'}}>A Preview</p>
        </div>
	}



	return (
		<Fragment>
            <section class="landingVideo">
                <div class="container upcmngls">
                    {videoTextComponent}
                    <div className="upcmnglsv">
                        {landingVideoComponent}
                    </div>
                </div>
            </section>
		</Fragment>
	);
};

export default Video;
