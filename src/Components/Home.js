import React from 'react';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<em>
				<h1>Welcome to GhibliApp</h1>
			</em>
			<h3>App Creator</h3>
			<a href='https://github.com/TaryneLeach'>
				<img
					className='my-photo'
					src='https://64.media.tumblr.com/28c907892ece7e8b0085bb8143134ccb/1e007ec1be33d237-cf/s1280x1920/50ea2ce6fad32bfedbe4c15e6a302f7a20fdf402.jpg'
					alt=''
				/>
			</a>
			<p>
				Brooklyn native learning full stack web development at the Pursuit
				Fellowship!
			</p>
		</div>
	);
};

export default Home;
