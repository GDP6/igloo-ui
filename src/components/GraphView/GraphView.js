import React from 'react';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, MarkSeries, makeWidthFlexible} from 'react-vis';
// nothing to see here
import './../../../node_modules/react-vis/dist/style.css';
import './GraphView.css';


const GraphView = ({data}) => {

	const FlexibleXYPlot = makeWidthFlexible(XYPlot);

	return (
		<div className="graphMain">
			<FlexibleXYPlot height = {400}>
				<LineSeries data={data} />
				<XAxis />
				<YAxis />
				<VerticalGridLines />
				<HorizontalGridLines />

			</FlexibleXYPlot>
		</div>
	);
}

export default GraphView;