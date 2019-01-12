import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import TankInformation from './components/TankInformation/TankInformation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import OptionsPanel from './components/OptionsPanel/OptionsPanel';
import GraphView from './components/GraphView/GraphView';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      route: 'signin',
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


  render() {
    return (
      <div className="App">
        <HeaderBar panelOpen={this.openSidePanel} isOpen={this.state.isPaneOpen} />
        { this.state.route === 'home' || this.state.route === 'graph' 
          ? <div> 
             <OptionsPanel 
				isOpen={this.state.isPaneOpen} 
				onRouteChange={this.onRouteChange}
        currentRoute={this.state.route}
			 />
              {this.state.route === 'home'
                ? <TankInformation 
                time="20 minutes"
                percentage="100"
				        name={this.state.user.name}
              />
                : <GraphView />}
              
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
