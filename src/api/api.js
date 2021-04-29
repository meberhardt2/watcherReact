import axios from 'axios';

const api_url = '//'+window.location.hostname+':2006';

/**************************************************************************************/
class API {

	/********************************************/
	static search(data){
		return axios({
			method: 'POST',
			url: api_url+'/api/search',
			data: data
		})
		.then(function (response){
			return response.data;
		});
	}
	/********************************************/


	/********************************************/
	static trackIt(data){
		return axios({
			method: 'POST',
			url: api_url+'/api/trackit',
			data: data
		})
		.then(function (response){
			return response.data;
		});
	}
	/********************************************/
}
/**************************************************************************************/

export default API;