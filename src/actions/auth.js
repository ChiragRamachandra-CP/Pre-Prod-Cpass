import axios from 'axios';
import { succReg } from '../config/success';
import { errorEmailPass } from '../config/error';
//import { errorVerifiyEmail } from '../config/error';
import { errorSocial } from '../config/error';

import { APIgetUserDetailByToken } from '../config/API';
import { APIregister } from '../config/API';
import { APIlogin } from '../config/API';
import { APIthirdPartyUserAuthentication } from '../config/API';
import { APIgetUserAccessLevel } from '../config/API';


import {
    //REGISTER_SUCCESS,
    REGISTER_FAILURE,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    CLEAR_PROFILE,
    SET_ACCESS,
    CLEAR_ACCESS
} from './types';
import { setAlert } from './alert';

//Load User
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        //TOKEN is Present in local storage

        try {
            // call the authentication service to get user email
            const config = {
                headers: { Authorization: `Bearer ${localStorage.token}` }
            };
            const result = await axios.get(APIgetUserDetailByToken, config);

            if (result.data.success === 0) {
                dispatch({
                    type: AUTH_ERROR
                });
            } else {
                let res = {
                    isAuthenticated: true,
                    loading: false,
                    email: result.email
                };
                dispatch({
                    type: USER_LOADED,
                    payload: res
                });
            }
        } catch (err) {
            // if any error occurs while performing axios request

            //console.log(err);
            dispatch({
                type: AUTH_ERROR
            });
        }

        // if user is not present in redux
    } else {
        //TOKEN is NOT Present in local storage
        dispatch({
            type: AUTH_ERROR
        });
    }
};

//REGISTER USER
export const register = (email, password) => async (dispatch) => {
    //console.log(email);

    //console.log(password);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post(
            APIregister,
            {
                EMAIL: email,
                PASSWORD: password
            },
            config
        );

        // dispatch({
        //     type: REGISTER_SUCCESS,
        //     payload: res.data
        // });
        dispatch(loadAccess());

        localStorage.setItem('user', res.data.email);
        dispatch(setAlert(succReg, 'info'));
    
        window.location = "/validate";

    } catch (err) {
        dispatch(setAlert(errorEmailPass, 'danger'));
        // const errors = err.response.data;
        // if (errors) {
        //  // errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        //  dispatch(setAlert(errors.message, 'danger'));
        // }
        dispatch({
            type: REGISTER_FAILURE
        });
    }
};

//LOGIN USER
export const login = (email, password) => async (dispatch) => {
    //console.log(email);

    //console.log(password);
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post(
            APIlogin,
            {
                EMAIL: email,
                PASSWORD: password
            },
            config
        );
        //console.log(res);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadAccess());
    } catch (err) {
        //console.log(err.response);
       
        // const errors = err.response.data;
        // console.log(errors);
        // if (errors) {
        //  errors.forEach((error) => dispatch(setAlert(error, 'danger')));
        //  dispatch(setAlert(errors.message, 'danger'));
        // }

        if(err.response.status === 307){

            localStorage.setItem('user', err.response.data.email);
            //dispatch(setAlert(errorVerifiyEmail, 'danger'));
        
            window.location = "/validate";

        }else{
            dispatch(setAlert(errorEmailPass, 'danger'));
            dispatch({
                type: LOGIN_FAILURE
            });
        }

    }
};

//Social login
export const socialLogin = (email, source) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post(
            APIthirdPartyUserAuthentication,
            {
                EMAIL: email,
                SOURCE: source
            },
            config
        );
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadAccess());
    } catch (err) {
        //const errors = err;
        dispatch(setAlert(errorSocial, 'danger'));
        // console.log(errors);
        // if (errors) {
        //  errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        // }

        dispatch({
            type: LOGIN_FAILURE
        });
    }
};

//LOGOUT

export const logout = () => (dispatch) => {
    dispatch({
        type: CLEAR_PROFILE
    });
    dispatch({
        type: LOGOUT
    });

    window.location.reload(false);
    window.location.replace('/');
};

//Load User
export const loadAccess = () => async (dispatch) => {
    if (localStorage.user && localStorage.token) {
        //TOKEN is Present in local storage

        try {
            // call the authentication service to get user email
            const config = {
                headers: { Authorization: `Bearer ${localStorage.token}` }
            };
            const result = await axios.get(
                `${APIgetUserAccessLevel}${localStorage.user}`,
                config
            );

            //console.log(result);
            let res = {
                premiumLevel: result.data.premium_level,
                accountTrial: result.data.UserFreeTrailStatus,
                profileCompleted: result.data.profileCompleted,
                plan_type:result.data.plan_type,
                subscriptionId:result.data.subscriptionId,
                subscription_status:result.data.subscription_status,
                expiry_date:result.data.expiry_date,
                mandatoryFieldStatus:result.data.mandatoryFieldStatus
            };
            dispatch({
                type: SET_ACCESS,
                payload: res
            });
        } catch (err) {
            // if any error occurs while performing axios request

            //console.log(err);
            dispatch({
                type: CLEAR_ACCESS
            });
        }

        // if user is not present in redux
    } else {
        //TOKEN is NOT Present in local storage
        dispatch({
            type: CLEAR_ACCESS
        });
    }
};