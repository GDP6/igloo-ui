import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import TankInformation from './components/TankInformation/TankInformation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
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
        name: '',
        email: ''
      }
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  openSidePanel = () => {
    this.setState({isPaneOpen: true});
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
        <HeaderBar panelOpen={this.openSidePanel} />
        { this.state.route === 'home' 
          ? <div> 
            <TankInformation 
            time="20 minutes"
            percentage="100"
            />
          <SlidingPane
            isOpen={ this.state.isPaneOpen }
            title='Some Title'
            subtitle='Some subtitle'
            from='right'
            width='500px'
            onRequestClose={ () => {
              this.setState({ isPaneOpen: false});
            }}>
              <button onClick={()=>this.onRouteChange('signin')}> Log Out </button>
            </SlidingPane>
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
