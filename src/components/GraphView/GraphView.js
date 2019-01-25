import React from 'react';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, MarkSeries, makeWidthFlexible} from 'react-vis';
// nothing to see here
import './../../../node_modules/react-vis/dist/style.css';
import './GraphView.css';


const GraphView = ({data, isOpen, handleChange}) => {

	const FlexibleXYPlot = makeWidthFlexible(XYPlot);


	return (
		<div id="graphMain" className= {
			isOpen ? 'back' : 'front'
		} >
			<h1>Amount of hot water in the tank over time.</h1>
			<div className="graph">
				<FlexibleXYPlot height = {400} xType="time" yDomain={[0, 100]}>
					<LineSeries data={data} color="#FF0099" />
					<XAxis title ="Time of day" position = "middle"/>
					<YAxis title = "Percentage of water in the tank" position = "middle"/>
					<VerticalGridLines />
					<HorizontalGridLines />
					
				</FlexibleXYPlot>
				<h3>Select time period</h3>
				<select onChange={handleChange} name="Time Period" className='dropdown b pr4 pl2 pv1 input-reset ba b--black bg-transparent f4' >
					<option value="hour" className='b ph4 pv2 input-reset ba b--black bg-transparent f4'>Last Hour</option>
					<option value="day" className='b ph4 pv2 input-reset ba b--black bg-transparent f4'>Last Day</option>
					<option value="week" className='b ph4 pv2 input-reset ba b--black bg-transparent f4'>Last Week</option>
				</select>
			</div>
			
		</div>
	);
}

export default GraphView;