import React from 'react';

import './SlidingPanel.css';

const SlidingPanel = ({isOpen}) => {
	return (
		<div 
			id='menu'
			className={
				isOpen ?
					'show'
				:	'hide'
			}>
			
		</div>
	);
}

export default SlidingPanel;