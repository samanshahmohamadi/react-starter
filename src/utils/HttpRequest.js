/**
 * Created by saman on 3/12/17.
 */
import axios from 'axios';


export default class HttpRequest {
	constructor () {
		this.instance = axios.create()
	}

	get (url, params) {
		return this.instance.get(url, {
			params: params
		})
			.then(payload => {
				return payload
			})
			.catch(err => {
				throw new Error(err.response.status)
			})
	}

	post (url, params, token) {
		return this.instance.post(url, params)
	}

}