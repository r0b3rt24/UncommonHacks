import React, { Component } from "react";
import { Button, StyleSheet, View, Dimensions } from "react-native";

export default class ButtonBar extends Component {
  render() {
    let width = .9*Dimensions.get('screen').width;


    const styles = StyleSheet.create({
      buttonContainer: {
        // display: 'none',
        width: width,

        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5FCFF'
      },
      button: {
        backgroundColor: '#000',
        padding: 300
      }
    })

    return (
      <View style = {styles.buttonContainer}>
        <Button
          style = {styles.button}
          title="Love"
          color="hotpink"
          accessibilityLabel="Learn more about this purple button"
        ></Button>
        <Button
          style = {styles.button}
          title="Hate"
          color="black"
          accessibilityLabel="Learn more about this purple button"
        ></Button>
      </View>
    );
  }
}
