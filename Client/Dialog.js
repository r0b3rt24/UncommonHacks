import Dialog from "react-native-dialog";
import { Platform, StyleSheet, Text, View, Image,Button,TouchableOpacity } from "react-native";
import React, { Component } from "react";

export default class DialogTester extends Component {
    state = {
      dialogVisible: false
    };
   
    showDialog = () => {
      this.setState({ dialogVisible: true });
    };
   
    handleOk = () => {
      this.setState({ dialogVisible: false });
    };
   
   
    render() {
    if( this.props.show) {
      return (
        <View>
          <TouchableOpacity onPress={this.showDialog}>
            <Text>{this.props.name}}</Text>
          </TouchableOpacity>
          <Dialog.Container visible={true}>
            <Dialog.Title>{this.props.name}</Dialog.Title>
            <Dialog.Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Dialog.Description>
            <Dialog.Button label="Ok" onPress={this.handleOk} />
          </Dialog.Container>
        </View>
      );
    } else {
        return (
            <View></View>
        )
    }
  }
}