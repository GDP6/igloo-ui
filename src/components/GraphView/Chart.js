import React from 'react';
import Chart from 'chart.js';
import GraphView from './GraphView.js';

let config = {};

class CustomChart extends React.Component {
    constructor() {
        super();
        this.ctx = document.getElementById(this._rootNodeID).getContext("2d");
        this.chart = new Chart(this.ctx, config);

    }


    changeHandler(value) {
        this.chart.update();
    }

    render() {
        return (
            <canvas id={this._rootNodeID}>
                <GraphView value={this.state.value} 
                           config={this.config} 
                           onChange={this.changeHandler}/>
            </canvas>
        );
    }
}

export default Chart;