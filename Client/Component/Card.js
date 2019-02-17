import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Card extends Component{
    render(){
        const styles = StyleSheet.create({
            card: {
                width: 500,
                height: '20%',
                padding: 10,
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',     
                borderWidth: 1        
            },
            img: {
                height: 300, 
                width: 300
            },
            textWrapper: {
                height: 50,
                width: 300,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            words: {
                padding: 10,
                fontSize: 20,
            }

        });
        return(
            <View style={styles.card} shadowColor={'black'} shadowRadius={100}>
                <Image
                    style={styles.img}
                    source={{uri: 'https://static1.squarespace.com/static/56227557e4b0007a00065273/58cf33b029687fc957dcb83e/58cf38bdf7e0ab911f7a1123/1489975789154/yuri-shwedoff-return-internet.jpg?format=2500w'}}
                  />
                <Text>Static message</Text>
                <View style={styles.textWrapper}>
                    <Text style={styles.words}>Restaurant name</Text>
                    <Text style={styles.words}>$ $ $</Text>
                </View>
            </View>
        );          
    }  
}
