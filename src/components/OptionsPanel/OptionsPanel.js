import React from 'react';

import './OptionsPanel.css';

const OptionsPanel = ({isOpen, onRouteChange, currentRoute}) => {
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
						className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib'
					
					> Show usage graph</button>
					: <button 
						onClick={() => onRouteChange('home')} 
						className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib'
					
					> Show tank</button>
				}
				
				<button 
					onClick={() => onRouteChange('signin')} 
					className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib'
					
				> Sign Out </button>
			</div>
		</div>
	)
}

export default OptionsPanel;