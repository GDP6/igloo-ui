import React from 'react';
import './TankInformation.css';


const TankInformation = ({time, percentage}) => {

	return (
		<div className='tankInfo'>
			<h1>There's about {time} of hot water in your tank.</h1>
			<div className="tankTop"> 
				<h1>{percentage}%</h1>
			</div>
			<div className="tank">

				<div className="waterWave" style={{top: (80 - percentage * 0.7) + '%'}}></div>
			</div>

		</div>
	);
}

export default TankInformation;