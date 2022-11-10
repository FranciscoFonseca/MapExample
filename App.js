import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
export default class App extends Component {
  render() {
    return (
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        initialRegion={{
          latitude: 15.517142925459199,
          longitude: -88.0341332614729,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Marker
          coordinate={{
            latitude: 15.517142925459199,
            longitude: -88.0341332614729,
          }}
          title="UNICAH"
          description="Universidad catolica de Honduras"></Marker>
      </MapView>
    );
  }
}
