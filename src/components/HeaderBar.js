import React from 'react';
import './HeaderBar.css';
import logo from './logo.png';
import logo2 from './logo2.png';
import options from './options.png';

const HeaderBar = ({panelOpen}) => {
	return (
		<div className="banner">
			<div>
				<a href="https://igloo.energy">
					<img className="leftLogo" src={logo2} alt="" />
				</a>
			</div>
			<div>
				<img className="midLogo" src={logo} alt="" />
			</div>
			<div>
				<img 
					className="options" 
					src={options} 
					alt="" 
					onClick={panelOpen}
				/>
			</div>
		</div>
	);
}

export default HeaderBar