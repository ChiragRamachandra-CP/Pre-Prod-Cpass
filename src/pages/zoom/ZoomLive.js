// import { ZoomMtg } from '@zoomus/websdk';
// import axios from 'axios';

// const ZoomLive = async () => {
// 	ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.7/lib', '/av'); // CDN version default
// 	//await ZoomMtg.setZoomJSLib('http://localhost:3000/node_modules/@zoomus/websdk/dist/lib', '/av');
// 	//ZoomMtg.setZoomJSLib('../../../../node_modules/@zoomus/websdk/dist/lib', '/av');

// 	ZoomMtg.preLoadWasm();
// 	ZoomMtg.prepareJssdk();

// 	// var signatureEndpoint = 'http://localhost:4000';
// 	var apiKey = 'mMpcnXwPTW6TTVIk-QnOZQ';
// 	var meetingNumber = 82291137242;
// 	var role = 1;
// 	var leaveUrl = 'http://localhost:3000';
// 	var userName = 'a2';
// 	var userEmail = 'a2@a.com';
// 	var passWord = '';

// 	// const config = {
// 	// 	headers: { Authorization: `Bearer ${localStorage.token}` },
// 	// 	body: {
// 	// 		apiKey: 'xymMpcnXwPTW6TTVIk-QnOZQz',
// 	// 		apiSecret: '2HO57d9C3au8GytOlb1VJvFhmjU1Kgs6WQTn',
// 	// 		meetingNumber: '82291137242',
// 	// 		role: 0
// 	// 	}
// 	// };
// 	//const result = await axios.post('https://api.collegepass.org/api/v1/events/getZoomSignature/', config);

// 	let result = await axios.post('https://api.collegepass.org/api/v1/events/getZoomSignature/', {
// 		apiKey: 'mMpcnXwPTW6TTVIk-QnOZQ',
// 		apiSecret: '2HO57d9C3au8GytOlb1VJvFhmjU1Kgs6WQTn',
// 		meetingNumber: '82291137242',
// 		role: 0
// 	});

// 	let signature = result.data.signature;

// 	console.log('result from signature' + result.data.signature);

// 	ZoomMtg.init({
// 		leaveUrl: leaveUrl,
// 		isSupportAV: true,
// 		success: (success) => {
// 			console.log(success);

// 			ZoomMtg.join({
// 				signature: signature,
// 				meetingNumber: meetingNumber,
// 				userName: userName,
// 				apiKey: 'mMpcnXwPTW6TTVIk-QnOZQ',
// 				userEmail: userEmail,
// 				passWord: passWord,
// 				success: (success) => {
// 					console.log(success);
// 				},
// 				error: (error) => {
// 					console.log(error);
// 				}
// 			});
// 		},
// 		error: (error) => {
// 			console.log(error);
// 		}
// 	});
// };

// export default ZoomLive;
