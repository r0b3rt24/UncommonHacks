import React, { Component } from "react";
import { Button, StyleSheet, View, Dimensions } from "react-native";

export default class ButtonBar extends Component {
  render() {
    let width = .85*Dimensions.get('screen').width;


    const styles = StyleSheet.create({
      buttonContainer: {
        // display: 'none',
        width: width,
        paddingTop: 60,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        backgroundColor: '#777',
      }
    })

    return (
      <View style = {styles.buttonContainer}>
        <Button
          style = {styles.button}
          title="Love"
          color="hotpink"
        ></Button>
        <Button
          style = {styles.button}
          title="Hate"
          color="black"
        ></Button>
      </View>
    );
  }
}
