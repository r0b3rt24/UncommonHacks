/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image,Button } from "react-native";
import Card from "./Component/Card";
import ButtonBar from "./Component/ButtonBar";
import { createStackNavigator, createAppContainer } from "react-navigation";


class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export class HomeScreen extends Component {

  state = {
    location: null,
    name: null,
    place: null,
    price: null,
    img: null
    // zFirst: -1,
    // zSecond: 100,
  };

  componentDidMount() {
    this.setState({
      location: this.findCoordinates(),
      // zFirst: -1,
      // zSecond: 100,
    })
  }

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const loc = JSON.stringify(position);
        this.setState({ 
          location: loc
         });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  onClick = () => {
    this.setState({
      location: this.findCoordinates(),
    })
    // let m = zFirst;
    // this.setState({
    //   zFirst: zSecond,
    //   zSecond: m,
    // })
  }

  render() {
    return (
      <View style={styles.container}>
      {/* <Text>Geo: {this.state.location}</Text> */}
        {/* <Card pos="absolute" zIndex={this.state.zFirst} uri="https://static1.squarespace.com/static/56227557e4b0007a00065273/58cf33b029687fc957dcb83e/58cf38bdf7e0ab911f7a1123/1489975789154/yuri-shwedoff-return-internet.jpg?format=2500w" caption="Running Human" restaurant="Moon" price="$$$" style={styles.card} /> */}
        <Card pos="relative" zIndex={this.state.zSecond} uri="https://static1.squarespace.com/static/56227557e4b0007a00065273/58cf33b029687fc957dcb83e/58cf38c4f7e0ab911f7a119f/1489975789611/yuri-shwedoff-core-i.jpg?format=2500w" caption="Man Facing Wall" restaurant="Hell" price="$$$$$" style={styles.card} />
        {/* <Card pos="relative" zIndex={this.state.zSecond} uri={ this.state.img } caption={this.state.name} restaurant={this.state.name} price="$$$$$" style={styles.card} /> */}
        <ButtonBar onHandle = {this.onClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 40
  },
  welcome: {
    // fontSize: 120,
    // textAlign: 'center',
    // margin: 10,
  },
  instructions: {
    // fontSize: 30
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
  },
  card: {}
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);