import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Counties } from '../api/counties.js';
import { Lsoas } from '../api/lsoas.js';

import Map from './Map.jsx';
import Menu from './Menu.jsx';
import AppBar from './AppBarDemand.jsx';
import ZoomButton from './ZoomButton.jsx';
import Panel from './Panel.jsx';
 
// App component - represents the whole app
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      county: false,
    };
  }
  
  zoomToCounty(_county) {
    console.log("here");
    this.setState({county: true});
    
  }

 
  render() {
    let geojson = this.state.county ? this.props.lsoas : this.props.counties;
    return (
      <div>
        <AppBar />
        <Panel>
          <Map geojson={geojson} zoomToCounty={this.zoomToCounty.bind(this)}/>
        </Panel>
        <Panel>
          <ZoomButton />
        </Panel>
      </div>
    );
  }
}

App.propTypes = {
  counties: PropTypes.array.isRequired,
  lsoas: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    counties: Counties.find({}).fetch(),
    lsoas: Lsoas.find({}).fetch(),
  };
}, App);