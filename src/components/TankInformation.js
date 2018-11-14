import React from 'react';
import './TankInformation.css';


const TankInformation = ({time, percentage}) => {
	return (
		<div>
			<h1>There's about {time} of hot water in your tank.</h1>
			<div className="tankTop"> 
				<h1>{percentage}%</h1>
			</div>
			<div id="tank">
				<div className="waterWave"></div>
			</div>
		</div>
	);
}

export default TankInformation;