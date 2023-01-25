
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces'
import { RootStackParamList } from '../navigator/Navigator';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    menuItem: MenuItem
}

export const ListMenuItem = ( { menuItem }: Props ) => {
    const { theme:{ colors }} = useContext( ThemeContext )

    const navigator = useNavigation<StackNavigationProp<RootStackParamList>>()

    return (
        <TouchableOpacity
            activeOpacity={ 0.7 }
            onPress={ () => navigator.dispatch(
                CommonActions.navigate({ name: menuItem.component })
            )}
        >
            <View style={ styles.container }>
                <Icon 
                    name={ menuItem.icon } 
                    size={ 20 } 
                    color={ colors.primary }
                    />
                <Text style={{ ...styles.textItem, color: colors.text }}>
                    { menuItem.name }
                </Text>

                <View style={{ flex: 1 }} />
                
                <Icon 
                    name='chevron-forward-outline'
                    size={ 20 } 
                    color={ colors.primary }
                    />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    textItem: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '500'
    }
})
