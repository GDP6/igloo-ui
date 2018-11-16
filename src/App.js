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
      isPaneOpen: false
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }


  render() {
    return (
      <div className="App">
        <HeaderBar />
        <button onClick={ () => this.setState( {isPaneOpen: true} ) } />
        <TankInformation 
          time="20 minutes"
          percentage="90"
        />
        <SlidingPane
          isOpen={ this.state.isPaneOpen }
          title='Some Title'
          subtitle='Some subtitle'
          from='left'
          width='200px'
          onRequestClose={ () => {
            this.setState({ isPaneOpen: false});
          }} />
      </div>
    );
  }
}

export default App;
