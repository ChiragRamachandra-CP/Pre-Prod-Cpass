import axios from 'axios';

const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common['user-token'] = token;
		localStorage.setItem('token', token);
	} else {
		delete axios.defaults.headers.common['user-token'];
		localStorage.removeItem('token');
	}
};

//headers: { Authorization: `Bearer ${localStorage.token}` }

export default setAuthToken;
