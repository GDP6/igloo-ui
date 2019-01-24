import React from 'react';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, MarkSeries, makeWidthFlexible} from 'react-vis';
// nothing to see here
import './../../../node_modules/react-vis/dist/style.css';
import './GraphView.css';


const GraphView = ({data}) => {

	const FlexibleXYPlot = makeWidthFlexible(XYPlot);


	return (
		<div className="graphMain">
			<h1>Graph!!!</h1>
			<div className="graph">
				<FlexibleXYPlot height = {400} xType="time" color="magenta">
					<LineSeries data={data} color="#FF0099" />
					<XAxis />
					<YAxis />
					<VerticalGridLines />
					<HorizontalGridLines />

				</FlexibleXYPlot>
			</div>
		</div>
	);
}

export default GraphView;