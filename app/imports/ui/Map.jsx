import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Map extends Component {

  componentDidMount() {
    var map = L.map('map', {
        center: [53, -5],
        zoom: 6
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'nqmivan.12id4bh0',
        accessToken: 'pk.eyJ1IjoibnFtaXZhbiIsImEiOiJjaXJsendoMHMwMDM3aGtuaGh2bWt5OXRvIn0.6iCk2i96NUucsyDlbnVtiA'
    }).addTo(map);
  }

  render() {
    return (
      <div 
        id="map" 
        style={{"height" : "400px"}}
      >
      </div>
    );
  }
}
 