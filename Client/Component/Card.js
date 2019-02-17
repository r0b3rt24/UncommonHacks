import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default class Card extends Component{

    
    render(){
        let xDimension = .85*Dimensions.get('screen').width;
        let yDimension = .65*Dimensions.get('screen').height;

        const shadow = {

        }

        const styles = StyleSheet.create({
            card: {
                zIndex: this.props.zIndex,
                position: this.props.pos,
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
            <View shadowColor={'black'} 
                shadowRadius={10} 
                shadowOpacity={.75} 
                shadowOffset={{ height: 3, width: 1 }}>

            <View style={styles.card} >
                <Image
                    style={styles.img}
                    source={{uri: this.props.uri}}
                  />
                <Text style={styles.caption}>{ this.props.caption }</Text>
                <View style={styles.textWrapper}>
                    <Text style={styles.subtext}>{ this.props.restaurant }</Text>
                    <Text style={[styles.subtext,{color: 'lightgreen'}]}>{ this.props.price }</Text>
                </View>
            </View>
            </View>
        );          
    }  
}

