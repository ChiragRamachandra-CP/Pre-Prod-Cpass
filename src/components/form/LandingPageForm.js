import React, { Fragment } from 'react';

const LandingPageForm = () => {
	return (
		<Fragment>
            <section className="bookingformmain">
                <div className="container bkngsec">
                    <div className="col-md-12">
                        <p style={{textAlign: 'center', color:'#000', opacity: '0.6', marginTop: '0.8rem', marginBottom: '0.5rem'}}>The CollegePass SAT Masterclass Pro Experience</p>

                        <h2 className="new-class-heading" style={{marginTop: '-1.5rem!important', marginBottom: '2.0rem!important'}}>Book Your Free 30 Minute Trial Class</h2>
                        <div className="upcmnglsv">
                            <div className="bookform">
                                <form>
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label for="first">Full Name</label>
                                    <input type="text" className="form-control" placeholder="" id="first" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label for="last">Email</label>
                                    <input type="email" class="form-control" placeholder="" id="Email" />
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label for="company">Mobile</label>
                                    <input type="tel" className="form-control" placeholder="" id="phone" />
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="form-group">
                                    <label for="phone">School</label>
                                    <input type="text" className="form-control" id="school" placeholder="" />
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-md-12">

                                    <div className="form-group">
                                    <label for="email">City</label>
                                    <input type="text" className="form-control form-control-danger" id="city" placeholder="" />
                                    </div>
                                </div>
                                </div>

                                <button type="submit" className="btn btn-danger booksbmt">Submit</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
		</Fragment>
	);
};

export default LandingPageForm;
