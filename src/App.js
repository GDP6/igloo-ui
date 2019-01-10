import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import TankInformation from './components/TankInformation/TankInformation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import OptionsPanel from './components/OptionsPanel/OptionsPanel';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      route: 'signin',
      isSignedIn: false,
      time: "N/A",
      percentage: "100",
      user: {
        id: '',
        name: 'Jake',
        email: ''
      }
    };
    this.getTimeRemaining();
  }

  openSidePanel = () => {
    this.setState({isPaneOpen: !this.state.isPaneOpen});
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

  render() {
    return (
      <div className="App">
        <HeaderBar panelOpen={this.openSidePanel} isOpen={this.state.isPaneOpen} />
        { this.state.route === 'home' 
          ? <div> 
             <OptionsPanel 
				isOpen={this.state.isPaneOpen} 
				onRouteChange={this.onRouteChange}
			 />
             <TankInformation
                time={this.state.time}
                percentage={this.state.percentage}
			      	  name={this.state.user.name}
              />
              
            </div>
          : this.state.route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
          
        }
        
      </div>
    );
  }
}

export default App;
