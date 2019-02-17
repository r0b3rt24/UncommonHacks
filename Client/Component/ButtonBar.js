import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";

export class ButtonBar extends Component {
  render() {
    const styles = StyleSheet.create({
      buttonContainer: {
        display: 'none',
        width: 200,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      button: {
        backgroundColor: '#666',
        padding: 100
      }
    })

    return (
      <View style = {styles.buttonContainer}>
        <Button
          style = {styles.button}
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          style = {styles.button}
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
