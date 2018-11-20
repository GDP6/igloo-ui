import React from 'react';
import './HeaderBar.css';
import logo from './logo.png';
import logo2 from './logo2.png';
import options from './options.png';

const HeaderBar = ({panelOpen, isOpen}) => {
	return (
		<div>
			<div id="banner">
				<div>
					<a href="https://igloo.energy">
						<img className="leftLogo grow" src={logo2} alt="" />
					</a>
				</div>
				<div>
					<img className="midLogo" src={logo} alt="" />
				</div>
				<div>
					<img 
						className="options grow" 
						src={options} 
						alt="" 
						onClick={panelOpen}
					/>
				</div>

				
			</div>

			<div id="optionsPanel"
					className={isOpen ? 'show' : 'hide'}
				>

			</div>
		</div>
	);
}

export default HeaderBar