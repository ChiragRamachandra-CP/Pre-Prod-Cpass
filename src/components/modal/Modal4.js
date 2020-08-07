import React, { Fragment } from 'react';

const Modal4 = () => {

	return (
		<Fragment>
            <div className="wrapmodal4">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="modal-4">
            Modal 4
            </button>
          </div>
           
          <div className="modal fade modal-4" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            
          <div className="">
          <div className="userdm">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="modalheadingfa">User Details</h4>
            </div>
           
            <div className="modal-body">
              <div className="body-message">
              <form>
              <div className="col-md-6">
                  <div className="">
                      <div className="col align-self-end">
                          <label htmlFor="email" className="txt-i">
                              First Name
                          </label>
                      </div>
                      <div className="col-12">
                          <input
                              name="fname"
                              type="text"
                              className="fit"
                              id="fname"
                          />
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="">
                      <div className="col align-self-end">
                          <label htmlFor="password" className="txt-i">
                              Last Name
                          </label>
                      </div>
                      <div className="col-12">
                          <input
                              name="lname"
                              type="text"
                              className="fit"
                              id="lname"
                          />
                      </div>
                  </div>
                </div>
                <div className="col-md-6">
                                    <div className="">
                                        <div className="col align-self-end">
                                            <label htmlFor="password" className="txt-i">
                                                Phone
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                name="phone"
                                                type="tel"
                                                className="fit"
                                                id="phone"
                                            />
                                        </div>
                                    </div>
                </div>
                <div className="col-md-6">
                                    <div className="">
                                        <div className="col align-self-end">
                                            <label htmlFor="password" className="txt-i">
                                                Grade
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                name="phone"
                                                type="tel"
                                                className="fit"
                                                id="phone"
                                            />
                                        </div>
                                    </div>
                </div>
                <div className="col-md-6">
                                    <div className="">
                                        <div className="col align-self-end">
                                            <label htmlFor="password" className="txt-i">
                                                Choice of Country
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                name="phone"
                                                type="tel"
                                                className="fit"
                                                id="phone"
                                            />
                                        </div>
                                    </div>
                </div>
                <div className="col-md-6">
                                    <div className="">
                                        <div className="col align-self-end">
                                            <label htmlFor="password" className="txt-i">
                                                Choice of Career
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                name="phone"
                                                type="tel"
                                                className="fit"
                                                id="phone"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="lgn-btn" type="submit">
                                    Submit
                                </button>
                </form>
              </div>
            </div>
          
          </div>
          
        </div>
            
          </div>
		</Fragment>
	);
};

export default Modal4;