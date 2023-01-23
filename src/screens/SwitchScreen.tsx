
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Switch, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const SwitchScreen = () => {

    const [ state, setState ] = useState({
        isActive: false,
        isHungry: true,
        isHappy: true,
    })

    const onChange = ( value: boolean, field: string ) => {
        setState({
            ...state,
            [ field ]: value
        })
    }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
        <HeaderTitle title='Switches' />

        <View style={ localStyles.switchContainer }>
            <Text style={{ fontSize: 18 }}>Is active</Text>
            <CustomSwitch 
                isOn={ state.isActive }
                onChange={ ( value ) => onChange( value, 'isActive')}
            />
        </View>
        <View style={ localStyles.switchContainer }>
            <Text style={{ fontSize: 18 }}>Is Hungry</Text>
            <CustomSwitch 
                isOn={ state.isHungry }
                onChange={ ( value ) => onChange( value, 'isHungry')}
            />
        </View>
        <View style={ localStyles.switchContainer }>
            <Text style={{ fontSize: 18 }}>Is happy</Text>
            <CustomSwitch 
                isOn={ state.isHappy }
                onChange={ ( value ) => onChange( value, 'isHappy')}
            />
        </View>

        <Text style={ localStyles.stateText }>
            { JSON.stringify( state, null, 4 )}
        </Text>
    </View>
  )
}

const localStyles = StyleSheet.create({
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
