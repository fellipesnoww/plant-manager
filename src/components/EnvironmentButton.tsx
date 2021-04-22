import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

interface EnvironmentButtonProps extends RectButtonProps{
    title: string;
    active?: boolean;
}

export function EnvironmentButton({title, active=false, ...rest} : EnvironmentButtonProps){
    return (
        <RectButton 
            style={[
                styles.container,
                styles.containerActive
            ]}             
            {...rest}
        >
            <Text 
            style={[
                styles.text,
                styles.textActive
            ]}> 
                {title}
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: colors.shape,
       height: 40,
       width: 76,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 12,
       marginHorizontal: 5
    },    
    containerActive:{
        backgroundColor: colors.green_light
    },
    text:{
        color: colors.gray,
        fontFamily: fonts.text
    },
    textActive:{
        fontFamily: fonts.heading,
        color: colors.green_dark,
    }
});