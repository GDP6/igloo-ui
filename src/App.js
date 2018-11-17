import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import TankInformation from './components/TankInformation';
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
      isSignedIn: false
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  openSidePanel = () => {
    this.setState({isPaneOpen: true});
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false});
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }


  render() {
    return (
      <div className="App">
        <HeaderBar panelOpen={this.openSidePanel} />
        { this.state.route === 'home' 
          ? <div> 
            <TankInformation 
            time="20 minutes"
            percentage="90"
            />
          <SlidingPane
            isOpen={ this.state.isPaneOpen }
            title='Some Title'
            subtitle='Some subtitle'
            from='right'
            width='500px'
            onRequestClose={ () => {
              this.setState({ isPaneOpen: false});
            }} />
          </div>
          : <div>
            <button onClick={() => this.setState({route: 'home'})}>
              Sign in 
            </button>
          </div>
        }
        
      </div>
    );
  }
}

export default App;
