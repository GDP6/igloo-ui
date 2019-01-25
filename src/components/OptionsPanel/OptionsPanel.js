import React from 'react';

import './OptionsPanel.css';

const OptionsPanel = ({isOpen, onRouteChange, currentRoute, progressTime}) => {
	return (
		<div 
			id="panel"
			className={
				isOpen ? 'show' : 'hide'
			} 
		>


			
				
			

			<div className='inner bg-white br3 center'>
				{currentRoute === 'home'
					? <button 
						onClick={() => onRouteChange('graph')} 
						className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib fl w-third'
					
					> Show usage graph</button>
					: <button 
						onClick={() => onRouteChange('home')} 
						className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib fl w-third'
					
					> Show tank</button>
				}

				<button 
					onClick={() => progressTime()} 
					className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib fl w-third'
					
				> Prgress Time (for testing) </button>
				
				<button 
					onClick={() => onRouteChange('signin')} 
					className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib fl w-third'
					
				> Sign Out </button>
			</div>
		</div>
	)
}

export default OptionsPanel;