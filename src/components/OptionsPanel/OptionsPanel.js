import React from 'react';

import './OptionsPanel.css';

const OptionsPanel = ({isOpen}) => {
	return (
		<div 
			id="panel"
			className={
				isOpen ? 'show' : 'hide'
			} 
		>
			<div className='inner bg-white br3 center'>
				
			</div>
		</div>
	)
}

export default OptionsPanel;