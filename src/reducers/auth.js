import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    AUTH_ERROR,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_LOADED,
    SET_ACCESS,
    CLEAR_ACCESS
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: localStorage.getItem('user'),
    premiumLevel: 'Basic',
    accountTrial: true,
    profileCompleted: false,
    subscriptionId:null,
    subscription_status:null,
    plan_type:null,
    expiry_date:null,
    mandatory_field_status:false
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_ACCESS:
            return {
                ...state,
                premiumLevel: payload.premiumLevel,
                accountTrial: payload.accountTrial,
                profileCompleted: payload.profileCompleted,
                subscriptionId:payload.subscriptionId,
                subscription_status:payload.subscription_status,
                plan_type:payload.plan_type,
                expiry_date:payload.expiry_date,
                mandatory_field_status:payload.mandatoryFieldStatus
            };
        case CLEAR_ACCESS:
            return {
                ...state,
                premiumLevel: 'Basic',
                accountTrial: true,
                profileCompleted: false
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: payload.isAuthenticated,
                loading: payload.loading,
                user: localStorage.getItem('user')
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('user', payload.email);
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false,
                user: payload.email
            };
        case REGISTER_FAILURE:
        case AUTH_ERROR:
        case LOGIN_FAILURE:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                premiumLevel: 'Basic',
                accountTrial: true,
                profileCompleted: false,
                subscriptionId:null,
                subscription_status:null,
                plan_type:null,
                expiry_date:null
            };
        default:
            return state;
    }
}