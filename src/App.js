import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import TankInformation from './components/TankInformation/TankInformation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import OptionsPanel from './components/OptionsPanel/OptionsPanel';
import GraphView from './components/GraphView/GraphView';

  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
];

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      route: 'graph',
      isSignedIn: false,
      user: {
        id: '',
        name: 'Bob',
        email: ''
      }
      
    };
  }

  openSidePanel = () => {
    this.setState({isPaneOpen: !this.state.isPaneOpen});
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



pushToGraph = (a,b) => {
  data.push({x: a, y: b});
  console.log("click");
  this.forceUpdate();
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
			       />
             <button onClick={() => this.pushToGraph(10,4)}> click </button>
              {this.state.route === 'home'
                ? <TankInformation 
                time="20 minutes"
                percentage="100"
				        name={this.state.user.name}
              />
                : <GraphView 
                    data ={data}

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
