import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import TankInformation from './components/TankInformation/TankInformation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import OptionsPanel from './components/OptionsPanel/OptionsPanel';
import {csv} from 'd3-fetch';
import sampleData from "./sample24.csv"

import GraphView from './components/GraphView/GraphView';

const data = [];


class App extends Component {
  constructor (props) {
    super(props);

    
    this.state = {
      isPaneOpen: false,
      route: 'signin',
      isSignedIn: false,
      time: "N/A",
      percentage: "100",
      selectValue: "hour",
      currentPoint: 1900,
      user: {
        id: '',
        name: 'Jake',
        email: ''
      },
      data: [],
      displayData: []
    };
    this.readData();
   // this.displaySelectedData();
   // this.getTimeRemaining();
    

  }

  openSidePanel = () => {
    this.setState({isPaneOpen: !this.state.isPaneOpen});
    this.forceUpdate();
  }

  updateTime = (new_time) => {
    this.setState({time: new_time});
  }

  onRouteChange = (route) => {
    console.log(route);
    this.setState({route: route,
                   isPaneOpen: false});
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email
    }});
  }

  readData = () => {
    csv(sampleData).then((data) => {

      for(let i = 0; i < data.length; i++) {
        data[i].y = (data[i].y - 35) / 24 * 100;
        data[i].x = new Date(data[i].x * 1000);
      }
      this.setState({data: data});
      this.setState({displayData: this.state.data.slice(this.state.currentPoint - 60, this.state.currentPoint)})
      this.setState({percentage: "" + Math.round(this.state.data[this.state.currentPoint].y)})
      let time = this.state.data[this.state.currentPoint].y/100 * 80 / 2;
      this.setState({time: "" + Math.round(time)});
    })


  }

  updateDisplayDate = () => {
    if(this.state.selectValue === 'hour') {
      this.setState({displayData: this.state.data.slice(this.state.currentPoint - Math.min(60, this.state.currentPoint), this.state.currentPoint)});
    }
    if(this.state.selectValue === 'day') {
      this.setState({displayData: this.state.data.slice(this.state.currentPoint - Math.min(1440, this.state.currentPoint), this.state.currentPoint)});
    }
    if(this.state.selectValue === 'week') {
     this.setState({displayData: this.state.data.slice(this.state.currentPoint - Math.min(10080, this.state.currentPoint), this.state.currentPoint)});
    }
    this.setState({percentage: "" + Math.round(this.state.data[this.state.currentPoint].y)})
    let time = this.state.data[this.state.currentPoint].y/100 * 80 / 2;
    this.setState({time: "" + Math.round(time)});
  }


  onSelectChange = (event) => {
    this.setState({selectValue: event.target.value}, () => this.updateDisplayDate());  
  }

  getTimeRemaining = function(){
    console.log("Returning time left");
    var request_url = "http://iglooboiler.appspot.com/jakestank"
    const Http = new XMLHttpRequest();
    Http.open("GET", request_url);
    Http.send();
    Http.onreadystatechange=(e)=>{
      console.log(Http.responseText)
      this.updateTime("Done!")
    }
  }

  getPercentRemaining = () => {
    console.log("Returning percent")
    return "100";
  }


  pushToGraph = () => {
    if(this.state.currentPoint < this.state.data.length - 1)
      this.setState({currentPoint: this.state.currentPoint + 1}, () => this.updateDisplayDate());
  }


  


  render() {
    return (
      <div className="App">
        <HeaderBar panelOpen={this.openSidePanel} isOpen={this.state.isPaneOpen} />
        { this.state.route === 'home' || this.state.route === 'graph' 
          ? <div className="mainBody"> 
             <OptionsPanel 


        				isOpen={this.state.isPaneOpen} 
        				onRouteChange={this.onRouteChange}
                currentRoute={this.state.route}
                progressTime={this.pushToGraph}
			       />
              {this.state.route === 'home'
                ? <TankInformation 
                time={this.state.time + " minutes"}
                percentage={this.state.percentage}
				        name={this.state.user.name}


              />
                : <GraphView 
                    data ={this.state.displayData}
                    isOpen ={this.state.isPaneOpen}
                    handleChange = {this.onSelectChange}
                />}
              
            </div>
          : this.state.route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange} />
            : this.state.route === 'register' 
              ? <Register onRouteChange={this.onRouteChange} />
              : <div></div>
          
        }
        
      </div>
    );
  }
}

export default App;
