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

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card} />
        <ButtonBar/>
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
    paddingTop: 100
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
