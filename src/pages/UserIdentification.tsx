import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function UserIdentification(){
    const navigation = useNavigation();

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleSubmit(){
        navigation.navigate('Confirmation');
    }

    function handleInputFocus(){
        setIsFocused(true);   
    }

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name)   
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

  return (
      <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                {isFilled ? '😄' : '😀'}
                            </Text>
                            <Text style={styles.title}>
                                Como podemos{'\n'}
                                chamar você?
                            </Text>
                        </View>
                        <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && {borderColor: colors.green}
                            ]}
                            placeholder="Digite seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        >

                        </TextInput>
                        <View style={styles.footer}>
                            <Button title="Confirmar" onPress={handleSubmit}/>
                        </View>
                    </View>
                </View>
              </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: "100%"
    },
    title:{
        fontSize: 24,
        textAlign: "center",
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',        
    },
    header:{
        alignItems: "center"
    },
    emoji: {
        fontSize: 44
    },
    input:{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: "100%",
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: "center"
    },
    footer:{
        marginTop: 40,
        width: "100%",
        paddingHorizontal: 20
    }
});