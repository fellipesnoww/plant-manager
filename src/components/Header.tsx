import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import image from '../assets/watering.png'

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Fellipe</Text>                
            </View>
            <Image source={image} style={styles.image}/>
        </View>       
    );
}

const styles = StyleSheet.create({
   container: {
       width: '100%',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       paddingVertical: 30,       
       marginTop: getStatusBarHeight(),       
   },
   greeting:{
       fontSize: 32,
       color: colors.heading,
       fontFamily: fonts.text
   },
   userName:{
       fontSize: 32,
       fontFamily: fonts.heading,
       color: colors.heading,
       lineHeight: 40
   },
   image:{
       width: 70,
       height: 70,
       borderRadius: 40
   }
});