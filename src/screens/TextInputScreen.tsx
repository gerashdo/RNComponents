
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text } from 'react-native'
import { TextInput, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {

    const { onChange, form, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false,
    })

    return (
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        >
            <ScrollView>
                <View style={ styles.globalMargin }>
                    <HeaderTitle title='TextInput'/>
                    <TextInput 
                        style={ localStyles.textInput }
                        placeholder='Nombre'
                        onChangeText={ ( text ) => onChange( text, 'name' ) }
                        autoCapitalize='words'
                        autoCorrect={ false }
                    />
                    <TextInput 
                        style={ localStyles.textInput }
                        placeholder='Email'
                        onChangeText={ ( text ) => onChange( text, 'email' ) }
                        autoCapitalize='none'
                        autoCorrect={ false }
                        keyboardType='email-address'
                    />
                    <View style={ localStyles.switchContainer }>
                        <Text style={{ fontSize: 18 }}>Suscribirme</Text>
                        <CustomSwitch 
                            isOn={ isSuscribed }
                            onChange={ ( value ) => onChange( value, 'isSuscribed')}
                        />
                    </View>
                    <HeaderTitle 
                        title={ JSON.stringify( form, null, 3 ) }
                    />
                    <HeaderTitle 
                        title={ JSON.stringify( form, null, 3 ) }
                    />
                    <TextInput 
                        style={ localStyles.textInput }
                        placeholder='Teléfono'
                        onChangeText={ ( text ) => onChange( text, 'phone' ) }
                        keyboardType='number-pad'
                    />

                    <View style={{ height: 75 }} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const localStyles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    stateText: {
        fontSize: 20
    },
    switchContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 10,
    }
})
