import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default class Card extends Component{

    
    render(){
        let xDimension = .8*Dimensions.get('screen').width;
        let yDimension = .65*Dimensions.get('screen').height;


        const styles = StyleSheet.create({
            card: {
                height: yDimension,
                flex: 0,
                padding: 0,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',     
                borderRadius: 10,
                backgroundColor: '#222222',
                overflow: 'hidden',
            },
            img: {
                height: xDimension, 
                width: xDimension,    
            },
            caption: {
                fontSize: 35,
                color: 'white',
                paddingTop: 30,
                paddingBottom: 40,
            },
            textWrapper: {
                paddingBottom: 15,
                width: 270,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between'
            },           
            subtext: {
                fontSize: 15,
                padding: 0,
                color: 'white'
            }

        });
        return(
            <View shadowColor={'grey'} shadowRadius={3} shadowOpacity={.75} shadowOffset={{ height: 2, width: 1 }}>
            <View style={styles.card} >
                <Image
                    style={styles.img}
                    source={{uri: 'https://static1.squarespace.com/static/56227557e4b0007a00065273/58cf33b029687fc957dcb83e/58cf38bdf7e0ab911f7a1123/1489975789154/yuri-shwedoff-return-internet.jpg?format=2500w'}}
                  />
                <Text style={styles.caption}>Static message</Text>
                <View style={styles.textWrapper}>
                    <Text style={styles.subtext}>Restaurant name</Text>
                    <Text style={[styles.subtext,{color: 'lightgreen'}]}>$$</Text>
                </View>
            </View>
            </View>
        );          
    }  
}

