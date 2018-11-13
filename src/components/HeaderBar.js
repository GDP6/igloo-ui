import React from 'react';
import './HeaderBar.css';
import logo from './logo.png';
import logo2 from './logo2.png';
import options from './options.png';

const HeaderBar = () => {
	return (
		<div className="banner">
			<div>
				<img className="leftLogo" src={logo2} alt="" />
			</div>
			<div>
				<img className="midLogo" src={logo} alt="" />
			</div>
			<div>
				<img className="options" src={options} alt="" />
			</div>
		</div>
	);
}

export default HeaderBar