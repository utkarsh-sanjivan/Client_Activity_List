import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:9000/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export { instance as default };