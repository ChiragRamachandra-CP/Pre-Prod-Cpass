import React, { useState, useEffect, Fragment } from 'react';
import { ZoomMtg } from '@zoomus/websdk';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoggedInHeader from '../../components/header/AfterLoggedInHeader';
//import Footer from '../../footer/Footer';
import CheckUserAccess from '../../utils/checkUserAccess';
import $ from 'jquery';

import { APIstoreUserMoment, APIgetUserDetailByToken } from '../../config/API';
import { APIgetLiveSessionBySourceId } from '../../config/API';
import { APIgetZoomSignature } from '../../config/API';
import { APIstoreJoinedUser } from '../../config/API';
import { APIupdateEventSpentTime } from '../../config/API';

import './Zoom.css';
// import ZoomLive from './ZoomLive';

const ZoomComponent = ({ premiumLevel,accountTrial,match }) => {
    useEffect(() => {
        const storeUserMovement = async () => {
            //console.log(window.location.href);
            //console.log(new Date().toLocaleString());
            let body = {
                user_email: localStorage.user,
                page: [ { page: window.location.href }, { date: new Date().toLocaleString() } ]
            };
            try {
                const result = await axios.post(APIstoreUserMoment, body);
                //console.log(result);
            } catch (error) {
                //do nothing for
                //console.log(error);
            }
        };
        storeUserMovement();
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://source.zoom.us/1.7.7/lib/vendor/react.min.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://source.zoom.us/1.7.7/lib/vendor/react-dom.min.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://source.zoom.us/1.7.7/lib/vendor/react.min.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://source.zoom.us/1.7.7/lib/vendor/redux.min.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://source.zoom.us/1.7.7/lib/vendor/redux-thunk.min.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://source.zoom.us/1.7.7/lib/vendor/jquery.min.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://source.zoom.us/1.7.7/lib/vendor/lodash.min.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://source.zoom.us/zoom-meeting-1.7.7.min.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const style = document.createElement('link');
        style.href = "https://source.zoom.us/1.7.7/css/bootstrap.css";
        style.rel = 'stylesheet';
        style.type = 'text/css';
        document.head.appendChild(style);
      return () => {
          document.head.removeChild(style);
        }
      }, []);
      useEffect(() => {
        const style = document.createElement('link');
        style.href = "https://source.zoom.us/1.7.9/css/react-select.css";
        style.rel = 'stylesheet';
        style.type = 'text/css';
        document.head.appendChild(style);
      return () => {
          document.head.removeChild(style);
        }
      }, []);

    useEffect(() => {
        // APIgetUserDetailByToken
        const config = {
            headers: { Authorization: `Bearer ${localStorage.token}` }
        };

        const fetchData = async () => {
            try {
                const result = await axios.get(APIgetUserDetailByToken, config);
                //console.log(result);
                if (result.data.fullName !== null) {
                    setUserName(result.data.fullName);
                }
            } catch (error) {
                //do nothing for now
            }
        };
        fetchData();
    }, []);

    //console.log(match.params.sessionId);
    const [ formData, setFormData ] = useState({
        meetingLaunched: false,
        meetingNumber: match.params.sessionId,
        leaveUrl: `/feedback/${match.params.sessionId}`,

        userEmail: localStorage.user,
        passWord: '',
        role: 0,
        signature: null,
        EventID: 0
    });
    const [ signature, setSignature ] = useState('');
    const [ EventID, setEventID ] = useState();
    const [ ZoomPass, setZoomPass ] = useState();
    const [ eventPremiumlevel, seteventPremiumlevel ] = useState();
    const [ userName, setUserName ] = useState(localStorage.user);
    const [ sessionTitle, setSessionTitle ] = useState('Zoom Session');
    const { meetingLaunched, meetingNumber, leaveUrl, userEmail, role } = formData;
    const [redirctTo, setRedirctTo] = useState(false);

    /*const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };*/

    useEffect(
        () => {
            // code comes here
            ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.7/lib', '/av'); // CDN version default
            ZoomMtg.preLoadWasm();
            ZoomMtg.prepareJssdk();

            const getSessionDetails = async () => {
                const config = {
                    headers: { Authorization: `Bearer ${localStorage.token}` }
                };
                try {

                    let result = await axios.get(`${APIgetLiveSessionBySourceId}${meetingNumber}`, config);

                    //console.log(result.data.data[0].ID);

                    setSessionTitle(result.data.data[0].NAME);

                    setEventID(result.data.data[0].ID);

                    let Zoom_Pass = result.data.data[0].ZOOM_PASS ? result.data.data[0].ZOOM_PASS : '';

                    setZoomPass(Zoom_Pass); 

                    seteventPremiumlevel(result.data.data[0].PREMIUM_LEVEL); //Setting up the event premium Level

                } catch (error) {}
            };

            const fetchData = async () => {
                try {
                    let result = await axios.post(APIgetZoomSignature, {
                        apiKey: 'mMpcnXwPTW6TTVIk-QnOZQ',
                        apiSecret: '2HO57d9C3au8GytOlb1VJvFhmjU1Kgs6WQTn',
                        meetingNumber: meetingNumber,
                        role: 0
                    });

                    setSignature(result.data.signature);
                } catch (error) {
                    //do nothing for now
                }
            };
            fetchData();
            getSessionDetails();
        },
        [ meetingNumber ],
        [ EventID ],
        [ ZoomPass ]
    );

    useEffect(() => {
        // console.log('premiumLevel',premiumLevel);
        // console.log('eventPremiumlevel',eventPremiumlevel);
        // console.log('accountTrial',accountTrial);

        if(eventPremiumlevel){
            var allowed= false;

            if(accountTrial === true){

                allowed = true;

            }else{

                if(eventPremiumlevel === 1 ){

                    allowed = true;
                    
                }else if(eventPremiumlevel === 2 ){

                    if(premiumLevel === 'Silver' || premiumLevel === 'Gold' || premiumLevel === 'Platinum' ){
                        allowed = true;
                    }

                }else if(eventPremiumlevel === 3 ){

                    if( premiumLevel === 'Gold' || premiumLevel === 'Platinum' ){
                        allowed = true;
                    }

                }else if(eventPremiumlevel === 4 ){

                    if( premiumLevel === 'Platinum' ){
                        allowed = true;
                    }

                }else{
                    allowed= false;
                }
            }
            //console.log('allowed',allowed);
            if(allowed === false){
                 setRedirctTo(true);
            }
        }
        
    }, [accountTrial,premiumLevel,eventPremiumlevel]);

    const launchMeeting = () => {
        const apiKey = 'mMpcnXwPTW6TTVIk-QnOZQ';
        const meetConfig = {
            meetingNumber: meetingNumber,
            leaveUrl: leaveUrl,
            userName: userName,
            userEmail: userEmail,
            passWord: ZoomPass,
            role: role
        };
        setFormData({ ...formData, meetingLaunched: true });
        getSignature(meetConfig, apiKey, signature, EventID);
    };

    const storeEventUSer = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.token}`
                }
            };

            const bodySuccess = {
                user_email: localStorage.user,
                event_id: EventID
            };

            //console.log(bodySuccess);

            const res = await axios.post(APIstoreJoinedUser, bodySuccess, config);

            if (res.status !== 200) {
                //console.log('Looks like there was a problem. Status Code: ' + res.status);
                return;
            } else {
                //successfully entered to DB
                //console.log(res);
                //redirect to thank you page
                //setIsRedirect(true);
            }
        } catch (error) {}
    };

    const updateSpendTime = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.token}`
                }
            };

            const bodySuccess = {
                user_email: localStorage.user,
                event_id: EventID
            };

            //console.log(bodySuccess);

            const res = await axios.post(APIupdateEventSpentTime, bodySuccess, config);

            if (res.status !== 200) {
                //console.log('Looks like there was a problem. Status Code: ' + res.status);
                return;
            } else {
                //successfully entered to DB
                //console.log(res);
                //redirect to thank you page
                //setIsRedirect(true);
            }
        } catch (error) {}
    };

    const getSignature = (meetConfig, apiKey, signature) => {
        // lazy(() => import('./ZoomLive.js'));
        //
        ZoomMtg.init({
            leaveUrl: meetConfig.leaveUrl,
            isSupportAV: true,
            success: function() {
                ZoomMtg.join({
                    signature: signature,
                    apiKey: apiKey,
                    meetingNumber: meetConfig.meetingNumber, // required
                    userName: meetConfig.userName, // required
                    userEmail: meetConfig.userEmail, // Not used, required for Webinars
                    passWord: meetConfig.passWord, // If required; set by host
                    success() {
                        //console.log('join meeting success');
                        storeEventUSer();
                        //setInterval(updateSpendTime(), 50000);
                        setInterval(function() {
                            updateSpendTime();
                        }, 50000);
                    },
                    error(res) {
                        //console.log(res);
                    }
                });
            },
            error(res) {
                //console.log(res);
            }
        });
    };

    if(redirctTo){

        return <Redirect to="/upgrade" />

    }else{

        return (
            <Fragment>
                <CheckUserAccess />
                <div className="App">
                    {!meetingLaunched ? (
                        <Fragment>
                            <LoggedInHeader />

                            <div className="container">
                                <div className="row" style={{ width: '100%', marginTop: '150px' }}>
                                    <h2 className="new-class-heading livemheading" style={{ fontSize: '1.5rem' }}>
                                        {sessionTitle}
                                    </h2>
                                    <div className="livwidthm">
                                        <div className="tooltiplive" title="JOIN NOW !">
                                            <button onClick={launchMeeting} className="joinnowbtn" translate="no">
                                                <i className="fa fa-play-circle" aria-hidden="true" style={{textRendering: 'optimizeLegibility'}} />
                                            </button>
                                        </div>
                                        <h2 className="live-text-on">Join Live Session</h2>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    ) : (
                        <div id="zIndexMinimal" />
                    )}
                </div>
            </Fragment>
        );
    }
};

$(document).bind("contextmenu",function(e) {
    e.preventDefault();
   });
   
   $(document).keydown(function(e){
       if(e.which === 123){
          return false;
       }
   });

ZoomComponent.propTypes = {
    premiumLevel: PropTypes.string.isRequired,
    accountTrial: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    premiumLevel: state.auth.premiumLevel,
    accountTrial: state.auth.accountTrial
});

export default connect(mapStateToProps, null)(ZoomComponent);