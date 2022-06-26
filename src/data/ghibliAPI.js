import axios from 'axios';

export default axios.create({
	baseURL: 'https://ghibliapi.herokuapp.com/',
	params: {
		// part: 'snippet',
		// key: process.env.REACT_APP_YOUTUBE_API_KEY
	}
})