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
import Dialog from "./Dialog";



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
    name: "LOL",
    place: null,
    price: null,
    img: "KKKKKK",
    loved: false,
    // zFirst: -1,
    // zSecond: 100,
  };


  componentDidMount() {
    fetch("http://34.73.28.238:3000/next")
    .then(result => result.json())
    .then(data => this.setState({ 
      img: data.url,
      name: data.caption ? data.caption : "",
     }));
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

  getNext () {
    console.log("mounting");
    data = null;
    fetch("http://34.73.28.238:3000/next")
      .then(result => result.json())
      .then(data => this.setState({ 
        img: data.url,
        name: data.caption ? data.caption : "",
        place: data.name
       }));
  }

  handle = () => {
    console.log("handle")
    this.getNext();
  };

  toLove = () => {
    this.setState({
      loved: true,
    })
  }

  toNotLove = () => {
    this.setState({
      loved: false,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Dialog name={this.state.name} show={this.state.loved}></Dialog>
        <Card pos="relative" zIndex={this.state.zSecond} uri={ this.state.img } caption={this.state.name} restaurant={this.state.place} price="$$$$$" style={styles.card} />
        <ButtonBar onHandle={() => this.handle()}/>
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
  card: {}
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);